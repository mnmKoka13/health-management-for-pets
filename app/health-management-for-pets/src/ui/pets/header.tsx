import Image from 'next/image';
import React from 'react';

export default function Header() {  
  return (
    <header className="bg-amber-200 text-gray-600 body-font">
      <div className="container flex flex-wrap p-3 flex-row justify-between items-center">
        <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
          <Image src="/sample-icon.png" alt="icon" width={50} height={50} />
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">ユーザー設定</a>
        </nav>
      </div>
    </header>
  );
};
