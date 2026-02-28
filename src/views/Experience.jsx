import { Link } from 'react-router-dom'

export default function Experience() {
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
                            MY EXPERIENCE
                        </h1>
                    </div>

                    {/* Right Content */}
                    <div className='flex-1 space-y-14'>
                        {/* Job 1 */}
                        <div>
                            <div className='flex justify-between items-start'>
                                <h2 className='text-white text-2xl font-semibold'>
                                    Freelance Developer
                                </h2>
                                <span className='text-blue-300'>
                                    Nov 2023 — Present
                                </span>
                            </div>

                            <p className='text-blue-200 mt-4 leading-relaxed'>
                                พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้ React.js
                                ทำงานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ที่ดีให้กับผู้ใช้
                                ปรับปรุงประสิทธิภาพเว็บไซต์และดูแลโค้ดภายในองค์กร
                            </p>
                        </div>

                        {/* Job 2 */}
                        <div>
                            <div className='flex justify-between items-start'>
                                <h2 className='text-white text-2xl font-semibold'>
                                    Front-End Intern
                                </h2>
                                <span className='text-blue-300'>
                                    Sep 2023 — Nov 2026
                                </span>
                            </div>

                            <p className='text-blue-200 mt-4 leading-relaxed'>
                                พัฒนาเว็บไซต์โดยใช้ HTML, CSS และ JavaScript
                                ปรับปรุงการเข้าถึง (Accessibility) ตามมาตรฐาน WCAG
                                และทำงานร่วมกับทีม Backend เพื่อเชื่อมต่อ API
                            </p>
                        </div>
                    </div>
                </div>

                {/* เส้นล่าง */}
                <div className='border-b border-blue-900 mt-20'></div>

                {/* Footer */}
                <div className='text-center text-blue-300 mt-10'>
                    © 2026 Created by SAU-Dev-Team
                </div>
            </div>
        </>
    )
}