import appoitmentRepository from '../repositories/AppointmentRepository.js';

const getAllAppointments = async () => {
  return await appoitmentRepository.getAllAppointments();
};

const getAppointmentById = async (id) => {
  try {
    return await appoitmentRepository.getAppointmentById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const saveAppointment = async (date, doctorId, pacientId) => {
  try {
    return await appoitmentRepository.saveAppointment(
      date,
      doctorId,
      pacientId
    );
  } catch (error) {
    throw new Error(error);
  }
};

const updateAppointment = async (id, { date, doctorId, pacientId }) => {
  try {
    return await appoitmentRepository.updateAppointment(id, {
      date,
      doctorId,
      pacientId,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const deleteAppointment = async (id) => {
  try {
    await appoitmentRepository.deleteAppointment(id);
  } catch (error) {
    throw new Error(error);
  }
  return true;
};

const appoitmentService = {
  getAllAppointments,
  getAppointmentById,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
};

export default appoitmentService;
