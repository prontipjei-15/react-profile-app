import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import profile from './../assets/profile1.jpg'

export default function Home() {
    return (
        <>
            {/* NavBar */}
            <div className='flex justify-between px-16 py-6 bg-[#0B1E3D] items-center'>
                <div>
                    <span className='text-white text-2xl tracking-wide'>
                        CHUTIKAN PROMPUNYA
                    </span>
                </div>

                <div className='flex gap-8 items-center text-white'>
                    <Link to='/home' className='hover:text-blue-300'></Link>
                    <Link to='/about' className='hover:text-blue-300'>About</Link>
                    <Link to='/capabilities' className='hover:text-blue-300'>Capabilities</Link>
                    <Link to='/experience' className='hover:text-blue-300'>Experience</Link>
                </div>
            </div>

            {/* Hero Section */}
            <div className='flex bg-blue-950 min-h-screen items-center px-20'>

                {/* Left Content */}
                <div className='flex flex-col flex-1 justify-center'>
                    <h1 className="text-white text-7xl font-normal tracking-wider font-['Bebas_Neue']">
                        HI, I AM
                    </h1>
                    <h1 className="text-white text-7xl font-normal tracking-wider font-['Bebas_Neue']">
                        CHUTIKAN P.
                    </h1>

                    <p className='text-blue-200 text-lg max-w-lg'>
                        นักพัฒนาเว็บไซต์ฟรอนต์เอนด์จากประเทศไทย
                        ที่มีความหลงใหลในการสร้างเว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
                    </p>
                    {/* ปุ่ม + ไอคอน */}
                    <div className='mt-8 flex items-center gap-4'>

                        {/* Contact Button */}
                        <button className='bg-blue-200 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-300 transition'>
                            CONTACT ME
                        </button>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-14 h-14 flex items-center justify-center rounded-full 
                   bg-black border-2 border-black 
                   hover:scale-110 transition duration-300'
                        >
                            <TbBrandLinkedinFilled className='text-blue-200 text-2xl' />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-14 h-14 flex items-center justify-center rounded-full 
                   bg-black border-2 border-black 
                   hover:scale-110 transition duration-300'
                        >
                            <FaGithub className='text-blue-200 text-xl' />
                        </a>

                    </div>
                </div>

                {/* Right Image */}
                <div className='flex-1 flex justify-center'>
                    <img
                        src={profile}
                        alt="profile"
                        className='w-[400px] h-[500px] object-cover rounded-3xl shadow-2xl'
                    />
                </div>
            </div>
        </>
    )
}