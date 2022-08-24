import React from 'react'
import ModalLayout from '../../ModalLayout/ModalLayout'
import Banner from './Banner'

export default function ServiceModal({ isOpen, setIsOpen }:
    { isOpen: boolean, setIsOpen: any }) {
    return (
        <>
            <ModalLayout style={{
                size: 1196, center: '',
                boxShadow: 'drop-shadow-[0_4px_20px_rgba(155,155,155,0.25)]',
                background: 'bg-white',
                rounded: 'rounded-2xl'
            }}
                isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='p-[22px] service_popup</div>'>
                    <div>
                        <Banner/>
                    </div>
                </div>
            </ModalLayout>
        </>
    )
}
