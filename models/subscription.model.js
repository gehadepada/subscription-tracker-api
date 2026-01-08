import mongoose, { Schema } from "mongoose";

const subscriptionsScheme = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "Subscription name is required"],
        trim:true,
    },
    price:{
        type:Number,
        required:[true , "Subscription price is required"],
        min:[0,"Price should be greater than zero"]
    },
    frequency:{
        type:String,
        enum:['daily' , 'weekly' , 'monthly' , 'yearly'],

    },
    category:{
        type:String,
        enum:['sports' , 'news' ,'lifestyle','technology','finance' , 'other'],
        required:true,
    },
    paymentMethod:{
         type:String,
          required:true,
           trim:true,

    },
    status:{
        type:String,
        enum:['active','canceled','expired'],
        default:'active',
    },
    startDate:{
        type:Date,
        required:true,
        validate:{
            validator:(value)=>value<=new Date(),
            message:'Start date must be in the past',
        }
    },
     renewalDate:{
        type:Date,
        validate:{
            validator:function(value)
            {
                value  > this.startDate
            },
            message:'Renewal date must be after start date',
        }
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref :'User',
        required:true,
        index:true,
    }

},{timestamps :true});

subscriptionsScheme.pre('save' , function(next)
{
    if(!this.renewalDate)
    {
        const renewalPeriods={
            daily:1,
            weekly:7,
            monthly:10,
            yearly:365,
        };
        this.renewalDate=new Date(this.start);
        this.renewalDate.setDate(this.renewalDate.getDate()+renewalPeriods[this.frequency]);
    }
    if(this.renewalDate < new Date())
    {
        this.status='expired';
    }
    next();

});
const Subscription =mongoose.model('Subscription',subscriptionsScheme);
export default Subscription;