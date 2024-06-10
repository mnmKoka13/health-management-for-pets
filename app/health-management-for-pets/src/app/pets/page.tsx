import React from 'react';
import Header from '@/ui/pets/header';
import Image from 'next/image';
export default function Page(){
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font bg-amber-50">
        <div className="container px-5 py-24 mx-auto align-top pt-8">
          <div className="flex flex-col w-full mb-16 h-1">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">ペット一覧</h1>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              {/* <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-amber-100"></th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-amber-100">なまえ</th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-amber-100 rounded-tr rounded-br"></th>
                </tr>
              </thead> */}
              <tbody>
                <tr>
                  <td className="px-4 py-3 w-1/6">
                    <Image src="/sample-icon.png" alt="icon" width={50} height={50} />
                  </td>
                  <td className="px-4 py-3 text-base w-2/3">すあま</td>
                  <td className="w-10 text-center">
                    <button className="flex ml-auto text-white text-sm bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded">詳細</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </section>
    </>
  );
};
