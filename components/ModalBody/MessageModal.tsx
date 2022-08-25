import React from 'react'
import ModalLayout from '../ModalLayout/ModalLayout'

export default function MessageModal({ isOpen, setIsOpen }: {isOpen: boolean, setIsOpen:any}) {
    return (
        <ModalLayout style={{
            size: 433, center: 'items-start lg:items-center',
            boxShadow: 'drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]',
            background: 'bg-white',
            rounded: 'rounded'
        }}
            isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className='pt-[58px] pb-[32px] pl-[47px] pr-[36px]'>
        
            <div className='flex gap-5 flex-col items-center xs:flex-row sm:items-start'>
                <div>
                    <img className='w-[84px] h-[80px] rounded-full user_img' src='/assets/images/userImg.png' />
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
            {/* horizantal line */}
            <div className='h-[1px] bg-[#AEAEAE] mt-5 mb-4'></div>

            <form className='message_form'>
                <label className='label_title'>
                    Ask me anything you want
                </label>
                <textarea
                    defaultValue={'Hi! Would it be possible to have an extended virtual tour with some extra stories about what life is currently like in your city?'}
                    className='w-full outline-none mt-4 resize-y'
                ></textarea>
                <div className='mt-6 px-3'>
                    <button className='send_message w-full py-2'>
                        Send Your Message
                    </button>
                </div>
            </form>

            </div>
        </ModalLayout>
    )
}
