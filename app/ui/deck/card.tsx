import Link from "next/link";

function fetchDeckData() {
    return [{ id: 1, name: 'ingles' }, { id: 2, name: 'frances' }]
}

export default async function CardList() {
    const decks = await fetchDeckData();


    return(
        <>
        {decks.map((deck,i)=>{
            return(
                <div className="w-70 h-40 p-5" key={i}>
                    <Link key={i} href={`/app/decks/${deck.id}`} className="w-full h-full bg-orange-300 flex items-center justify-center"> {deck.name}</Link>
                </div>
            )
        })}
        </>
    )
}