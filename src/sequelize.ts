import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  // SQLite
  storage: 'pos.sqlite',
  dialect: 'sqlite',

  // MySQL
  // host: 'localhost',
  // database: 'pos',
  // username: 'root', 
  // password: '',
  // dialect: 'mysql',
});

export default sequelize;
