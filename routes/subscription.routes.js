import { Router } from "express";

const subscriptionRoute = Router();

/* STATIC ROUTES FIRST */
subscriptionRoute.get('/upcoming-renewals', (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);

subscriptionRoute.get('/user/:id', (req, res) =>
  res.send({ title: "GET all user subscriptions" })
);

/* COLLECTION */
subscriptionRoute.get('/', (req, res) =>
  res.send({ title: "GET all subscriptions" })
);

subscriptionRoute.post('/', (req, res) =>
  res.send({ title: "CREATE new subscription" })
);

/* ACTIONS */
subscriptionRoute.put('/:id/cancel', (req, res) =>
  res.send({ title: "CANCEL subscription" })
);

/* ENTITY ROUTES LAST */
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


