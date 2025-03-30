import prisma from "@/lib/prisma";
import { randomBytes, scryptSync } from "crypto";

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hashed = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hashed}`;
}

async function main() {
  // Crear roles
  await prisma.role.createMany({
    data: [{ name: "Doctor" }, { name: "Admin" }, { name: "Enfermera" }],
    skipDuplicates: true,
  });

  const roleDoctor = await prisma.role.findFirst({ where: { name: "Doctor" } });
  const roleAdmin = await prisma.role.findFirst({ where: { name: "Admin" } });
  const roleEnfermera = await prisma.role.findFirst({
    where: { name: "Enfermera" },
  });

  // Crear usuarios
  await prisma.user.createMany({
    data: [
      {
        username: "Dr. Martinez",
        password: hashPassword("22032002"),
        email: "dmartinez@sanitosv.com",
        roleId: roleDoctor!.id,
      },
      {
        username: "David Cruz",
        password: hashPassword("22032002"),
        email: "dcruz@sanitosv.com",
        roleId: roleAdmin!.id,
      },
      {
        username: "Henry Cruz",
        password: hashPassword("14052000"),
        email: "hcruz@sanitosv.com",
        roleId: roleEnfermera!.id,
      },
    ],
    skipDuplicates: true,
  });

  const users = await prisma.user.findMany();

  // Crear especialidades
  await prisma.specialty.createMany({
    data: [
      { name: "Cardiología" },
      { name: "Pediatría" },
      { name: "Dermatología" },
    ],
    skipDuplicates: true,
  });

  const specialties = await prisma.specialty.findMany();

  // Crear personal médico
  await prisma.personal.createMany({
    data: users.map((user: { id: number }) => ({ userId: user.id })),
    skipDuplicates: true,
  });

  const personals = await prisma.personal.findMany();

  // Asignar especialidades al personal
  await prisma.personalSpecialty.createMany({
    data: personals.map((personal: { id: number }, index: number) => ({
      personalId: personal.id,
      specialtyId: specialties[index % specialties.length].id,
    })),
    skipDuplicates: true,
  });

  // Crear pacientes
  await prisma.patient.createMany({
    data: [
      {
        firstName: "Juan",
        lastName: "Perez",
        birthDate: new Date("1990-01-01"),
      },
      {
        firstName: "Maria",
        lastName: "Gomez",
        birthDate: new Date("1985-05-20"),
      },
    ],
    skipDuplicates: true,
  });

  const patients = await prisma.patient.findMany();

  // Crear citas
  await prisma.appointment.createMany({
    data: patients.map((patient: { id: number }, index: number) => ({
      patientId: patient.id,
      personalId: personals[index % personals.length].id,
      date: new Date(),
      status: "Pendiente",
    })),
    skipDuplicates: true,
  });

  // Crear recordatorios
  await prisma.reminder.createMany({
    data: personals.map((personal: { id: number }) => ({
      personalId: personal.id,
      title: "Revisión de agenda",
      description: "Revisar citas del día",
      priority: 1,
      status: "Pendiente",
      date: new Date(),
    })),
    skipDuplicates: true,
  });

  console.log("Seeder ejecutado con éxito");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
