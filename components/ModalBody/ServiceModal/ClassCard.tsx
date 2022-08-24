import React, { Component } from 'react'

export default class ClassCard extends Component {
    render() {
        return (
            <div className='card p-5 
            border border-[#E6EEF8]
             bg-white rounded-2xl'>
                <div>
                    <h3 className='title'>Introduction Call</h3>
                </div>
                <div
                    className='flex
                    flex-col sm:flex-row
                    justify-center items-center gap-4 mt-3'>

                    <div className='w-full flex justify-center sm:justify-start'>
                        <img className='w-full max-h-[250px] sm:max-w-full
                        sm:max-h-[142px] rounded-md' src='/assets/images/classImg.png' alt='class img' />
                    </div>
                    <div className=''>
                        <div>
                            <p className='card_body py-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. sunt nostrud....</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h3 className='price_area'>
                                    <span className='price'>$120</span>
                                    /Person
                                </h3>
                            </div>
                            <div>
                                <button className='flex gap-2 items-center
                                 bg-[#224F9C] rounded-lg
                                 see_detail
                                 px-6 py-[9px]
                                 '>
                                    See Details
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M14.43 18.82C14.24 18.82 14.05 18.75 13.9 18.6C13.61 18.31 13.61 17.83 13.9 17.54L19.44 12L13.9 6.46C13.61 6.17 13.61 5.69 13.9 5.4C14.19 5.11 14.67 5.11 14.96 5.4L21.03 11.47C21.32 11.76 21.32 12.24 21.03 12.53L14.96 18.6C14.81 18.75 14.62 18.82 14.43 18.82Z" fill="white" />
                                            <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" fill="white" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
