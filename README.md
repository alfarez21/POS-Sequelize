

# POS Sequelize 
**POS-Sequelize** is a project to accommodate all the utilities in processing the **POS** project database.


## Instalation
    npm install


## Run
    npm start



## Configuration DBSM
if you want to set the dbms to use, go to "src/sequelize.ts" file, you will find code like this:

    import { Sequelize } from  'sequelize-typescript'; 
    
    const  sequelize  =  new  Sequelize({
		// SQLite
	    // storage: 'pos.sqlite',
	    // dialect: 'sqlite',
    
	    // MySQL
	    host:  'localhost',
	    database:  'pos',
	    username:  'root',
	    password:  '',
	    dialect:  'mysql',
    });
    
    export  default  sequelize;

Configuration according to your needs. but for now we just support MySQL and SQLite.

## Classes
documentation on how to use the classes in the project.

### MigrationRunner

#### migrateUp()
This method is to execute all migration files in the "migrations" folder.

    const migrationRunner = new MigrationRunner();
    await migrationRunner.migrateUp(); 

#### migrateDown()
This method is to undo the migration action based on the files in the "migrations" folder.

    const migrationRunner = new MigrationRunner();
    await migrationRunner.migrateDown(); 

### SeederRunner

#### runSeeders()
This method is to execute all seeders files in the “seeders” folder.

    const seederRunner = new SeederRunner();
    seederRunner.runSeeders();

#### undoSeeders()
This method is to undo the seed action based on the files in the "seeders" folder.

    const seederRunner = new SeederRunner();
    seederRunner.undoSeeders();

### SettingManager

#### getSetting()
This method is to getting "Setting" data.

    const  setting = await  SettingManager.getSetting();
    // do some ...

#### getSettingJson()
This method is to getting "Setting" data, but the result return as json 

    const  settingJson = await  SettingManager.getSettingJson();
    // do some ...


### CustomerManager

#### createCustomer()
This method is to creating a customer data.

    try {
      const createCustomerPayload: CreateCustomerPayload = {
        name: 'Roberto Carlos',
        phone: '081234567890',
        email: 'robertocarlos',
        address: 'Jl. Roberto Carlos No. 1',
      };
      const customer = await CustomerManager.createCustomer(createCustomerPayload);
      // do something ...
    } catch (error) {
      // handle error ...
    }

#### getCustomers()
This method is to getting customers data.
Without pagination: 

    try{
      const customers = await CustomerManager.getCustomers();
      // do something ...
    } catch (error) {
      // handle error ...
    }


With pagination: 

    try{
      const pagination: Pagination = {
        page: 2, // default: 1
        pageSize: 10, // default 20
      }
      const customers = await CustomerManager.getCustomers(pagination);
      // do something ...
    } catch (error) {
      // handle error ...
    }
