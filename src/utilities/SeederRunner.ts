import * as fs from 'fs';
import * as path from 'path';
import { QueryInterface } from 'sequelize';
import sequelize from '../sequelize';

class SeederRunner {
  private seedersPath: string;

  constructor() {
    this.seedersPath = path.join(__dirname, '../', 'seeders');
  }

  async runSeeders() {
    const seederFiles = this.getSeederFiles();
    
    for (const file of seederFiles) {
      const seeder = require(path.join(this.seedersPath, file));
      console.log(seeder);
      console.log(typeof seeder.up);
      if (typeof seeder.up === 'function') {
        console.log(`Running seeder: ${file}`);
        await seeder.up(sequelize.getQueryInterface() as QueryInterface);
        console.log(`Seeder completed: ${file}`);
      }
    }
  }

  async undoSeeders() {
    const seederFiles = this.getSeederFiles().reverse();

    for (const file of seederFiles) {
      const seeder = require(path.join(this.seedersPath, file));
      if (typeof seeder.down === 'function') {
        console.log(`Undoing seeder: ${file}`);
        await seeder.down(sequelize.getQueryInterface() as QueryInterface);
        console.log(`Seeder undone: ${file}`);
      }
    }
  }

  private getSeederFiles(): string[] {
    return fs.readdirSync(this.seedersPath).sort();
  }
}

export default SeederRunner;
