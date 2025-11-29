import { DataTypes } from "sequelize";
import sequelize from "../config/databaseConfig.js";


const employee = sequelize.define('TestDB3', {
   
    Id: {
       primaryKey: true,
       autoIncrement: true,
       type: DataTypes.INTEGER,
    },

    FullName: {
       type: DataTypes.STRING,
       allowNull: false,
    },

    Department: {
       type: DataTypes.STRING,
       allowNull: false,
    },

    Salary: {
       type: DataTypes.DECIMAL,
       allowNull: false,
    },
}, 
{ 
 tableName: 'Employees'
}
);



export default employee;