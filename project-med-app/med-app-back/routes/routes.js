import express, { Router } from 'express';
import jwt from 'jsonwebtoken';

import appointmentRoutes from './appointment.routes.js';
import patientRoutes from './pacient.routes.js';
import doctorRoutes from './doctor.routes.js';
import prescriptionRoutes from './prescription.routes.js';
import verifyToken from '../middlewares/auth.middleware.js';
import doctorService from '../services/DoctorService.js';
import bcrypt from 'bcrypt';

let routes = Router();

routes.get('/', (req, res) => {
  res.send('Hello World!');
});

routes.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    if (!login || !password) {
      return res.status(400).json({ error: 'Login and password are required!' });
    }
    const doctor = await doctorService.getDoctorByLogin(login);
    if (!doctor) {
      return res.status(401).json({ error: 'Authentication failed!' });
    }

    const passwordMatch = await bcrypt.compare(password, doctor.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed!' });
    }

    const token = jwt.sign({ doctorId: doctor._id }, 'you-secret-key', {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Login failed!' });
  }
});

routes.use(verifyToken);

routes.use('/appointments', appointmentRoutes);
routes.use('/patients', patientRoutes);
routes.use('/doctors', doctorRoutes);
routes.use('/prescriptions', prescriptionRoutes);

export { routes };
