import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "src/app/data/database.json");


export interface Favorite {
  id: number;
  name: string;
  createdAt: string;
}

class Database {
  private async readDB(): Promise<Favorite[]> {
    try {
      const data = await fs.readFile(DB_PATH, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  private async writeDB(data: Favorite[]): Promise<void> {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
  }

  async getAll(): Promise<Favorite[]> {
    return this.readDB();
  }

  async add(name: string): Promise<Favorite | null> {
    const data = await this.readDB();
    if (data.some((fav) => fav.name === name)) return null;

    const newFav: Favorite = {
      id: data.length > 0 ? Math.max(...data.map((f) => f.id)) + 1 : 1,
      name,
      createdAt: new Date().toISOString(),
    };

    data.push(newFav);
    await this.writeDB(data);
    return newFav;
  }

  async remove(id: number): Promise<boolean> {
    const data = await this.readDB();
    const newData = data.filter((f) => f.id !== id);

    if (newData.length === data.length) return false;

    await this.writeDB(newData);
    return true;
  }
}

export const db = new Database();