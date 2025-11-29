import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import sequelize from './config/databaseConfig.js';


const port = process.env.PORT || 3304;

// Sync models with database
// { alter: true } automatically correct the column names to the models DTO
sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database & tables synced");

    // Start the server after sync
    app.listen(3304, () => {
      console.log("Server running on port 3304");
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });


app.get('/db-status', async (req, res)=>{
   
       sequelize.authenticate().
       then(()=>{
          
           res.status(400).json({"message":"Successful SQL Server connection"});
      
       }).
       catch((err)=>{
           res.status(500).json({"message":err});
           console.error(err);           
       });
   

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});