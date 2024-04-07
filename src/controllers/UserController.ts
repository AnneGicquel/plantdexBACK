import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  private userService = new UserService();

  async getAllUsers(req: Request, res: Response) {
    console.log("UserController");

    try {
      const users = await this.userService.getAllUsers();
      res.send({ status: "OK", data: users });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async getUserById(req: Request, res: Response) {
    console.log("UserController");

    try {
      const user = await this.userService.getUserById(Number(req.params.id));
      res.send({ status: "OK", data: user });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async createUser(req: Request, res: Response) {
    console.log("UserController");

    try {
      const user = await this.userService.createUser(req.body);
      res.send({ status: "OK", data: user });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async updateUser(req: Request, res: Response) {
    console.log("UserController");

    try {
      const user = await this.userService.updateUser(req.params.id, req.body);
      res.send({ status: "OK", data: user });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    console.log("UserController");

    try {
      const user = await this.userService.deleteUser(req.params.id);
      res.send({ status: "OK", data: user });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }
}

export default UserController;
