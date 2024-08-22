import twilio from 'twilio';

// Export a named function for handling POST requests
export async function POST(req, res) {
    const {
        date, time, lat, lng, injuriesDescription, damagesDescription
    } = await req.json();

    // Twilio credentials (make sure these are stored securely in environment variables)
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    const number = process.env.TWILIO_PHONE_NUMBER;

    // Admin notification message
    const adminMessage = `Urgent: A new report has been submitted through the Road Traffic Accident Reporting System. Please check your dashboard to review the details of the report at your earliest convenience.
    Date: ${date}
    Time: ${time}
    Location: Latitude: ${lat}, Longitude: ${lng}
    Injuries Description: ${injuriesDescription}
    Damages Description: ${damagesDescription}

    Please check the dashboard for more details.`;

    try {
        // Send SMS to the admin
        const adminMessageResponse = await client.messages.create({
            body: adminMessage,
            from: number,  // Replace with your Twilio phone number
            to: '+2347042427548'  // Admin's phone number
        });

        console.log('Admin SMS sent successfully', adminMessageResponse);

        // Send SMS to the user (if needed)
        // const userMessage = `Thank you for your report. It has been submitted successfully.`;
        // const userMessageResponse = await client.messages.create({
        //     body: userMessage,
        //     from: number,  // Replace with your Twilio phone number
        //     to: '+234XXXXXXX'  // User's phone number
        // });
        // console.log('User SMS sent successfully', userMessageResponse);

        return new Response(JSON.stringify({ success: true, message: 'Admin SMS sent successfully', messageResponse: adminMessageResponse }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending SMS:', error);
        return new Response(JSON.stringify({ success: false, error: 'Failed to send SMS' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// Handle other HTTP methods if necessary (e.g., GET, PUT, DELETE) by exporting named functions
export function GET(req, res) {
    return new Response(JSON.stringify({ success: false, error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
    });
}




// import twilio from 'twilio';

// // Export a named function for handling POST requests
// export async function POST(req, res) {
//     const { date, time, lat, lng, roadType, vehicle1_licensePlate, vehicle1_make, vehicle1_model, vehicle2_licensePlate, vehicle2_make, vehicle2_model, driver1_name, driver1_licenseNumber, driver2_name, driver2_licenseNumber, collisionResult, collisionDescription, injuriesDescription, damagesDescription } = await req.json();

//     // Twilio credentials (make sure these are stored securely in environment variables)
//     const accountSid = process.env.TWILIO_ACCOUNT_SID;
//     const authToken = process.env.TWILIO_AUTH_TOKEN;
//     const client = twilio(accountSid, authToken);
//     const number = process.env.TWILIO_PHONE_NUMBER;
//     const message = `New report submitted:
//     Date: ${date}
//     Time: ${time}
//     Location: ${lat}, ${lng}
//     Road Type: ${roadType}
//     Vehicle 1: ${vehicle1_licensePlate}, ${vehicle1_make}, ${vehicle1_model}
//     Vehicle 2: ${vehicle2_licensePlate}, ${vehicle2_make}, ${vehicle2_model}
//     Driver 1: ${driver1_name}, ${driver1_licenseNumber}
//     Driver 2: ${driver2_name}, ${driver2_licenseNumber}
//     Collision Result: ${collisionResult}
//     Description: ${collisionDescription}
//     Injuries: ${injuriesDescription}
//     Damages: ${damagesDescription}`;

//     try {
//         const messageResponse = await client.messages.create({
//             body: message,
//             from: number,  // Replace with your Twilio phone number
//             to: '+2347042427548'  // The recipient's phone number
//         });

//         console.log('SMS sent successfully', messageResponse
            
//         )
//         return new Response(JSON.stringify({ success: true, message: 'SMS sent successfully', messageResponse }), {
//             status: 200,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     } catch (error) {
//         console.error('Error sending SMS:', error);
//         return new Response(JSON.stringify({ success: false, error: 'Failed to send SMS' }), {
//             status: 500,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     }
// }

// // Handle other HTTP methods if necessary (e.g., GET, PUT, DELETE) by exporting named functions
// export function GET(req, res) {
//     return new Response(JSON.stringify({ success: false, error: 'Method not allowed' }), {
//         status: 405,
//         headers: { 'Content-Type': 'application/json' },
//     });
// }
