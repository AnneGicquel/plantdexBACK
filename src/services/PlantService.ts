import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";
class PlantService {
  private plantRepository = AppDataSource.getRepository(Plant);

  async getAll() {
    console.log("PlantService getAll");
    return this.plantRepository.find();
  }
  async getById(id: number) {
    console.log("PlantService getById");
    return this.plantRepository.findOneBy({ id: id });
  }
  async create(plant: Plant) {
    console.log("PlantService create");
    const newPlant = this.plantRepository.create(plant);
    return this.plantRepository.save(newPlant);
  }
  async update(id: string, plant: Plant) {
    console.log("PlantService update");
    return this.plantRepository.update(id, plant);
  }

  async delete(id: string) {
    console.log("PlantService delete");
    return this.plantRepository.delete(id);
  }
}

export default PlantService;
