import sequelize from './sequelize';
import MigrationRunner from './utilities/MigrationRunner';

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    const migrationRunner = new MigrationRunner();
    await migrationRunner.migrateUp();
    
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main().catch(console.error);
