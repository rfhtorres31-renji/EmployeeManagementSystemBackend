import dotenv from 'dotenv';
dotenv.config();
import {Sequelize} from 'sequelize';



const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: 'localhost',
    dialect: 'mssql',
    port: 1435, 
    dialectOptions: {
      instanceName: 'SQLEXPRESS',  // named instance
      options: {
        encrypt: false,            // set to true if using Azure SQL
        trustServerCertificate: true
      }
    },
    logging: false
  }
);



export default sequelize;