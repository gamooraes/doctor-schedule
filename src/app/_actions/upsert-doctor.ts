import { headers } from "next/headers";

import { UpsertDoctorSchema } from "@/actions/upsert-doctor/schema";
import { db } from "@/db";
import { doctorsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

export async function upsertDoctor(data: UpsertDoctorSchema) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  if (!session?.user.clinic?.id) {
    throw new Error("Clinic not found");
  }
  await db
    .insert(doctorsTable)
    .values({
      ...data,
      clinicId: session?.user.clinic?.id,
    })
    .onConflictDoUpdate({
      target: [doctorsTable.id],
      set: {
        ...data,
      },
    });
}
