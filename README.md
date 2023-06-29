

## POS Sequelize 
**POS-Sequelize** is a project to accommodate all the utilities in processing the **POS** project database.

<hr>

### Instalation
    npm install

<hr>

### Run
    npm start

<hr>

### Configuration DBSM
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

<hr>

### Classes
documentation on how to use the classes in the project.

#### MigrationRunner

##### migrateUp()
This method is to execute all migration files in the "migrations" folder.

    const migrationRunner = new MigrationRunner();
    await migrationRunner.migrateUp(); 

##### migrateDown()
This method is to undo the migration action based on the files in the "migrations" folder.

    const migrationRunner = new MigrationRunner();
    await migrationRunner.migrateDown(); 

#### SeederRunner

##### runSeeders()
This method is to execute all seeders files in the “seeders” folder.

    const seederRunner = new SeederRunner();
    seederRunner.runSeeders();

##### undoSeeders()
This method is to undo the seed action based on the files in the "seeders" folder.

    const seederRunner = new SeederRunner();
    seederRunner.undoSeeders();

#### SettingManager

##### getSetting()
This method is to getting "Setting" data.

    const  setting  =  await  SettingManager.getSetting();
    // do some ...

Result:

    Setting {
		dataValues: {
		    id: 2,
		    app: 'MyApp',
		    store: 'MyStore',
		    address_one: 'Address 1',
		    address_two: 'Address 2',
		    contact: '123456789',
		    tax: '10%',
		    currency_symbol: '$',
		    percentage: 20,
		    footer: 'Footer text',
		    image: 'image.png',
		    token_balance: 100,
		    token_cut_balance: 50,
		    createdAt: 2023-06-29T04:38:29.645Z,
		    updatedAt: 2023-06-29T04:38:29.645Z
		}, 
		_previousDataValues: {
		    id: 2,
		    app: 'MyApp',
		    store: 'MyStore',
		    address_one: 'Address 1',
		    address_two: 'Address 2',
		    contact: '123456789',
		    tax: '10%',
		    currency_symbol: '$',
		    percentage: 20,
		    footer: 'Footer text',
		    image: 'image.png',
		    token_balance: 100,
		    token_cut_balance: 50,
		    createdAt: 2023-06-29T04:38:29.645Z,
		    updatedAt: 2023-06-29T04:38:29.645Z 
		}, 
		uniqno: 1,
		_changed: Set(0) {},
		_options: {
			isNewRecord: false,
	        _schema: null,
	        _schemaDelimiter: '',
	        raw: true,
	        attributes: [
		        'id',
		        'app',
		        'store',             
		        'address_one',
		        'address_two',       
		        'contact',
		        'tax',               
		        'currency_symbol',
		        'percentage',        
		        'footer',
		        'image',             
		        'token_balance',
		        'token_cut_balance', 
		        'createdAt',
		        'updatedAt'
	        ]
	    },
	    isNewRecord: false
	 }
