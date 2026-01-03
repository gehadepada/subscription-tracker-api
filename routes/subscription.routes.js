import { Router } from "express";

const subscriptionRoute = Router();

subscriptionRoute.get('/upcoming-renewals', (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);

subscriptionRoute.get('/user/:id', (req, res) =>
  res.send({ title: "GET all user subscriptions" })
);

subscriptionRoute.get('/', (req, res) =>
  res.send({ title: "GET all subscriptions" })
);

subscriptionRoute.post('/', (req, res) =>
  res.send({ title: "CREATE new subscription" })
);

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


