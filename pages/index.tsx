import type { NextPage } from 'next';
import { useState } from 'react';
import ModalLayout from '../components//ModalLayout/ModalLayout'
import CookieModal from '../components/ModalBody/CookieModal';
import MessageModal from '../components/ModalBody/MessageModal';
import SubscribePopup from '../components/ModalBody/SubscribePopup';
import UserModal from '../components/ModalBody/UserModal';

const Home: NextPage = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [openCookie, setOpenCoolie] = useState(false)
  const [messageModal, setMessageModal] = useState(false)
  const [subscribe, setSubscribe] = useState(false)

  return (
    <>
      
      {isOpen &&
        <UserModal isOpen={isOpen} setIsOpen={setIsOpen} />
      }

      {/* accept cookies */}
      {openCookie &&
        <CookieModal isOpen={openCookie} setIsOpen={setOpenCoolie} />
      }

      {/* accept cookies */}
      {messageModal &&
        <MessageModal isOpen={messageModal} setIsOpen={setMessageModal} />
      }

      {/* Subscribe Popup */}
      {subscribe &&
        <SubscribePopup isOpen={subscribe} setIsOpen={setSubscribe} />
      }
      <div className='p-4 flex gap-5'>
        <button
          onClick={() => setIsOpen(true)}
          className='px-3 py-2 rounded-md
       bg-green-400 text-white
       font-semibold uppercase'>
          Open Popup !</button>

        <button
          onClick={() => setOpenCoolie(true)}
          className='px-3 py-2 rounded-md
       bg-blue-400 text-white
       font-semibold uppercase'>
          Accept Cookies !!</button>


        <button
          onClick={() => setMessageModal(true)}
          className='px-3 py-2 rounded-md
       bg-gray-400 text-white
       font-semibold uppercase'>
          Send Your Message !!</button>
        
        <button
          onClick={() => setSubscribe(true)}
          className='px-3 py-2 rounded-md
       bg-orange-400 text-white
       font-semibold uppercase'>
          Subscribe !!</button>

      </div>
    </>

  )
}

export default Home
