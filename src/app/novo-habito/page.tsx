import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import ResetButton from "@/components/ResetButton";

export default function NewHAbit() {
  async function newHAbit(formData: FormData) {
    "use server";

    const habit = formData.get("habit");
    
    if(habit){
      await kv.hset("habits", { [habit as string] : {}});

      revalidatePath("/");
      redirect("/");
    } 
    else {
      revalidatePath("/");
      redirect("/");
    }

  }

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16 items-center">
      <h1 className="text-4xl font-light text-white font-display">
        novo hábito
      </h1>
      <h2 id="alert">
      </h2>
      <form action={newHAbit} className="flex flex-col gap-4 mt-4 ">
        <div className="flex">
          <input
            type="text"
            name="habit"
            id="habit"
            className="p-2 font-sans text-xl text-white rounded-md bg-neutral-800"
          />
          <ResetButton className="relative text-neutral-400 ml-2" />
        </div>
        <button
          type="submit"
          className="bg-primary-green font-display text-neutral-900 font-regular text-2xl p-2 rounded-md mt-8"
        >
          cadastrar
        </button>
        <button className="bg-neutral-800 text-[#F85858] font-display font-regular text-2xl p-2 rounded-md">
          cancelar
        </button>
      </form>
    </main>
  );
}
