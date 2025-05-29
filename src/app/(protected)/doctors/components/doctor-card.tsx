"use client";

import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { CalendarIcon, ClockIcon, DollarSignIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { doctorsTable } from "@/db/schema";
import { formatCurrency } from "@/helpers/currency";

import { getAvailability } from "../helpers/availability";
import UpsertDoctorForm from "./upsert-doctor-form";

interface DoctorCardProps {
  doctor: typeof doctorsTable.$inferSelect;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const doctorInitials = doctor.name
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");

  const availability = getAvailability(doctor);

  console.log(doctor.appointmentPriceInCents);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar className="h-12 w-12">
            <AvatarFallback>{doctorInitials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-miedium text-lg">{doctor.name}</h3>
            <p className="text-muted-foreground text-sm">{doctor.specialty}</p>
          </div>
        </div>
      </CardHeader>
      <Separator>
        <CardContent className="flex flex-col gap-2">
          <Badge variant="outline">
            <CalendarIcon className="mr-1" />
            {availability.from.format("dddd")} a{" "}
            {availability.to.format("dddd")}
          </Badge>
          <Badge variant="outline">
            <ClockIcon className="mr-1" />
            {availability.from.format("HH:mm")} as{" "}
            {availability.to.format("HH:mm")}
          </Badge>
          <Badge variant="outline">
            <DollarSignIcon className="mr-1" />
            {formatCurrency(doctor.appointmentPriceInCents)}
          </Badge>
        </CardContent>
        <Separator>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Ver detalhes</Button>
              </DialogTrigger>
              <UpsertDoctorForm />
            </Dialog>
          </CardFooter>
        </Separator>
      </Separator>
    </Card>
  );
};

export default DoctorCard;
