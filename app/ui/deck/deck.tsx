import Link from "next/link";

function fetchAllDecksData() {
  return [{ id: 1, name: 'ingles' }, { id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'frances' },{ id: 2, name: 'italian' }]
}

export default async function deckList() {
  const decks = await fetchAllDecksData();


  return (
    <>
      {decks.map((deck, i) => {
        return (
          <div className="w-9/10 max-w-80 h-40 p-5" key={i}>
            <Link key={i} href={`/app/decks/${deck.id}`} className="w-full h-full bg-orange-300 flex items-center justify-center"> {deck.name}</Link>
          </div>
        )
      })}
    </>
  )
}