import { NextResponse } from "next/server";
import connectTodb from "@/lib/mongodb";
// import Users from "@/lib/models/user";
import User from "@/lib/models/user";
export const dynamic = 'force-dynamic';

// CREATING GET HTTP METHOD
export const GET = async () => {
    try {
        connectTodb();
        const Users = await User.find();
        return new NextResponse(JSON.stringify(Users), { status: 200 });

    } catch (error) {
        return new NextResponse("Error in fetching Users data " + error, { status: 500 });
    }
}

// CREATING POST HTTP METHOD
export const POST = async (request) => {
    try {
        const body = await request.json();
        await connectTodb();

        const newuser = new User(body);
        await newuser.save();
        return new NextResponse(JSON.stringify({ message: "User created successful ", user: newuser }), { status: 201 });

    }
    catch {
        return new NextResponse("Error in Creating Users " + error, { status: 500 });
    }
}