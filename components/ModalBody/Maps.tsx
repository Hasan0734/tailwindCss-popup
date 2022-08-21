import { ChevronRightIcon } from '@heroicons/react/solid'
import React from 'react'
import ModalLayout from '../ModalLayout/ModalLayout'

export default function Maps({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) {
    return (
        <ModalLayout style={{
            size: 638, center: 'items-center',
            boxShadow: '',
            background: 'bg-white',
            rounded: 'rounded-[5px]'
        }}
            isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className='px-[37px] py-[38px]'>
                <div className='maps_area'>
                    <h1 className='title pl-20'>Where you&apos;ll be</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 mt-16 gap-6'>
                        <div>
                            <h2 className='content_title'>Where you’ll be</h2>

                            <div className='mt-6'>
                                <h2 className='sub_title'>Jaisamand, Rajasthan, India</h2>
                                <p className='content_text mt-5'>
                                    Jaisamand Lake is the largest man made lake is
                                    Asia and the second largest in the World. The villa
                                    is located on an island and is a 3 km boat ride to...
                                </p>
                                <div className='flex gap-1 items-center'>
                                    <p className='underline read_more'>read more</p>
                                    <ChevronRightIcon width={23} />
                                </div>
                            </div>
                            <div className='mt-6'>
                                <h2 className='sub_title'>Getting around</h2>
                                <p className='content_text mt-5'>
                                    Secured Parking available at the Jaisamand Dam.
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className=''>
                                <div className='bg-white p-2 shadow-lg shadow-black/25 relative rounded'>
                                    <p className='tool_tip'>Exact location provided after booking.</p>
                                    <div className='polygon absolute'></div>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <div className="bg-[#D9076533] p-2 rounded-full h-10 w-10 flex justify-center items-center">
                                        <div className='bg-[#D90765] px-[6px] py-[7px] rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={12} viewBox="0 0 14 12" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.14103 0.309489C6.38245 0.109782 6.68998 0 7.00802 0C7.32605 0 7.63358 0.109782 7.875 0.309489L12.094 3.79718L13.7501 5.07536C13.8184 5.12808 13.8753 5.19325 13.9174 5.26717C13.9596 5.34108 13.9863 5.42229 13.9959 5.50614C14.0056 5.59 13.998 5.67487 13.9737 5.75591C13.9493 5.83694 13.9086 5.91256 13.854 5.97843C13.7993 6.04431 13.7318 6.09916 13.6551 6.13984C13.5785 6.18053 13.4943 6.20626 13.4074 6.21557C13.3204 6.22487 13.2325 6.21757 13.1484 6.19407C13.0644 6.17058 12.986 6.13135 12.9177 6.07863L12.3351 5.62902V10.7154C12.3351 11.0561 12.1948 11.3828 11.945 11.6237C11.6953 11.8647 11.3565 12 11.0033 12H8.33978V8.7885C8.33978 8.4478 8.19947 8.12106 7.94972 7.88015C7.69996 7.63924 7.36122 7.5039 7.00802 7.5039C6.65481 7.5039 6.31607 7.63924 6.06631 7.88015C5.81656 8.12106 5.67625 8.4478 5.67625 8.7885V12H3.01271C2.6595 12 2.32076 11.8647 2.071 11.6237C1.82125 11.3828 1.68094 11.0561 1.68094 10.7154V5.62838L1.09829 6.07799C1.03046 6.13386 0.951682 6.17601 0.866636 6.20195C0.781591 6.22789 0.69201 6.23708 0.603211 6.22899C0.514411 6.22089 0.428204 6.19566 0.349705 6.15481C0.271206 6.11396 0.202016 6.05831 0.146241 5.99117C0.090467 5.92403 0.0492454 5.84676 0.0250233 5.76396C0.000801246 5.68116 -0.00592752 5.5945 0.00523634 5.50914C0.0164002 5.42378 0.0452291 5.34146 0.090012 5.26705C0.134795 5.19265 0.194619 5.12768 0.265933 5.076L1.92199 3.79782L6.14103 0.309489Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalLayout>
    )
}
