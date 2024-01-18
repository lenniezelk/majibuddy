import type { SettingCreate } from "prisma/zod";
import { prisma } from "~/db.server";

export const createSetting = async ({ userId, key, value }: SettingCreate) => {
  await prisma.setting.create({
    data: {
      userId,
      key,
      value,
    },
  });
};

export const createDefaultSettings = async (userId: string) => {
  await prisma.setting.createMany({
    data: [
      {
        userId,
        key: "dailyGoal",
        value: "2500",
      },
      {
        userId,
        key: "cupSize",
        value: "355",
      },
    ],
  });
};
