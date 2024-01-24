import Link from "next/link";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
        <h1 className='font-bold text-2xl '>Backend Excellence</h1>
        <p className='font-light tracking-tighter text-xl'>Somos un agencia dedicada a brindarte el mejor servicio de desarollos de sitios web.</p>
       <div className='flex items-center justify-center w-full '>
        <button className='p-2 hover:scale-110 shadow-xl shadow-black rounded-lg bg-slate-400 border-2 border-black text-black hover:text-white hover:bg-slate-900 hover:border-blue-500'>
            <Link href="/">Consultar Ahora</Link>
        </button>
       </div>
    </main>
  );
}
