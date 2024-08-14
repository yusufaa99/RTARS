import twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { report } = req.body;

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    try {
      const message = await client.messages.create({
        body: `New Report Submitted:\nDate: ${report.date}\nTime: ${report.time}\nLocation: ${report.lat}, ${report.lng}\nRoad Type: ${report.roadType}\nVehicle 1: ${report.vehicle1_make} ${report.vehicle1_model} (${report.vehicle1_licensePlate})\nVehicle 2: ${report.vehicle2_make} ${report.vehicle2_model} (${report.vehicle2_licensePlate})\nDriver 1: ${report.driver1_name} (License: ${report.driver1_licenseNumber})\nDriver 2: ${report.driver2_name} (License: ${report.driver2_licenseNumber})\nCollision Result: ${report.collisionResult}\nDescription: ${report.collisionDescription}\nInjuries: ${report.injuriesDescription}\nDamages: ${report.damagesDescription}`,
        from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio number
        to: 'YOUR_PHONE_NUMBER' // Your phone number
      });

      res.status(200).json({ success: true, message });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
