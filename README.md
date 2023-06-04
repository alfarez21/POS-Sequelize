## POS Sequelize 
**POS-Sequelize** is a project to accommodate all the utilities in processing the **POS** project database.

### Instalation:
    npm install
### Run:
    npm start
### Configuration DBSM:
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
