import React from 'react'
import terminal from '../assets/terminal.png'

const Developer = () => {
  return (
    <div className=' w-full bg-black text-white '>
        <div className=' max-w-[1240px] mx-auto px-4 py-16 md:flex md:items-center'>
            <div>
            <h1 className=' md:text-4xl text-3xl lg:text-5xl font-bold py-4'>Superpowers for DEFI developers.</h1>
            <p>
            Checkout the <span className="text-[#00d8ff]">documentation</span>, the <span className="text-[#00d8ff]">quick start</span>  or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
            </div>
            <div className=' flex justify-center items-center w-full py-16'>
<img className=' max-w-[250px] shadow-lg shadow-cyan-500/50 ' src={terminal} alt="" />
            </div>

        </div>

    </div>
  )
}

export default Developer