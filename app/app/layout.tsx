import Link from "next/link";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-screen flex-col md:flex-row md:overflow-hidden ">
      <div className="w-1/10 flex-col md:w-64">
        <div className="h-9/10">
          <div className="flex w-full h-15 items-center justify-center"> <p className="text-center align-baseline">image</p></div>
          <Link href={'/app/profile'} className="flex w-full h-15 items-center justify-center" > profile</Link>
          <Link href={'/app/decks'} className="flex w-full h-15 items-center justify-center"> decks</Link>
        </div>
        <div className="flex w-full h-1/10">
          <div className="flex w-1/2 h-full items-center justify-center">theme</div>
          <div className="flex w-1/2 h-full items-center justify-center"> logout</div>
        </div>
      </div>
      <div className="grow w-full md:w-9/10 lg:w-9/10">{children}</div>
    </div>
  );
}