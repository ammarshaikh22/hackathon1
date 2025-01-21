/* eslint-disable @typescript-eslint/no-explicit-any */
import { shipEngine } from "@/helper/shipEngine";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { rateId } = await req.json();
    const label = await shipEngine.createLabelFromRate({ rateId });
    return NextResponse.json(label, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "An error occurred while creating the label", details: error.message },
      { status: 500 }
    );
  }
}