import React from "react";
import Header from "@/ui/header";
import DatePicker from "@/ui/datePicker";

export default function Page() {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font bg-amber-50 h-screen py-5 px-5">
        <div className="flex flex-col w-full mb-12 h-1 text-center">
          <h1 className="text-xl font-medium title-font mb-2 text-gray-900">ペット基本情報</h1>
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              なまえ
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="なまえ"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ペットの種類
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="type"
              aria-placeholder="選択してください"
            >
              <option value="">選択してください</option>
              <option value="dog">犬</option>
              <option value="cat">猫</option>
              <option value="bird">鳥</option>
              <option value="other">その他</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              性別
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="type"
              aria-placeholder="選択してください"
            >
              <option value="">選択してください</option>
              <option value="dog">オス</option>
              <option value="cat">メス</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              生年月日
            </label>
            <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <DatePicker />
            </div>
            {/* DatePickerがうまく表示されない・・・ */}
            {/* <DatePicker /> */}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              登録
            </button>
          </div>
        </form>
      </section>
    </>
  );
};