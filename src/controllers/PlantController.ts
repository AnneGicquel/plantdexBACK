import { Request, Response } from "express";
import PlantService from "../services/PlantService";

class PlantController {
  private plantService = new PlantService();

  async getAll(req: Request, res: Response) {
    console.log("PlantController getAll");

    try {
      const plants = await this.plantService.getAll();
      res.send({ status: "Successfully fetched all plants", data: plants });
    } catch (error) {
      res.status(500).send({ status: "Failed to fetch all plants", message: error });
    }
  }

  async getById(req: Request, res: Response) {
    console.log("PlantController getByid");

    try {
      const plant = await this.plantService.getById(Number(req.params.id));
      res.send({ status: "Successfully fetched a plant by id", data: plant });
    } catch (error) {
      res.status(500).send({ status: "Failed to fetch a plant by id", message: error });
    }
  }

  async create(req: Request, res: Response) {
    console.log("PlantController create");

    try {
      const plant = await this.plantService.create(req.body);
      res.send(plant);
    } catch (error) {
      res.status(500).send({ status: "Failed to create a plant", message: error });
    }
  }

  async update(req: Request, res: Response) {
    console.log("PlantController update");

    try {
      const plant = await this.plantService.update(req.params.id, req.body);
      res.send({ status: "Plant updated successfully", data: plant });
    } catch (error) {
      res.status(500).send({ status: "Failed to update a plant", message: error });
    }
  }

  async delete(req: Request, res: Response) {
    console.log("PlantController delete");

    try {
      await this.plantService.delete(req.params.id);
      res.send({status: "Plant deleted successfully"});

    } catch (error) {
      res.status(500).send({ status: "Failed to delete a plant", message: error });
    }
  }
}

export default PlantController;
