import React from 'react'
import Navbar from './Navbar'
import herovid from '../assets/video.mp4'

const Hero = () => {
  return (
    <div className=' w-full h-screen text-white '>
        <Navbar/>
        <div>
            <video className=' object-cover h-full w-full absolute -z-10' src={herovid} autoPlay loop muted/>
        </div>

<div className=' flex items-center justify-center flex-col text-center mt-64 px-4'>
    <h1 className='font-bold text-4xl mb-2'>Decentralized</h1>
    <h1 className='font-bold text-4xl mb-4'><span className='text-[#00d8ff]'>Trading</span> Protocol</h1>
    <p className=' font-medium '>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
    <div className=' mt-4'>
    <button className='  bg-gradient-to-r from-[#6a00ff] to-[#00d8ff]  py-2 px-9 rounded-full'>Use Defi</button>
    <button className='py-2 px-9 rounded-full bg-transparent border border-[#00d8ff] text-[#00d8ff]  ml-4'>FAQ</button>
    </div>
</div>
    <div className=' mt-40'>
    <p className='text-center text-white text-2xl font-bold'>Total Volume Secured: $42,104,783,662.47</p>
    </div>


    </div>
  )
}

export default Hero