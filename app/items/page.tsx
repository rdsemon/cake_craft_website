import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

const pizza = {
  id: 1,
  name: "Margherita",
  description:
    "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
  image: "'",
  tags: ["Vegetarian", "Classic"],
  price: 12.99,
};

export default function Items() {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={pizza.image || "/placeholder.svg"}
          alt={pizza.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {pizza.tags.map((tag) => (
            <Badge
              key={tag}
              className="bg-primary text-primary-foreground hover:bg-primary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-lg font-bold">{pizza.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {pizza.description}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          {/* <div className="flex items-center gap-1.5">
            {sizes.map((s) => (
              <button
                key={s.id}
                onClick={() => setSize(s.id)}
                className={cn(
                  "flex flex-1 flex-col items-center rounded-lg border py-1.5 text-xs font-semibold transition-colors",
                  size === s.id
                    ? "border-primary bg-primary/15 text-foreground"
                    : "border-border text-muted-foreground hover:border-primary/50",
                )}
                aria-pressed={size === s.id}
              >
                <span>{s.id}</span>
                <span className="text-[10px] font-normal opacity-70">
                  {s.inches}
                </span>
              </button>
            ))}
          </div> */}

          <div className="flex items-center justify-between">
            <span className="text-xl font-extrabold">3</span>
            <Button size="sm" className="gap-1.5 font-semibold">
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
