import {Router} from "express";

const userRoute = Router();

userRoute.get('/',(req,res )=>res.send( {title:"GET allusers"}));

userRoute.get('/:id',(req,res )=>res.send( {title:"GET user details"}));

userRoute.post('/',(req,res )=>res.send( {title:"CREATE new user"}));

userRoute.put('/:id',(req,res )=>res.send( {title:"UPDATE user details"}));

userRoute.delete('/:id',(req,res )=>res.send( {title:"DELETE user"}));

export default userRoute;