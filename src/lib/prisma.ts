import { PrismaClient } from '../generated/prisma';

let prisma: PrismaClient | undefined;

export function getPrisma() {
  if (!prisma) {
    prisma = new PrismaClient({ log: ['query'] });
  }
  return prisma;
}
