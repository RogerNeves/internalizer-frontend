import Link from "next/link";

function fetchAllDecksData() {
  return [{ id: 1, name: 'ingles' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'frances' }, { id: 2, name: 'italian' }]
}

export default async function deckList() {
  const decks = await fetchAllDecksData();
  let lastI = 0;

  return (
    <>
      {decks.map((deck, i) => {
        return (
          <Link href={`/app/decks/${deck.id}`} className="w-9/10 max-w-80 h-40 m-3 flex relative hover:text-black group" key={i}>
            <div className="w-full h-9/10 bg-orange-300 rounded-md border-2 border-amber-50 absolute -top-4 -left-2 group-hover:border-black"></div>
            <div className="w-full h-9/10 bg-orange-300 rounded-md border-2 border-amber-50 absolute -top-2 -left-1 group-hover:border-black"></div>
            <div className="w-full h-9/10 bg-orange-300 flex items-center justify-center rounded-md border-2 border-amber-50 absolute group-hover:border-black"> {deck.name}</div>
          </Link>
        )
        lastI = i;
      })}
      <div className="w-9/10 max-w-80 h-40 p-5" key={lastI++}>
        <Link href={`/app/decks/new`} className="w-full h-full border-2 border-amber-50 bg-orange-300 flex items-center justify-center rounded-md hover:text-black hover:border-black"> +</Link>
      </div>
    </>
  )
}