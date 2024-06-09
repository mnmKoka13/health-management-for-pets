import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">Health management for pets</h1>
        <p className="text-center">A simple health management application for pets</p>
      </div>
      <Link href="/pets">
        <span>ペット管理画面</span>
      </Link>
    </main>
  );
}
