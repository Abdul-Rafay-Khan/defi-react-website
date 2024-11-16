import React from 'react'


const Subscribe = () => {
  return (
    <div className=' w-full text-white bg-black text-center'>
        <div className=' max-w-[1240px] mx-auto px-4 py-16  '>

            <h1 className=' text-3xl md:text-5xl font-bold '>Join Our DeFi Community</h1>
            <div className='  pt-8 pb-4'>
                <input className='p-3 md:py-3 md:pl-5 md:pr-9 rounded-full text-black mr-4' type="email" placeholder='Enter your email' />
                <button className='  bg-gradient-to-r from-[#6a00ff] to-[#00d8ff]  py-3 px-9 rounded-full'>Sign Up</button>
            </div>
            <div className=' flex items-center justify-center'>
                
                <p className=' md:flex md:items-center'><input className=' mr-2' type="checkbox" /> Yes, I agree to receive email communications from DeFi.</p>
            </div>
            
           

        </div>


    </div>
  )
}

export default Subscribe