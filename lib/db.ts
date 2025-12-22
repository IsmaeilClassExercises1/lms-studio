// lib/db.ts

import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"; // 1. آداپتور را وارد کنید
import { Pool } from "pg"; // 2. Pool را از درایور pg وارد کنید

// 3. یک Pool از اتصالات برای کل اپلیکیشن ایجاد کنید
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// 4. یک آداپتور جدید بسازید
const adapter = new PrismaPg(pool);

// 5. PrismaClient را با آداپتور بسازید
const prismaClientSingleton = () => {
  return new PrismaClient({
    adapter,
  });
};

// بقیه کد برای جلوگیری از ساختن نمونه‌های تکراری است
const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof prismaClientSingleton> | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
