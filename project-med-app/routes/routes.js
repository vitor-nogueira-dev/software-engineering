import { Router } from 'express';

import appointmentRoutes from './appointment.routes.js';
import patientRoutes from './pacient.routes.js';
import doctorRoutes from './doctor.routes.js';
import prescriptionRoutes from './prescription.routes.js';

let routes = Router();

routes.get('/', (req, res) => {
  res.send('Hello World!');
});

routes.use('/appointments', appointmentRoutes);
routes.use('/patients', patientRoutes);
routes.use('/doctors', doctorRoutes);
routes.use('/prescriptions', prescriptionRoutes);

export { routes };
