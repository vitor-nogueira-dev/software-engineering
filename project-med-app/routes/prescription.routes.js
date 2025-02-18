import { Router } from 'express';
import multer from 'multer';
import prescriptionController from '../controllers/PrescriptionController.js';

let routes = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './MediApp/prescriptions/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

routes.get('/', prescriptionController.getAllPrescriptions);
routes.post(
  '/:id/upload',
  upload.single('file'),
  prescriptionController.uploadPrescription
);
routes.get('/:id', prescriptionController.getPrescription);
routes.get('/:id/read', prescriptionController.readPrescription);
routes.post('/', prescriptionController.savePrescription);
routes.put('/:id', prescriptionController.updatePrescription);
routes.delete('/:id', prescriptionController.deletePrescription);
routes.get('/:id/generate', prescriptionController.generatePrescriptionFile);

export default routes;
