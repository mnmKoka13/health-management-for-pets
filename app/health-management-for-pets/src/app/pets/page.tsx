import React from 'react';
import Header from '@/ui/header';
import Image from 'next/image';
import PetTable from '@/ui/pets/petTable';
import Link from 'next/link';
export default function Page(){
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font bg-amber-50 h-screen">
        <div className="container px-3 py-24 mx-auto align-top pt-8">
          <div className="flex flex-col w-full mb-12 h-1 text-center">
            <h1 className="text-xl font-medium title-font mb-2 text-gray-900">ペット一覧</h1>
          </div>
          <div className="lg:w-2/3 w-full overflow-auto">
          </div>
          <PetTable />
          <div className="py-2 border-dotted border-2 rounded-md hover:bg-amber-200">
            {/* TODO: プラス記号はあいこんに置き換える */}
            <Link href="/baseData">
              <p className="text-center">ペットを追加する➕</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
