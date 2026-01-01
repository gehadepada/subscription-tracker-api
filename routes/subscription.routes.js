import {Router} from "express";

const subscriptionRoute = Router();

subscriptionRoute.get('/' , (req , res)=>res.send({title : "get all subscriptions"}));