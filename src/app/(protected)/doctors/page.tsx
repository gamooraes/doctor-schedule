import { Plus } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeeaderContent,
  PageTitle,
} from "@/components/ui/page-container";
import { auth } from "@/lib/auth";

const DoctorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }
  if (!session.user.clinic) {
    redirect("/clinics-form");
  }
  return (
    <PageContainer>
      <PageHeader>
        <PageHeeaderContent>
          <PageTitle>Doctors</PageTitle>
          <PageDescription>
            Manage your doctors and their schedules
          </PageDescription>
        </PageHeeaderContent>
        <PageActions>
          <Plus />
          <Button>Add Doctor</Button>
        </PageActions>
      </PageHeader>
      <PageContent>Doctors</PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;
