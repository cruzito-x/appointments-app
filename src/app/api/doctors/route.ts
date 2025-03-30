import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const personal = await prisma.personal.findMany({
      include: {
        specialties: {
          include: {
            specialty: true,
          },
        },
      },
    });

    const personalData = personal.map((person: any) => ({
      id: person.id,
      name: person.name,
      specialties: person.specialties.map(
        (specialty: any) => specialty.specialty.name
      ),
      years_experience: person.years_experience,
      patients_helped: person.patients_helped,
      created_at: person.created_at,
      updated_at: person.updated_at,
    }));

    return NextResponse.json(personalData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener los datos", details: error },
      { status: 500 }
    );
  }
}
