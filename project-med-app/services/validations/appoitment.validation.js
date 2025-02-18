import Joi from 'joi';

export const createAppoitmentValidation = Joi.object({
  date: Joi.date().required(),
  doctorId: Joi.string().required(),
  pacientId: Joi.string().required(),
});

export const updateAppoitmentValidation = Joi.object({
  date: Joi.date(),
  doctorId: Joi.string(),
  pacientId: Joi.string(),
});
