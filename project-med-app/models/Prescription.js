import { mongoose } from 'mongoose';

const Schema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: [true, 'Date of prescription is required'],
    },
    appointmentId: {
      type: String,
      required: [true, 'Appointment ID is required'],
    },
    medicine: {
      type: String,
      required: [true, 'Medicine is required'],
    },
    dosage: {
      type: String,
      required: [true, 'Dosage is required'],
    },
    instructions: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Prescription = mongoose.model('Prescription', Schema);
