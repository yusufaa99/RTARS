import { NextResponse } from "next/server";
// import connectTodb from "@/lib/mongodb";
import connect from "@/lib/mongodb";
import Signup from "@/lib/models/signup";
export const dynamic = 'force-dynamic';

// CREATING GET HTTP METHOD
export const GET = async () => {
    try {
        connect();
        const Signups = await Signup.find();
        return new NextResponse(JSON.stringify(Signups), { status: 200 });

    } catch (error) {
        return new NextResponse("Error in fetching Users data " + error, { status: 500 });
    }
}
