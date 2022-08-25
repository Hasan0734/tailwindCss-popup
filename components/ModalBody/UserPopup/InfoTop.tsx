import React from 'react'

export default function InfoTop() {
    return (
        <>
            <div className='flex gap-5 
            flex-col items-center 
            xs:flex-row xs:items-start'>
                <div>
                    <img className='w-[84px] h-[80px] 
                    rounded-full user_img' src='/assets/images/userImg.png' />
                </div>
                <div>
                    <h2 className='user_name'>Hello!</h2>
                    <p className='sub_title'>Thanks for getting in touch.</p>
                    <p className='sub_title'>Let’s Personalize your experience</p>
                    <h4 className='question_title mt-3'>
                        Or just ask me a question
                    </h4>
                </div>
            </div>
        </>
    )
}
