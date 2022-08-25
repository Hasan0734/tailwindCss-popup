import React, { useState } from 'react'

export default function Banner({ setIsOpen }: { setIsOpen: any }) {

    const [activeTab, setActiveTab] = useState('classes')
    return (
        <div className='banner_container relative h-[320px] xs:h-[190px]'>
            <div className='service_banner  h-[320px] xs:h-[190px]'>
            </div>
            <div className='more_bg absolute top-0 w-full h-[320px] xs:h-[190px]'>
            </div>
            <div className='main_content absolute top-0 w-full h-[320px] xs:h-[190px] px-[15] py-[15] xs:px-[28px] xs:py-[20px]'>
                <div className='flex xs:hidden justify-end'>
                    <button onClick={() => setIsOpen(setIsOpen)} className='bg-[#F8F9FB] p-[10px] rounded-full'>
                        <svg className="w-6 h-6 border-[1.5px] 
                            border-[#BFCEE0] rounded-full p-1 text-[#BFCEE0]"
                            fill="none"
                            stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className='block xs:flex justify-between items-center'>
                    <div className='flex gap-3 xs:gap-5 items-center'>
                        <img className='border border-white 
                        rounded-full w-[52px] h-[52px]'
                            src='/assets/images/profile.png'
                            alt='profile img' />
                        <h3 className='profile_title
                         text-[17px] xs:text-[21px] sm:text-[28px]'>
                            Other Services by Mark</h3>
                    </div>
                    <div className='hidden xs:block'>
                        <button
                            onClick={() => setIsOpen(setIsOpen)}
                            className='bg-[#F8F9FB] p-[10px] rounded-full'>
                            <svg className="w-6 h-6 border-[1.5px] 
                            border-[#BFCEE0] rounded-full p-1 text-[#BFCEE0]" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='tab p-2 mt-6
                 block xs:flex rounded-md xs:rounded-full max-w-[404px] justify-between' >
                    <button
                        onClick={() => setActiveTab("classes")}
                        className={`${activeTab === 'classes' ? 'active_tab' : ''} 
                        none_active w-full xs:w-auto`}>
                        Classes
                    </button>
                    <button
                        onClick={() => setActiveTab("experiences")}
                        className={`${activeTab === 'experiences' ? 'active_tab' : ''} 
                        none_active w-full xs:w-auto`}>

                        Experiences
                    </button>
                    <button
                        onClick={() => setActiveTab("primePacks")}
                        className={`${activeTab === 'primePacks' ? 'active_tab' : ''} 
                        none_active w-full xs:w-auto`}>

                        Prime Packs
                    </button>
                </div>
            </div>


        </div>
    )
}
