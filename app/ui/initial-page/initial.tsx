import Link from "next/link";

function fetchAllInitialData() {
  return {
    decks: {
      toReview: 3,
      total: 5
    },
    statistics: {
      streak: 4,
      topics: 3
    }
  }
}


export default async function initial() {
  const { decks, statistics } = fetchAllInitialData();
  return (
    <div className="w-full h-full flex flex-row flex-wrap justify-center items-center">
      <Link href={'/app/decks'} className="w-1/4 min-w-50 h-1/2 min-h-90 flex flex-col justify-center border-2 border-orange-400 rounded-md mr-3">
        <p>decks to review: {decks.toReview}</p>
        <p>total decks: {decks.total}</p>
      </Link>
      <Link href={'/app/profile'} className="w-1/4 min-w-50 h-1/2 min-h-90 flex flex-col justify-center items-center border-2 border-orange-400 rounded-md ml-3">
        <p>you profile</p>
        <p>Statistics</p>
      </Link>
      <div className="w-full text-center mt-7">
        <p>Your Streak</p>
        <p>{statistics.streak}</p>
      </div>
    </div>
  )
}