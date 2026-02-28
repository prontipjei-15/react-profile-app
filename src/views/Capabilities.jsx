import { Link } from 'react-router-dom'

export default function Capabilities() {
    const skills = [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "FLUTTER",
        "DART",
        "IoT",
        "REACT",
        "DATABASE"
    ]

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

            {/* Main Content */}
            <div className='bg-blue-950 min-h-screen px-20 py-24'>
                {/* เส้นบน */}
                <div className='border-t border-blue-900 mb-16'></div>

                <div className='flex gap-20'>
                    {/* Left Title */}
                    <div className='flex-1'>
                        <h1 className="text-white text-7xl font-normal tracking-wider font-['Bebas_Neue']">
                            MY CAPABILITIES
                        </h1>
                    </div>

                    {/* Right Content */}
                    <div className='flex-1 space-y-8'>
                        <p className='text-blue-200 text-lg leading-relaxed'>
                            ดิฉันมองหาโอกาสในการเพิ่มทักษะใหม่ ๆ อยู่เสมอ 
                            ทั้งการพัฒนาฟรอนต์เอนด์ แบ็กเอนด์ 
                            การออกแบบ UX/UI และฐานข้อมูล
                        </p>

                        {/* Skills */}
                        <div className='flex flex-wrap gap-6'>
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className='px-8 py-3 rounded-full 
                                               border border-blue-700 
                                               text-white font-medium 
                                               hover:bg-blue-800 
                                               transition duration-300'
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* เส้นล่าง */}
                <div className='border-b border-blue-900 mt-20'></div>
            </div>
        </>
    )
}