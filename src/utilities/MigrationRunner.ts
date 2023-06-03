import * as fs from 'fs';
import * as path from 'path';
import { QueryInterface } from 'sequelize';
import sequelize  from '../sequelize';

class MigrationRunner {
  private migrationsPath: string;

  constructor() {
    this.migrationsPath = path.join(__dirname, '../', 'migrations');
  }

  async migrateUp() {
    const migrationFiles = this.getMigrationFiles();

    for (const file of migrationFiles) {
      const migration = require(path.join(this.migrationsPath, file));
      if (typeof migration.up === 'function') {
        console.log(`Running migration: ${file}`);
        await migration.up(sequelize.getQueryInterface() as QueryInterface);
        console.log(`Migration completed: ${file}`);
      }
    }
  }

  async migrateDown() {
    const migrationFiles = this.getMigrationFiles().reverse();

    for (const file of migrationFiles) {
      const migration = require(path.join(this.migrationsPath, file));
      if (typeof migration.down === 'function') {
        console.log(`Reverting migration: ${file}`);
        await migration.down(sequelize.getQueryInterface() as QueryInterface);
        console.log(`Migration reverted: ${file}`);
      }
    }
  }

  private getMigrationFiles(): string[] {
    return fs.readdirSync(this.migrationsPath).sort();
  }
}

export default MigrationRunner;
