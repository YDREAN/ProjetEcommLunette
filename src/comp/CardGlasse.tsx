import { Button } from "@/components/ui/button";
import { Lunette } from "../Lunette.ts";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export function CardGlasse({ lunette }: { lunette: Lunette }) {
  return (
    <Card className=" flex flex-col group  items-center      w-64  overflow-hidden border-slate-300  shadow-sm shadow-slate-100">
      <CardHeader className="">
        <img
          className="  transition ease-in-out  w-56 group-hover:scale-110"
          src={lunette.image}
          alt=""
        />
      </CardHeader>
      <CardContent className="flex flex-col  items-center">
        <CardTitle className=" text-3xl">{lunette.nom}</CardTitle>
        <CardDescription className="  h-12     text-center ">
          {lunette.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-4 justify-between">
        <h1 className=" text-xl   font-semibold">{lunette.prix}</h1>
        <Button className="border border-slate-300" variant="outline">
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  );
}
