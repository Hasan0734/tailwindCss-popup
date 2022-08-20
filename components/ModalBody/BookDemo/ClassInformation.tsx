import React from 'react'

export default function ClassInformation() {
    return (
        <div className='col-span-2 md:col-span-1 class_info'>
            <div>
                <img className='rounded-md' src='/assets/images/class-img.png' alt='class photo' />
            </div>
            <div className='mt-6'>
                <h3 className='title'>Output Expected</h3>
                <p className='desc_text mt-2'>Kathak dance online classes will introduce you to the key terms, mudras, and eight-eye glances of Kathak dance</p>
            </div>

            <div className='mt-6'>
                <h3 className='title'>Trial Session Details</h3>
                <h4 className='sub_title mt-2'>Duration : 60 Minutes</h4>

                <div className='mt-6'>
                    {/* step one */}
                    <div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col items-center'>
                                <div>
                                    <div className="h-4 w-4 bg-[#E51075] rounded-full"></div>
                                </div>
                                <div className='my-[1px] w-1 h-full bg-[#E51075]'>
                                </div>
                            </div>
                            <div className='pb-3'>
                                <h3 className='sub_title'>Introduction</h3>
                                <h4 className="sub_title_2 mt-1">10 Minutes</h4>
                                <p className='body mt-2'>Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce condimentum. Nulla orci congue praesent nullam</p>
                            </div>
                        </div>
                    </div>
                    {/* step tow */}
                    <div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col items-center'>
                                <div>
                                    <div className="h-4 w-4 bg-[#E51075] rounded-full"></div>
                                </div>
                                <div className='my-[1px] w-1 h-full bg-[#E51075]'>
                                </div>
                            </div>
                            <div className='pb-3'>
                                <h3 className='sub_title'>Write and Deliver an Introductory Speech</h3>
                                <h4 className="sub_title_2 mt-1">30 Minutes</h4>
                                <p className='body mt-2'>Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce condimentum. Nulla orci congue praesent nullam</p>
                            </div>
                        </div>
                    </div>
                    {/* step three */}
                    <div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col items-center'>
                                <div>
                                    <div className="h-4 w-4 bg-[#E51075] rounded-full"></div>
                                </div>
                                <div className='my-[1px] w-1 h-full bg-[#E51075]'>
                                </div>
                            </div>
                            <div className='pb-3'>
                                <h3 className='sub_title'>Reflection</h3>
                                <h4 className="sub_title_2 mt-1">10 Minutes</h4>
                                <p className='body mt-2'>Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce condimentum. Nulla orci congue praesent nullam</p>
                            </div>
                        </div>
                    </div>
                    {/* step three */}
                    <div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col items-center'>
                                <div>
                                    <div className="h-4 w-4 bg-[#E51075] rounded-full"></div>
                                </div>
                                {/* <div className='my-[1px] w-1 h-full bg-[#E51075]'>
                                </div> */}
                            </div>
                            <div className='pb-3'>
                                <h3 className='sub_title'>Parent Interaction</h3>
                                <h4 className="sub_title_2 mt-1">10 Minutes</h4>
                                <p className='body mt-2'>Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce condimentum. Nulla orci congue praesent nullam</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
