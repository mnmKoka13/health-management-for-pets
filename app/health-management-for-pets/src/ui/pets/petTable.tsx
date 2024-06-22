import React from "react";
import Image from "next/image";

export default function PetTable() {
  // TODO: DBからペット情報一覧を取得して表示するように修正
  const pets = ["すあま", "ナッツ", "いろは", "ふみ", "竹千代"];

  const rows = pets.map((pet) => 
    <tr key={pet}>
      <td className="px-4 py-3 w-1/6">
        <Image src="/sample-icon.png" alt="icon" width={50} height={50} />
      </td>
      <td className="px-4 py-3 text-base w-1/2">{pet}</td>
      <td className="text-center">
        <button className="flex ml-auto text-white text-sm bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded">詳細</button>
      </td>
    </tr>
  );
  
  return (
    <table className="table-auto w-full text-left whitespace-no-wrap">
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};
