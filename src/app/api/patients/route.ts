import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const patients = await prisma.patient.findMany({
      include: {},
    });

    const patientsData = patients.map((patient: any) => ({
      id: patient.id,
      name: patient.firstName + " " + patient.lastName,
      created_at: patient.created_at,
      updated_at: patient.updated_at,
    }));

    return NextResponse.json(patientsData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener los datos", details: error },
      { status: 500 }
    );
  }
}
