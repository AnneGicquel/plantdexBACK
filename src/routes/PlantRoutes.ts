import { Router } from "express";
import PlantController from "../controllers/PlantController";
const plantRouter = Router();
const plantController = new PlantController();

/////////////////   GET ALL   /////////////////
plantRouter.get("/", (req, res) => {
  console.log("PlantRouter");
  plantController.getAll(req, res);
});

/////////////////   GET BY ID   /////////////////
plantRouter.get("/:id", (req, res) => {
  console.log("PlantRouter");
  plantController.getById(req, res);
});

/////////////////   CREATE   /////////////////
plantRouter.post("/", (req, res) => {
  console.log("PlantRouter");
  plantController.create(req, res);
});

/////////////////   UPDATE   /////////////////
plantRouter.put("/:id", (req, res) => {
  console.log("PlantRouter");
  plantController.update(req, res);
});

/////////////////   DELETE   /////////////////
plantRouter.delete("/:id", (req, res) => {
  console.log("PlantRouter");
  plantController.delete(req, res);
});

export default plantRouter;


