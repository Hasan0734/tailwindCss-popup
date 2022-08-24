import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper";

export default function SlotSlider() {
    const [slectDate, setSelectDate] = useState('16 May');
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <>
            <div>
                <label className='label_text'>Choose a slot for the session</label>
                <p className='sub_label'>India Standard Time (IST) <span className='text-blue-600'>Change</span></p>
                <div className='relative'>
                    <button
                        type='button'
                        ref={navigationPrevRef}
                        className='absolute -left-[2%] top-[43%] w-6 h-6
                             rounded-full bg-white
                             drop-shadow-[0px_3px_4px_rgba(192,167,167,0.25)]
                             z-20
                             '>
                        <ChevronLeftIcon width={20} />
                    </button>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation={true}
                        loop
                        modules={[Navigation]}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                           
                        }}
                        className="slot_slider"
                    >
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-3'>
                            <SwiperSlide>
                                <div
                                    onClick={() => setSelectDate('16 May')}
                                    className={`date_area ${slectDate === '16 May' ? 'bg-[#17A966] text-white'
                                        : 'bg-[#F9F9F9] text-black'}
                                         text-white px-9 py-3 cursor-pointer`}>
                                    <h6 className='date_text'>Today</h6>
                                    <h2 className='date py-3'>16</h2>
                                    <h6 className='date_text'>May</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    onClick={() => setSelectDate('17 May')}
                                    className={`date_area ${slectDate === '17 May' ? 'bg-[#17A966] text-white'
                                        : 'bg-[#F9F9F9] text-black'}
                                         text-white px-9 py-3 cursor-pointer`}>
                                    <h6 className='date_text'>Today</h6>
                                    <h2 className='date py-3'>17</h2>
                                    <h6 className='date_text'>May</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    onClick={() => setSelectDate('18 May')}
                                    className={`date_area ${slectDate === '18 May' ? 'bg-[#17A966] text-white'
                                        : 'bg-[#F9F9F9] text-black'}
                                          px-9 py-3 cursor-pointer`}>
                                    <h6 className='date_text'>Today</h6>
                                    <h2 className='date py-3'>18</h2>
                                    <h6 className='date_text'>May</h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    onClick={() => setSelectDate('19 May')}
                                    className={`date_area ${slectDate === '19 May' ? 'bg-[#17A966]  text-white '
                                        : 'bg-[#F9F9F9]  text-black '}
                                        px-9 py-3 cursor-pointer`}>
                                    <h6 className='date_text'>Today</h6>
                                    <h2 className='date py-3'>19</h2>
                                    <h6 className='date_text'>May</h6>
                                </div>
                            </SwiperSlide>
                        </div>


                    </Swiper>


                    <button
                        ref={navigationNextRef}
                        type="button" className='absolute -right-[2%] top-[43%] w-6 h-6
                             rounded-full bg-white z-20
                             drop-shadow-[0px_3px_4px_rgba(192,167,167,0.25)]
                             '><ChevronRightIcon width={20} />
                    </button>
                </div>
            </div>
        </>
    )
}
