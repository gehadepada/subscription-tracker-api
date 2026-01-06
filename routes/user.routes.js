import {Router} from "express";
import { getUser, getUsers } from "../controllers/user.controller";
import authorize from "../middlewares/auth.middleware";

const userRoute = Router();

userRoute.get('/',getUsers);

userRoute.get('/:id',authorize,getUser);

userRoute.post('/',(req,res )=>res.send( {title:"CREATE new user"}));

userRoute.put('/:id',(req,res )=>res.send( {title:"UPDATE user details"}));

userRoute.delete('/:id',(req,res )=>res.send( {title:"DELETE user"}));

export default userRoute;