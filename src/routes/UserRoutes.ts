import { Router } from "express";
import UserController from "../controllers/UserController";
const userRouter = Router();
const userController = new UserController();

/////////////////   get all   /////////////////
userRouter.get("/", (req, res) => {
  console.log("UserRouter");
  userController.getAll(req, res);
});

/////////////////   get by id   /////////////////
userRouter.get("/:id", (req, res) => {
  console.log("UserRouter");
  userController.getById(req, res);
});

/////////////////   create   /////////////////
userRouter.post("/", (req, res) => {
  console.log("UserRouter");
  userController.create(req, res);
});

/////////////////   update   /////////////////
userRouter.put("/:id", (req, res) => {
  console.log("UserRouter");
  userController.update(req, res);
});

/////////////////   delete   /////////////////
userRouter.delete("/:id", (req, res) => {
  console.log("UserRouter");
  userController.delete(req, res);
});

export default userRouter;


