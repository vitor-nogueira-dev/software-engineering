import { mongoose } from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    date: { type: Date, required: [true, 'Appointment Date is required'] },
    doctorId: { type: String, required: [true, 'Doctor ID is required'] },
    pacientId: { type: String, required: [true, 'Pacient ID is required'] },
  },
  {
    timestamps: true,
  }
);

export const Appointment = mongoose.model('Appointment', appointmentSchema);

