import appoitmentService from '../services/AppointmentService.js';

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await appoitmentService.getAllAppointments();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await appoitmentService.getAppointmentById(id);
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveAppointment = async (req, res) => {
  try {
    const { date, doctorId, pacientId } = req.body;
    const appointment = await appoitmentService.saveAppointment(
      date,
      doctorId,
      pacientId
    );
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, doctorId, pacientId } = req.body;
    const appointment = await appoitmentService.updateAppointment(id, {
      date,
      doctorId,
      pacientId,
    });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    await appoitmentService.deleteAppointment(id);
    res.status(200).json({ message: 'Appointment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const appoitmentController = {
  getAllAppointments,
  getAppointmentById,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
};

export default appoitmentController;
