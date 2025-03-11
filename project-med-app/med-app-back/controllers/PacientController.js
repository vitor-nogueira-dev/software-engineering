import express from 'express';
import PacientService from '../services/PacientService.js';

let router = express.Router();

const getAllPacients = async (req, res) => {
  try {
    const pacients = await PacientService.getAllPacients();
    res.send(pacients);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getPacient = async (req, res) => {
  const { id } = req.params;
  try {
    const pacient = await PacientService.getPacient(id);
    res.send(pacient);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const savePacient = async (req, res) => {
  const { name, birthDate, email, phone } = req.body;
  try {
    const pacient = await PacientService.savePacient({
      name,
      birthDate,
      email,
      phone,
    });
    res.send(pacient);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const updatePacient = async (req, res) => {
  const { id } = req.params;
  const { name, birthDate, email, phone } = req.body;

  try {
    const pacient = await PacientService.updatePacient(id, {
      name,
      birthDate,
      email,
      phone,
    });
    res.send(pacient);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const deletePacient = async (req, res) => {
  const { id } = req.params;

  try {
    const pacient = await PacientService.deletePacient(id);
    res.send(pacient);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const pacientController = {
  getAllPacients,
  getPacient,
  savePacient,
  updatePacient,
  deletePacient,
};

export default pacientController;
