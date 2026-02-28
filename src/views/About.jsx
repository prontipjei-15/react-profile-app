import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import profile2 from './../assets/profile2.jpg'

export default function About() {
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
                    <Link to='/home' className='hover:text-blue-300'>Home</Link>
                    <Link to='/about' className='hover:text-blue-300'>About</Link>
                    <Link to='/capabilities' className='hover:text-blue-300'>Capabilities</Link>
                    <Link to='/experience' className='hover:text-blue-300'>Experience</Link>
                </div>
            </div>
        
        
        <div className='bg-blue-950 min-h-screen px-20 py-20'>

            {/* Section Top */}
            <div className='flex gap-20'>

                {/* Left Title */}
                <div className='flex-1'>
                    <h1 className="text-white text-7xl font-normal tracking-wider font-['Bebas_Neue']">
                        ABOUT ME
                    </h1>
                </div>

                {/* Right Content */}
                <div className='flex-1 space-y-6'>
                    <p className='text-white text-xl leading-relaxed'>
                        ดิฉันเป็นนักพัฒนาเว็บไซต์ฟรอนต์เอนด์ที่ทำงานอยู่ในกรุงเทพฯ 
                        กำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน 
                        มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
                    </p>

                    <p className='text-blue-200 leading-relaxed'>
                        ชอบให้ความสำคัญกับการเข้าถึง (accessibility) 
                        เมื่อพัฒนาเว็บไซต์ มีความกระตือรือร้นและอยากรู้ 
                        สนใจ React.js และการออกแบบเว็บที่ทันสมัย
                        เวลาว่างชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม
                    </p>

                    {/* Button + Icons */}
                    <div className='flex items-center gap-4 pt-4'>

                        <button className='bg-blue-200 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-300 transition'>
                            DOWNLOAD RESUME
                        </button>

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
            </div>

            {/* Image Section */}
            <div className='mt-16'>
                <img
                    src={profile2}
                    alt="about"
                    className='w-full h-[500px] object-cover rounded-3xl shadow-2xl'
                />
            </div>

        </div>
        </>
    )
}