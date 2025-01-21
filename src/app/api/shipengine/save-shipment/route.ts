/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/client";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const { recipient, packages, rates } = await req.json();
    const shipmentId = uuidv4();
    const shipmentDoc = {
      _type: "shipment", 
      _id: shipmentId,
      recipient: {
        fullName: recipient.fullName,
        email: recipient.email,
        phone: recipient.phone,
        address: recipient.address,
        city: recipient.city,
        postalCode: recipient.postalCode,
        country: recipient.country,
      },
      packages: packages.map((pkg: any) => ({
        weight: pkg.weight,
        dimensions: pkg.dimensions,
      })),
      rates: rates.map((rate: any) => ({
        carrier: rate.carrier,
        service: rate.service,
        shippingCost: rate.shippingCost,
        rateId: rate.rateId,
      })),
      createdAt: new Date().toISOString(),
    };

      if (shipmentDoc === null || shipmentDoc === undefined) {
        return NextResponse.json(
          { error: "some problem occured in data" },
          { status: 400 }
        );
    }
    const createdShipment = await client.create(shipmentDoc);
    return NextResponse.json(createdShipment, { status: 200 });
  } catch (error:any) {
    console.error("Error saving shipment:", error);
    return NextResponse.json(
      { error: "An error occurred while saving shipment data.", details: error.message },
      { status: 500 }
    );
  }
}
