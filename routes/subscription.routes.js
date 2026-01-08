import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRoute = Router();

subscriptionRoute.get('/upcoming-renewals', (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);

subscriptionRoute.get('/user/:id',authorize , getUserSubscriptions);

subscriptionRoute.get('/', (req, res) =>
  res.send({ title: "GET all subscriptions" })
);

subscriptionRoute.post('/',authorize , createSubscription);

subscriptionRoute.put('/:id/cancel', (req, res) =>
  res.send({ title: "CANCEL subscription" })
);

subscriptionRoute.get('/:id', (req, res) =>
  res.send({ title: "GET subscription details" })
);

subscriptionRoute.put('/:id', (req, res) =>
  res.send({ title: "UPDATE subscription" })
);

subscriptionRoute.delete('/:id', (req, res) =>
  res.send({ title: "DELETE subscription" })
);

export default subscriptionRoute;


