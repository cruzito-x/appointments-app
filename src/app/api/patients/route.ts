import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import moment from "moment";

export async function GET() {
  try {
    const patients = await prisma.patient.findMany({
      include: {
        files: {
          include: {
            details: true,
          },
        },
      },
    });

    const patientsData = patients.map((patient) => ({
      id: patient.id,
      name: `${patient.firstName} ${patient.lastName}`,
      created_at: patient.created_at,
      updated_at: patient.updated_at,
      files: patient.files.map((file) => ({
        id: file.id,
        emergency_contact_1: file.emergency_contact_1,
        emergency_contact_2: file.emergency_contact_2,
        occupation: file.occupation,
        institution: file.institution,
        sex: file.sex,
        created_at: moment(file.created_at).format("DD/MM/YYYY"),
        updated_at: file.updated_at,
        details: file.details.map((detail) => ({
          id: detail.id,
          filePath: detail.filePath,
          description: detail.description,
          created_at: detail.created_at,
          updated_at: detail.updated_at,
        })),
      })),
    }));

    return NextResponse.json(patientsData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener los datos", details: error },
      { status: 500 }
    );
  }
}
