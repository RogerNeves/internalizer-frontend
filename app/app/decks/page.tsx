import DeckList from "@/app/ui/deck/deck";

export default function Home() {

  return (
    <div className=" flex flex-col min-h-screen align-center justify-center bg-zinc-50 font-sans bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <h1 className="flex flex-row content-center justify-center text-center w-full">Yours Decks</h1>
      <div className="flex flex-row flex-wrap h-screen w-full justify-center overflow-auto scroll-auto">
        <DeckList />
      </div>
    </div>
  );
}