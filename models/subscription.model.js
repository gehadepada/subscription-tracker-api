import mongoose from "mongoose";

const subscriptionsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Subscription price is required"],
      min: [0.01, "Price must be greater than zero"],
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
      required: true,
    },
    category: {
      type: String,
      enum: ["sports", "news", "lifestyle", "technology", "finance", "other"],
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "canceled", "expired"],
      default: "active",
    },
    startDate: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => value <= new Date(Date.now() + 1000),
        message: "Start date must be in the past",
      },
    },
    renewalDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "Renewal date must be after start date",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

subscriptionsSchema.pre("save", function (next) {
  if (!this.renewalDate) {
    const renewalDate = new Date(this.startDate);

    switch (this.frequency) {
      case "daily":
        renewalDate.setDate(renewalDate.getDate() + 1);
        break;
      case "weekly":
        renewalDate.setDate(renewalDate.getDate() + 7);
        break;
      case "monthly":
        renewalDate.setMonth(renewalDate.getMonth() + 1);
        break;
      case "yearly":
        renewalDate.setFullYear(renewalDate.getFullYear() + 1);
        break;
    }

    this.renewalDate = renewalDate;
  }

  if (this.isNew && this.renewalDate < new Date()) {
    this.status = "expired";
  }
});

const Subscription = mongoose.model("Subscription", subscriptionsSchema);
export default Subscription;
