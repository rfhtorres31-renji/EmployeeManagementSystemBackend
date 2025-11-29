import employee from "../models/employee.js";




// View Employee Function
const viewEmployee = async function(req, res) {

     const query = await employee.findAll();

     if (query == null){
         return res.status(404).json({message:"No Employees Record Found"});
     }

     console.log(query);

     return res.status(200).json({message:"Succesfully Retrieved", data:query});
};


// Add Employee Function
const createEmployee = async function (req, res) {

    try {
        console.log(req.body);
        const isObjectEmpty = Object.values(req.body).every(v => v == '');

        console.log(Object.values(req.body));
        if (req.body == null || isObjectEmpty) {
            return res.status(400).json({message:"Data is null"});
        }
        
        await employee.create({
             FullName: req.body.FullName,
             Department: req.body.Department,
             Salary: parseFloat(req.body.Salary),
        }); 

        return res.status(201).json({message:"Employee Created"});

    }
    catch(err){
        console.error(err);
    }

};


// View Update Employee Function
const updateEmployee = async function(req,res) {

    try {
        if (req.body == null || Object.values(req.body).length == 0) {
            return res.status(400).json({message:"data is null"});
        }
        console.log(req.body);
        console.log(req.query.Id);

        const query = await employee.findOne({
            where: {
               Id: req.query.Id
            }
        })

        query.FullName = req.body.FullName;
        query.Department = req.body.Department;
        query.Salary = parseFloat(req.body.Salary);

        await query.save();

        return res.status(204).json({message:"Employee Details Updated Successfully"});
    }
    catch(err){
        console.error(err);
    };

};


// View Delete Employee Function
const deleteEmployee = async function (req, res) {
     try {

        const query = await employee.findOne({
            where:{
                Id: req.query.Id,
            }
        })
        
        query.destroy({ truncate: true, restartIdentity: true });
        return res.status(200).json({message:"Employee Sucessfully Deleted"});
     }
     catch(err){
         console.error(err);
     }
}


export default {createEmployee, viewEmployee, updateEmployee, deleteEmployee};