import { mongoose } from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Doctor Name is required'] },
    login: {
      type: String,
      required: [true, 'Doctor Login is required'],
      unique: true,
    },
    password: { type: String, required: [true, 'Doctor Password is required'] },
    medicalSpeciality: {
      type: String,
      required: [true, 'Doctor Medical Specialty is required'],
    },
    medicalRegistration: {
      type: String,
      required: [true, 'Doctor Medical Registration is required'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Doctor Email is required'],
      unique: true,
    },
    phone: { type: String, required: [true, 'Doctor Phone is required'] },
  },
  {
    timestamps: true,
  }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
