import React from 'react'
import ModalLayout from '../../ModalLayout/ModalLayout'
import AddCart from './AddCart'
import ClassInformation from './ClassInformation'
import Requirements from './Requirements'

export default function BookDemo({ isOpen, setIsOpen }:
    { isOpen: boolean, setIsOpen: any }) {
    return (
        <>
            <ModalLayout style={{
                size: 1164, center: '',
                boxShadow: 'drop-shadow-[0_4px_20px_rgba(155,155,155,0.25)]',
                background: 'bg-white',
                rounded: 'rounded-2xl'
            }}
                isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='pt-[29px] pb-16 px-[32px] subscribe_popup</div>'>
                    <div>
                        <div className='grid grid-cols-2 gap-4'>
                            <ClassInformation />
                            <AddCart/>
                        </div>
                        <div className='mt-9 '>
                            <Requirements/>
                        </div>
                    </div>
                </div>
            </ModalLayout>
        </>
    )
}
