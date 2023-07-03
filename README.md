
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

 - [Migration Runner](https://github.com/alfarez21/POS-Sequelize#migrationrunner)
	- [migrateUp](https://github.com/alfarez21/POS-Sequelize#migrateup)
	- [migrateDown](https://github.com/alfarez21/POS-Sequelize#migratedown)
- [SeederRunner](https://github.com/alfarez21/POS-Sequelize#seederrunner)
	- [runSeeders](https://github.com/alfarez21/POS-Sequelize#runseeders)
	- [undoSeeders](https://github.com/alfarez21/POS-Sequelize#undoseeders)
- [SettingManager](https://github.com/alfarez21/POS-Sequelize#settingmanager)
	- [getSetting](https://github.com/alfarez21/POS-Sequelize#getsetting)
	- [getSettingJson](https://github.com/alfarez21/POS-Sequelize#getsettingjson)
- [CustomerManager](https://github.com/alfarez21/POS-Sequelize#customermanager)
	- [createCustomer](https://github.com/alfarez21/POS-Sequelize#createcustomerpayload-createcustomerpayload)
	- [getCustomers](https://github.com/alfarez21/POS-Sequelize#getcustomerspagination-pagination)
	- [getCustomersJson](https://github.com/alfarez21/POS-Sequelize#getcustomersjsonpagination-pagination)
	- [getCustomersWithCriteria](https://github.com/alfarez21/POS-Sequelize#getcustomerswithcriteriacriteria-editablecustomerattributes-pagination-pagination)
	- [getCustomersWithCriteriaJson](https://github.com/alfarez21/POS-Sequelize#getcustomerswithcriteriajsoncriteria-editablecustomerattributes-pagination-pagination)

## MigrationRunner

### migrateUp()
This method is to execute all migration files in the "migrations" folder.

    const migrationRunner = new MigrationRunner();
    await migrationRunner.migrateUp(); 

### migrateDown()
This method is to undo the migration action based on the files in the "migrations" folder.

    const migrationRunner = new MigrationRunner();
    await migrationRunner.migrateDown(); 

## SeederRunner

### runSeeders()
This method is to execute all seeders files in the “seeders” folder.

    const seederRunner = new SeederRunner();
    seederRunner.runSeeders();

### undoSeeders()
This method is to undo the seed action based on the files in the "seeders" folder.

    const seederRunner = new SeederRunner();
    seederRunner.undoSeeders();

## SettingManager

### getSetting()
This method is to getting "Setting" data.

    const  setting = await  SettingManager.getSetting();
    // do some ...

### getSettingJson()
This method is to getting "Setting" data, but the result return as json 

    const  settingJson = await  SettingManager.getSettingJson();
    // do some ...


## CustomerManager

### createCustomer(payload: CreateCustomerPayload)
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

### getCustomers(pagination?: Pagination)
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


### getCustomersJson(pagination?: Pagination)
This method is to getting customers data and return data as json.


Without pagination: 

    try{
      const customers = await CustomerManager.getCustomersJson();
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
      const customers = await CustomerManager.getCustomersJson(pagination);
      // do something ...
    } catch (error) {
      // handle error ...
    }

### getCustomersWithCriteria(criteria: EditableCustomerAttributes, pagination?: Pagination)
This method is to find customer data with certain criteria.

Without pagination:

    try{
      const criteria: EditableCustomerAttributes = {
        name: 'Roberto Carlos'
      };

      const customers = await CustomerManager.getCustomersWithCriteria(criteria);
      // do something ...
    } catch (error) {
      // handle error ...
    }

With Pagination: 

    try{
      const criteria: EditableCustomerAttributes = {
        name: 'Roberto Carlos'
      };

      const pagination: Pagination = {
        page: 2, // default: 1
        pageSize: 10, // default 20
      }
      
      const customers = await CustomerManager.getCustomersWithCriteria(criteria, pagination);
      // do something ...
    } catch (error) {
      // handle error ...
    }

### getCustomersWithCriteriaJson(criteria: EditableCustomerAttributes, pagination?: Pagination)
This method is to find customer data with certain criteria return data as json.

Without pagination:

    try{
      const criteria: EditableCustomerAttributes = {
        name: 'Roberto Carlos'
      };

      const customers = await CustomerManager.getCustomersWithCriteriaJson(criteria);
      // do something ...
    } catch (error) {
      // handle error ...
    }

With Pagination: 

    try{
      const criteria: EditableCustomerAttributes = {
        name: 'Roberto Carlos'
      };

      const pagination: Pagination = {
        page: 2, // default: 1
        pageSize: 10, // default 20
      }
      
      const customers = await CustomerManager.getCustomersWithCriteriaJson(criteria, pagination);
      // do something ...
    } catch (error) {
      // handle error ...
    }


### getCustomerById(id: number)
This method is used to get customer data based on given id.

	try{
	  const customerId = 3;
	  const customer = await  CustomerManager.getCustomerById(customerId);
	  // do something ...
	} catch (error) {
	  // handle error ...
	}

### getCustomerByIdJson(id: number)
This method is used to get customer data based on given id and return data as json.

	try{
	  const customerId = 3;
	  const customer = await CustomerManager.getCustomerByIdJson(customerId);
	  // do something ...
	} catch (error) {
	  // handle error ...
	}

### searchCustomers(keyword: string, pagination?: Pagination)
This method is used to get customer data based on given keywords.

Without pagination:

    try{
      const keyword = 'doe';
      const customers = await CustomerManager.searchCustomers(keyword);
      // do something ...
    } catch (error) {
      // handle error ...
    }


With pagination:

    try{
      const keyword = 'doe';
      const pagination: Pagination = {
        page: 2, // default: 1
        pageSize: 10, // default 20
      }
      
      const customers = await CustomerManager.searchCustomers(keyword, pagination);
      // do something ...
    } catch (error) {
      // handle error ...
    }

### searchCustomersJson(keyword: string, pagination?: Pagination)
This method is used to get customer data based on given keywords and return data as json.

Without pagination:

    try{
      const keyword = 'doe';
      const customers = await CustomerManager.searchCustomersJson(keyword);
      // do something ...
    } catch (error) {
      // handle error ...
    }


With pagination:

    try{
      const keyword = 'doe';
      const pagination: Pagination = {
        page: 2, // default: 1
        pageSize: 10, // default 20
      }
      
      const customers = await CustomerManager.searchCustomersJson(keyword, pagination);
      // do something ...
    } catch (error) {
      // handle error ...
    }

### deleteCustomerById(id: number)
This method is to soft delete customer data based on given customer id,

    try{
      const customerId = 3;
      const deletedCustomer = await CustomerManager.deleteCustomerById(customerId);
      // do something ...
    } catch (error) {
      // handle error ...
    }

### deleteMultipleCustomersByIds(id: number[])
This method is to soft delete customer data based on given customer ids,

    try{
      const customerIds = [0, 2];
      const deletedCustomers = await CustomerManager.deleteMultipleCustomersByIds(customerIds   );
      // do something ...
    } catch (error) {
      // handle error ...
    }

### hardDeleteCustomerById(id: number)
This method is to hard delete customer data based on given customer id,

    try{
      const customerId = 3;
      await CustomerManager.hardDeleteCustomerById(customerId);
      // do something ...
    } catch (error) {
      // handle error ...
    }

### hardDeleteMultipleCustomersByIds(id: number[])
This method is to hard delete customer data based on given customer ids,

    try{
      const customerIds = [0, 2];
      await CustomerManager.hardDeleteMultipleCustomersByIds(customerIds);
      // do something ...
    } catch (error) {
      // handle error ...
    }
