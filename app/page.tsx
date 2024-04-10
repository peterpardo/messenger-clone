export default function Home() {
  return (
    <main className="h-screen flex">
      <div className="bg-slate-300 min-w-20">sidebar 1</div>
      <div className="bg-slate-200 min-w-24 max-w-[360px] w-full">
        sidebar 2
      </div>
      <div className="bg-slate-100 w-full">chat</div>
    </main>
  );
}
