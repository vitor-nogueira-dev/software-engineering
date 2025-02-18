import { Router } from 'express';

import appoitmentController from '../controllers/AppointmentController.js';
import { validate } from '../middlewares/validation.middleware.js';
import { createAppoitmentValidation, updateAppoitmentValidation } from '../services/validations/appoitment.validation.js';

let routes = Router();

routes.get('/', appoitmentController.getAllAppointments);
routes.post('/', validate(createAppoitmentValidation), appoitmentController.saveAppointment);
routes.get('/:id', appoitmentController.getAppointmentById);
routes.put('/:id', validate(updateAppoitmentValidation), appoitmentController.updateAppointment);
routes.delete('/:id', appoitmentController.deleteAppointment);

export default routes;