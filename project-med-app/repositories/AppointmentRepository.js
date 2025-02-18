import { Appointment } from '../models/Appointment.js';

const getAllAppointments = async () => {
  return await Appointment.find().exec(); // exec() returns a promise
};

const getAppointmentById = async (id) => {
  try {
    const appointment = await Appointment.findById(id).exec();
    return appointment;
  } catch (error) {
    throw new Error(error);
  }
};

const saveAppointment = async (date, doctorId, pacientId) => {
  try {
    const prescription = new Appointment({ date, doctorId, pacientId });
    await prescription.save();
    return prescription;
  } catch (error) {
    throw new Error(error);
  }
};

const updateAppointment = async (id, { date, doctorId, pacientId }) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { date, doctorId, pacientId },
      { new: true }
    ).exec();
    return appointment;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteAppointment = async (id) => {
  try {
    await Appointment.findByIdAndDelete(id).exec();
  } catch (error) {
    throw new Error(error);
  }
  return true;
};

const appoitmentRepository = {
  getAllAppointments,
  getAppointmentById,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
};

export default appoitmentRepository;
