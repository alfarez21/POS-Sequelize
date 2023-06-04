import sequelize from './sequelize';
import CategoryManager from './utilities/CategoryManager';
import MigrationRunner from './utilities/MigrationRunner';

async function main() {
  try {
    await sequelize.authenticate();
    // console.log('Connection to the database has been established successfully.')
    
    
    try {
      const category = await CategoryManager.searchCategoriesJson({
        keyword: "An"
      })
      console.log(category)
    } catch(err) {
      console.log(err)
    }

    await sequelize.sync({ force: true });
    // console.log('All models were synchronized successfully.');


  } catch (error) {
    // console.error('Unable to connect to the database:', error);
  }
}

main().catch(console.error);
