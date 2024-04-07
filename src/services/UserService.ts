// import User from "../models/interfaces/User";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import AppDataSource from "../data-source";
import { User } from "../entities/User";
// import AppDataSource from "../data-source";
class UserService {
  private userRepository = AppDataSource.getRepository(User);

  async getAllUsers() {
    console.log("UserService");
    // A terme il y aura une Requete vers la BDD qui peut prendre du temps donc Asynchrone
    // return AppDataSource.query("SELECT * FROM user;");
    return this.userRepository.find();
  }
  async getUserById(id: number) {
    console.log("UserService");
    // return AppDataSource.query(`SELECT * FROM user WHERE id = ${id};`);
    // 🟢 return this.userRepository.findOneBy({ uuid: UUID });
  }
  async createUser(user: User) {
    console.log("UserService");
    // return AppDataSource.query(
    //   `INSERT INTO user (title) VALUES ('${user.title}');`
    // );
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
  async updateUser(id: string, user: User) {
    console.log("UserService");
    // return AppDataSource.query(
    //   `UPDATE user SET title = '${user.title}' WHERE id = ${id};`
    // );
    return this.userRepository.update(id, user);
  }

  async deleteUser(id: string) {
    console.log("UserService");
    // return AppDataSource.query(`DELETE FROM user WHERE id = ${id};`);
    return this.userRepository.delete(id);
  }
}

export default UserService;
