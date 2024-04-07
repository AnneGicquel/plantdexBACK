// import Plant from "../models/interfaces/Plant";
import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";
// import AppDataSource from "../data-source";
class PlantService {
  private plantRepository = AppDataSource.getRepository(Plant);

  async getAll() {
    console.log("PlantService");
    // A terme il y aura une Requete vers la BDD qui peut prendre du temps donc Asynchrone
    // return AppDataSource.query("SELECT * FROM plant;");
    return this.plantRepository.find();
  }
  async getById(id: number) {
    console.log("PlantService");
    // return AppDataSource.query(`SELECT * FROM plant WHERE id = ${id};`);
    return this.plantRepository.findOneBy({ id: id });
  }
  async create(plant: Plant) {
    console.log("PlantService");
    // return AppDataSource.query(
    //   `INSERT INTO plant (title) VALUES ('${plant.title}');`
    // );
    const newPlant = this.plantRepository.create(plant);
    return this.plantRepository.save(newPlant);
  }
  async update(id: string, plant: Plant) {
    console.log("PlantService");
    // return AppDataSource.query(
    //   `UPDATE plant SET title = '${plant.title}' WHERE id = ${id};`
    // );
    return this.plantRepository.update(id, plant);
  }

  async delete(id: string) {
    console.log("PlantService");
    // return AppDataSource.query(`DELETE FROM plant WHERE id = ${id};`);
    return this.plantRepository.delete(id);
  }
}

export default PlantService;
