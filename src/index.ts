import sequelize from './sequelize';
import CategoryManager from './utilities/CategoryManager';
import MigrationRunner from './utilities/MigrationRunner';
import SeederRunner from './utilities/SeederRunner';
import SettingManager from './utilities/SettingManager';

async function main() {
  try {
    await sequelize.authenticate();
    // console.log('Connection to the database has been established successfully.')

    // const migrationRunner = new MigrationRunner();
    // await migrationRunner.migrateUp();

    await SettingManager.updateSetting({
      'app': 'POS-5',
    })
    
    const setting = await SettingManager.getSettingJson();
    console.log(setting);

    await sequelize.sync();
    // console.log('All models were synchronized successfully.');


  } catch (error) {
    // console.error('Unable to connect to the database:', error);
  }
}

main().catch(console.error);
