import express from 'express';
import dishController from '../controllers/dishController';

const dishRouter = express.Router();


//Get all dishes
dishRouter.get('/dishes', dishController.getAllDishes);

//Get a sngle dish by ID
dishRouter.get('/dishes/:id', dishController.getDishById);

//Create a new dish
dishRouter.post('/dishes', dishController.createDish);

//Update a dish by ID
dishRouter.put('/dishes/:id', dishController.updateDishById);

//Delete a dish by ID
dishRouter.delete('/dishes/:id', dishController.deleteDishById);

export default dishRouter;