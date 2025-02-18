import DoctorService from '../services/DoctorService.js';

import bcrypt from 'bcrypt';

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await DoctorService.getAllDoctors();
    res.send(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await DoctorService.getDoctor(id);
    res.send(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const saveDoctor = async (req, res) => {
  const {
    name,
    login,
    password,
    medicalSpecialty,
    medicalRegistration,
    email,
    phone,
  } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = await DoctorService.saveDoctor({
      name,
      login,
      password: hashedPassword,
      medicalSpecialty,
      medicalRegistration,
      email,
      phone,
    });
    res.status(201).send(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).send('Falha ao registrar médico' + error);
  }
};

const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    login,
    password,
    medicalSpecialty,
    medicalRegistration,
    email,
    phone,
  } = req.body;

  try {
    const doctor = await DoctorService.updateDoctor(id, {
      name,
      login,
      password,
      medicalSpecialty,
      medicalRegistration,
      email,
      phone,
    });
    res.send(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const deleteDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await DoctorService.deleteDoctor(id);
    res.send(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

const doctorController = {
  getAllDoctors,
  getDoctor,
  saveDoctor,
  updateDoctor,
  deleteDoctor,
};

export default doctorController;
