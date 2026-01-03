

function Navbar() {
  return (
    <nav className='w-full flex flex-row'>
        <div className='w-2/3 rounded-lg bg-accent p-2 md:p-4 flex flex-row space-x-1 align-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input className='w-full h-full focus:outline-none' type="text" placeholder="Search here..." />
             
        </div>
        <div className='w-1/3 flex flex-row justify-end space-x-2 md:space-x-4 align-center'>
          <button className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
            <div className='absolute top-3 right-0 md:top-4.5 md:right-1 rounded-full p-0.5 md:p-1 bg-red-500'></div>
          </button>
          <button className='rounded-full'>
            <img src="./pfp.jpg" className='size-4 md:size-8 rounded-full object-cover'/>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
    </nav>
  )
}

export default Navbar;