// name, birthDatem email, phone
import {mongoose} from 'mongoose';

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  birthDate: {
    type: Date,
    required: [true, 'Birth date is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
  },
}, {
  timestamps: true,
})

export const Pacient = mongoose.model('Pacient', Schema);
