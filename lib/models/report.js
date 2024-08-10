import { Schema, model, models } from "mongoose";
import mongoose from 'mongoose';

let Report;

try {
  const reportSchema = new mongoose.Schema({
    incidentDetails: {
      date: { type: Date, required: true },
      time: { type: String, required: true },
      location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      },
      roadType: { type: String, enum: ['highway', 'city-street', 'rural-road'], required: true }
    },
    vehiclesInvolved: [
      {
        licensePlate: { type: String, required: true },
        make: { type: String, required: true },
        model: { type: String, required: true }
      }
    ],
    drivers: [
      {
        name: { type: String, required: true },
        licenseNumber: { type: String, required: true }
      }
    ],
    injuriesAndDamages: {
      injuriesDescription: { type: String },
      damagesDescription: { type: String }
    },
    createdAt: { type: Date, default: Date.now }
  });

  Report = models.Report || model("Report", reportSchema);

  console.error('No Error in creating Report model:');
} catch (error) {
  console.error('Error creating Report model:', error);
}

export default Report;