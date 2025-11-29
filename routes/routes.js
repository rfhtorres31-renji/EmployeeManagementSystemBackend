import express from 'express';
import employeeController from '../apiController/employeeController.js';


const routes = express.Router();

     

routes.post('/employees', employeeController.createEmployee);
routes.get('/employees', employeeController.viewEmployee);
routes.put('/employees', employeeController.updateEmployee);
routes.delete('/employees', employeeController.deleteEmployee);





export default routes;