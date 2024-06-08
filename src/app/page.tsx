import DayState from "@/components/DayState";
import Link from "next/link";
import { kv } from "@vercel/kv";
import DeleteButton from "@/components/DeleteButton";

type Habits = {
  [habit: string]: Record<string, boolean>;
} | null;

export default async function Home() {
  const habits: Habits = await kv.hgetall("habits");
  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const sortedWeekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));

  const last7Days = weekDays
    .map((_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - index);

      return date.toISOString().slice(0, 10);
    })
    .reverse();

  return (
    <main className="container relative flex flex-col pt-16 sm:w-full md:w-9/12 lg:w-3/12 h-svh">
      <section className="overflow-y-scroll h-5/6 gap-8 px-4">
        {" "}
        {habits == null ||
          (Object.keys(habits).length == 0 && (
            <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
              Você não tem hábitos cadastrados
            </h1>
          ))}
        {habits !== null &&
          Object.entries(habits).map(([habit, habitStreak]) => (
            <div key={habit} className="flex flex-col gap-2 my-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-light text-white font-sans">
                  {habit}
                </span>
                <DeleteButton habit={habit} />
              </div>
              <Link href={`habito/${encodeURIComponent(habit)}`}>
                <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
                  {sortedWeekDays.map((day, index) => (
                    <div key={day} className="flex flex-col last:font-bold">
                      <span className="font-sans text-xs text-white text-center">
                        {day}
                      </span>
                      {/*day state*/}
                      <DayState day={habitStreak[last7Days[index]]} />
                    </div>
                  ))}
                </section>
              </Link>
            </div>
          ))}
      </section>
      <footer className="flex justify-center my-8">
        <Link className="w-9/12 text-center text-neutral-900 bg-primary-green font-display font-regular text-2xl p-3 rounded-md" href="novo-habito">novo hábito</Link>
      </footer>
    </main>
  );
}
