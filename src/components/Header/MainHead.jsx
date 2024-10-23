import React from 'react'

const MainHead = () => {
  return (
    <div className='flex  justify-end md:justify-between md:mx-10 text-[15px] lg:mx-[15vw] items-center'>
        {/* left menu */}
        <div className="md:flex gap-2 hidden my-3">
            <a href='/' className='hover:underline duration-150 transition-all'>Personal</a>
            <span> | </span>
            <a className='hover:underline transition-all' href='a'>Business</a>

        </div>

        <div className=" gap-2 ">
            <a className='hover:underline transition-all' href='/'>Sign in</a>
            <span> or </span>
            <a className='hover:underline transition-all' href='/'>Register</a>
        </div>
        
    </div>
  )
}

export default MainHead