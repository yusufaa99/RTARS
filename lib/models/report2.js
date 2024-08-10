import mongoose from 'mongoose';

let Report2;

try {
  const report2Schema = new mongoose.Schema({
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
    roadType: {
      type: String,
      required: true,
    },
    vehicle1_licensePlate: {
      type: String,
      required: true,
    },
    vehicle1_make: {
      type: String,
      required: true,
    },
    vehicle1_model: {
      type: String,
      required: true,
    },
    vehicle2_licensePlate: {
      type: String,
      required: true,
    },
    vehicle2_make: {
      type: String,
      required: true,
    },
    vehicle2_model: {
      type: String,
      required: true,
    },
    driver1_name: {
      type: String,
      required: true,
    },
    driver1_licenseNumber: {
      type: String,
      required: true,
    },
    driver2_name: {
      type: String,
      required: true,
    },
    driver2_licenseNumber: {
      type: String,
      required: true,
    },
    collisionResult: {
      type: String,
      required: true,
    },
    collisionDescription: {
      type: String,
      required: true,
    },
    injuriesDescription: {
      type: String,
      required: true,
    },
    damagesDescription: {
      type: String,
      required: true,
    }
  });

  Report2 = mongoose.models.Report2 || mongoose.model('Report2', report2Schema);

  console.error('No Error in creating Report2 model:');
} catch (error) {
  console.error('Error creating Report2 model:', error);
}

export default Report2;
