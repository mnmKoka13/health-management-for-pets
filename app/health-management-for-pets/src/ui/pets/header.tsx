import Image from 'next/image';
import React from 'react';

export default function Header() {  
  return (
    <header id="header" className="bg-amber-300 text-gray-600 body-font">
      <div className="container flex flex-wrap px-3 py-2 flex-row justify-between items-center">
        <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
          <Image src="/sample-icon.png" alt="icon" width={50} height={50} />
          <span className="ml-3 text-lg">ペットの健康管理手帳</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Image src="/bars_hoso.svg" alt="icon" width={40} height={40} />
        </nav>
      </div>
    </header>
  );
};