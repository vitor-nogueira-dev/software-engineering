import { Router } from 'express';
import doctorController from '../controllers/DoctorController.js';

let routes = Router();

routes.get('/', doctorController.getAllDoctors);
routes.post('/', doctorController.saveDoctor);
routes.get('/:id', doctorController.getDoctor);
routes.put('/:id', doctorController.updateDoctor);
routes.delete('/:id', doctorController.deleteDoctor);

export default routes;
