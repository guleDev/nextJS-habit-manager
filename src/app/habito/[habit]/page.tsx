import { kv } from "@vercel/kv";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import Calendar from "@/components/Calendar";

export default async function Habit({
  params: { habit },
}: {
  params: { habit: string };
}) {
  const decodedhabit = decodeURI(habit);
  const habitStreak: Record<string, boolean> | null = await kv.hget(
    "habits",
    decodedhabit
  );

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16 w-3/12">
      <h1 className="text-4xl font-light text-center text-white font-display">
        {decodedhabit}
      </h1>
      <Link
        className="flex items-center font-sans text-xs text-neutral-300 gap-2"
        href={"/"}
      >
        <ArrowIcon width={12} height={12} />
        Voltar
      </Link>
      <Calendar habit={decodedhabit} habitStreak={habitStreak} />
    </main>
  );
}
