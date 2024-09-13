import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export function AvatarLabel({ name }: { name: string }) {
  return (
    <div className="flex  items-center gap-3 border  border-slate-300 hover:shadow-lg p-1    rounded-lg">
      <p>{name}</p>
      <Avatar className=" size-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
