import React from 'react';

const Navbar = () => {
  return (
    <div className='p-5 shadow bg-slate-900 border-b border-rose-400 flex items-center justify-between fixed top-0 w-full z-10'>
      <h1 className='text-rose-400 font-custom font-semibold text-xl'>Swetha Ramesh</h1>
      <button className="px-4 py-2 bg-rose-400  hover:bg-rose-500 rounded-lg">
        <a
          href="https://swethadsalvatore.github.io/Swetha.Ramesh-Resume/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
        >
          Hire me
        </a>
      </button>
    </div>
  );
};

export default Navbar;
