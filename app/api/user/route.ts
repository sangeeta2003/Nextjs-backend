import { NextRequest } from "next/server";
import { Response } from "express";

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);
    return new Response().json({
        message: "You are logged in!"
    });
}
