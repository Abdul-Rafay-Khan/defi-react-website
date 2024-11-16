import React,{useState} from 'react'
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = ()=>{
        setNav(!nav)
    }
  return (
    <div className=' w-full bg-black text-white relative'>
        <div className=' max-w-[1240px] mx-auto p-4 flex justify-between items-center'>

            <div>
                <h1 className=' font-bold text-3xl text-[#00d8ff]'>Defi</h1>
            </div>
            <div className=' hidden md:flex'>
                <ul className=' flex'>
                    <li className=' p-4 font-medium cursor-pointer'>Platform</li>
                    <li className=' p-4 font-medium cursor-pointer'>Community</li>
                    <li className=' p-4 font-medium cursor-pointer'>Developers</li>
                    <li className=' p-4 font-medium cursor-pointer'>About</li>
                </ul>
                <button className=' ml-6 bg-gradient-to-r from-[#6a00ff] to-[#00d8ff]  py-1 px-9 rounded-full'>Use Defi</button>
            </div>

            <div onClick={handleNav} className=' block md:hidden '>
                {nav ?  <GrClose  size={30}/> :    <FiMenu  size={30}/>}
         
           

            </div>

            {/* mobile nav */}
          <div className={nav ? ' w-[70%] bg-black h-screen absolute left-0 top-0 transition-all duration-300' : 'absolute left-[-100%] '}>
          <h1 className=' px-6  py-4  font-bold text-3xl text-[#00d8ff]'>Defi</h1>
            <ul>
                    <li className=' p-6 font-medium cursor-pointer'>Platform</li>
                    <li className=' p-6 font-medium cursor-pointer'>Community</li>
                    <li className=' p-6 font-medium cursor-pointer'>Developers</li>
                    <li className=' p-6 font-medium cursor-pointer'>About</li> 
            </ul>
            <button className='  mt-2 mx-4 bg-gradient-to-r from-[#6a00ff] to-[#00d8ff]  py-2 px-9 rounded-full'>Use Defi</button>


          </div>

        </div>

    </div>
  )
}

export default Navbar