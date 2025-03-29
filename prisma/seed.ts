import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Seed Roles
  const roles = await prisma.role.createMany({
    data: Array.from({ length: 12 }, () => ({ name: faker.person.jobTitle() })),
  });

  // Seed Users
  const users = await prisma.user.createMany({
    data: Array.from({ length: 12 }, (_, i) => ({
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      roleId: (i % 12) + 1,
    })),
  });

  // Seed Specialties
  const specialties = await prisma.specialty.createMany({
    data: Array.from({ length: 12 }, () => ({ name: faker.word.noun() })),
  });

  // Seed Personal
  const personal = await prisma.personal.createMany({
    data: Array.from({ length: 12 }, (_, i) => ({ userId: i + 1 })),
  });

  // Seed Academic Titles
  const academicTitles = await prisma.academicTitle.createMany({
    data: Array.from({ length: 12 }, () => ({
      name: faker.education.major(),
      personalId: faker.number.int({ min: 1, max: 12 }),
    })),
  });

  // Seed Patients
  const patients = await prisma.patient.createMany({
    data: Array.from({ length: 12 }, () => ({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      birthDate: faker.date.past({ years: 30 }),
    })),
  });

  // Seed Appointments
  const appointments = await prisma.appointment.createMany({
    data: Array.from({ length: 12 }, () => ({
      patientId: faker.number.int({ min: 1, max: 12 }),
      personalId: faker.number.int({ min: 1, max: 12 }),
      date: faker.date.future(),
      status: "Scheduled",
    })),
  });

  // Seed Reminders
  const reminders = await prisma.reminder.createMany({
    data: Array.from({ length: 12 }, () => ({
      personalId: faker.number.int({ min: 1, max: 12 }),
      title: faker.lorem.words(3),
      description: faker.lorem.sentence(),
      priority: faker.number.int({ min: 1, max: 5 }),
      status: "Pending",
      date: faker.date.future(),
    })),
  });

  // Seed Payments
  const payments = await prisma.payment.createMany({
    data: Array.from({ length: 12 }, () => ({
      patientId: faker.number.int({ min: 1, max: 12 }),
      amount: faker.number.float({ min: 20, max: 200 }),
      date: faker.date.recent(),
    })),
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
