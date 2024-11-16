import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full bg-black text-white text-center '>
        <div className=' max-w-[1240px] mx-auto px-4 py-16 grid grid-cols-2 lg:grid-cols-5'>

            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Products</h3>
                <ul>
                    <li className=" py-2">App</li>
                    <li className=" py-2">Analytics</li>
                    <li className=" py-2">Token List</li>
                    <li className=" py-2">Defi</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Developers</h3>
                <ul>
                    <li className=" py-2">App</li>
                    <li className=" py-2">Analytics</li>
                    <li className=" py-2">Token List</li>
                    <li className=" py-2">Defi</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Governance</h3>
                <ul>
                    <li className=" py-2">App</li>
                    <li className=" py-2">Analytics</li>
                    <li className=" py-2">Token List</li>
                    <li className=" py-2">Defi</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Community</h3>
                <ul>
                    <li className=" py-2">App</li>
                    <li className=" py-2">Analytics</li>
                    <li className=" py-2">Token List</li>
                    <li className=" py-2">Defi</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>About</h3>
                <ul>
                    <li className=" py-2">App</li>
                    <li className=" py-2">Analytics</li>
                    <li className=" py-2">Token List</li>
                    <li className=" py-2">Defi</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer