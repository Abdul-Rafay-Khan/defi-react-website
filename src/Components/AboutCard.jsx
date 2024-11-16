import React from 'react'

const AboutCard = (props) => {
  return (
    <div className=' flex flex-col border rounded-2xl text-left px-8 py-12 hover:scale-105 cursor-pointer duration-300 '>
        <div >
            <div className=' bg-[#00d8ff] text-black inline-flex p-4 rounded-full'>
{props.icon}
            </div>
<h1 className=' py-4 text-2xl font-bold'>{props.heading}</h1>
<p className=' text-xl'>{props.text}</p>

        </div>

    </div>
  )
}

export default AboutCard