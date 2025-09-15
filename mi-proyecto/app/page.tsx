import Saludo from "../components/Saludo";
import Image from "next/image";
import Info from "../components/Info";
import GifDemo from "../components/GifDemo";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Mi primer proyecto Next.js</h1>
      <Saludo nombre="Tomas Salig" />
      <Image
        src="/images.jpeg"    
        alt="Logo del proyecto"
        width={200}     
        height={200}    
      />
      <Info />
      <GifDemo />
    </main>
  );
}