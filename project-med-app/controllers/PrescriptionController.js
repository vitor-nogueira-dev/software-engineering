import PrescriptionService from '../services/PrescriptionService.js';
import process from 'process';
import path from 'path';

const uploadPrescription = async (req, res) => {
  try {
    const { id } = req.params;
    let prescription = await PrescriptionService.getPrescription(id);

    const file = './MediApp/src/prescriptions/' + req.file.originalname;
    prescription = await PrescriptionService.updatePrescription(id, { file });

    return res.status(200).send(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const readPrescription = async (req, res) => {
  const { id } = req.params;

  try {
    const prescription = await PrescriptionService.getPrescription(id);
    let filePath = path.resolve(process.cwd() + '/../' + prescription.file);
    res.status(200).sendFile(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await PrescriptionService.getAllPrescriptions();
    res.send(prescriptions);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getPrescription = async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await PrescriptionService.getPrescription(id);
    res.send(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const savePrescription = async (req, res) => {
  const { date, appointmentId, medicine, dosage, instructions } = req.body;
  try {
    const prescription = await PrescriptionService.savePrescription({
      date,
      appointmentId,
      medicine,
      dosage,
      instructions,
    });
    res.send(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const updatePrescription = async (req, res) => {
  const { id } = req.params;
  const { date, appointmentId, medicine, dosage, instructions } = req.body;

  try {
    const prescription = await PrescriptionService.updatePrescription(id, {
      date,
      appointmentId,
      medicine,
      dosage,
      instructions,
    });
    res.send(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const deletePrescription = async (req, res) => {
  const { id } = req.params;

  try {
    const prescription = await PrescriptionService.deletePrescription(id);
    res.send(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const generatePrescriptionFile = async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await PrescriptionService.getPrescription(id);
    let generatedPrescription =
      await PrescriptionService.generatePrescriptionFile(prescription);

    const file = './src/prescriptions/' + id + '.pdf';
    generatedPrescription = await PrescriptionService.updatePrescription(id, {
      file,
    });

    res.send(generatedPrescription);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

const prescriptionController = {
  uploadPrescription,
  readPrescription,
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription,
  generatePrescriptionFile,
};

export default prescriptionController;
