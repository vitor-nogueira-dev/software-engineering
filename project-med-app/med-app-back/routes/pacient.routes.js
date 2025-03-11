import { Router } from 'express';
import pacientController from '../controllers/PacientController.js';

let routes = Router();

routes.get('/', pacientController.getAllPacients);
routes.post('/', pacientController.savePacient);
routes.get('/:id', pacientController.getPacient);
routes.put('/:id', pacientController.updatePacient);
routes.delete('/:id', pacientController.deletePacient);

export default routes;