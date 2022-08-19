import type { NextPage } from 'next';
import { useState } from 'react';
import ModalLayout from '../components//ModalLayout/ModalLayout'
import CookieModal from '../components/ModalBody/CookieModal';
import UserModal from '../components/ModalBody/UserModal';

const Home: NextPage = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [openCookie, setOpenCoolie] = useState(false)

  return (
    <>
      {isOpen &&
        <ModalLayout style={{ size: 433, center: '' }}
          isOpen={isOpen} setIsOpen={setIsOpen}>
          <UserModal />
        </ModalLayout>}
      
      {/* accept cookies */}
      {openCookie &&
        <ModalLayout style={{ size: 269 , center: 'items-center' }}
          isOpen={openCookie} setIsOpen={setOpenCoolie}>
          <CookieModal/>
        </ModalLayout>}

      <div className='p-4 flex gap-5'>
        <button
          onClick={() => setIsOpen(true)}
          className='px-3 py-2 rounded-md
       bg-green-400 text-white
       font-semibold uppercase'>Open Popup !</button>

        <button
          onClick={() => setOpenCoolie(true)}
          className='px-3 py-2 rounded-md
       bg-green-400 text-white
       font-semibold uppercase'>Accept Cookies!</button>

      </div>
    </>

  )
}

export default Home
