export default function NewHAbit() {
  async function newHAbit(formData: FormData) {
    "use server";

    const habit = formData.get("habit");

    console.log(habit);
  }

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-4xl font-light text-center text-white font-display">
        novo hábito
      </h1>
      <form action={newHAbit} className="flex flex-col gap-4 mt-4 ">
        <input
          type="text"
          name="habit"
          id="habit"
          className="p-2 font-sans text-xl text-white rounded-md bg-neutral-800"
        />
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