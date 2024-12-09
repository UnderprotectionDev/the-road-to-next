import { PrismaClient, TicketStatus } from "@prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the first ticket.",
    status: TicketStatus.DONE,
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket.",
    status: TicketStatus.OPEN,
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket.",
    status: TicketStatus.IN_PROGRESS,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("DB Seed: Started ...");

  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed()
  .catch(() => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
