import React, { useState } from 'react'

export default function Banner() {
    const [activeTab, setActiveTab] = useState('classes')
    return (
        <div className='banner_container relative'>
            <div className='service_banner'>
            </div>
            <div className='more_bg absolute top-0 w-full'>
            </div>
            <div className='main_content absolute top-0 w-full'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 items-center'>
                        <img className='border border-white 
                        rounded-full w-[52px] h-[52px]'
                            src='/assets/images/profile.png'
                            alt='profile img' />
                        <h3 className='profile_title'>Other Services by Mark</h3>
                    </div>
                    <div>
                        <button className='bg-[#F8F9FB] p-[10px] rounded-full'>
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
                 flex  max-w-[404px] justify-between' >
                    <button
                        onClick={() => setActiveTab("classes")}
                        className={`${activeTab === 'classes' ? 'active_tab' : ''} none_active`}>
                        Classes
                    </button>
                    <button
                        onClick={() => setActiveTab("experiences")}
                        className={`${activeTab === 'experiences' ? 'active_tab' : ''} none_active`}>

                        Experiences
                    </button>
                    <button
                        onClick={() => setActiveTab("primePacks")}
                        className={`${activeTab === 'primePacks' ? 'active_tab' : ''} none_active`}>

                        Prime Packs
                    </button>
                </div>
            </div>

        </div>
    )
}
