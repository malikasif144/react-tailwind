import React from 'react'

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            What tip & tricks to optimize your flow?
          </h1>
          <p>Sifn up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 rounded-md text-black"
              type="email"
              placeholder="enter email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto ml-4 py-3 text-black">
              Notify Me
            </button>
          </div>
          <p>
            we care about the protection of your data.read our{" "}
            <span className="text-[#00df9a]">privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter