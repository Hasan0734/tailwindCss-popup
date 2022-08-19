import type { NextPage } from 'next';
import { useState } from 'react';
import ModalLayout from '../components//ModalLayout/ModalLayout'
import UserModal from '../components/UserModal';

const Home: NextPage = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {isOpen &&
        <ModalLayout isOpen={isOpen} setIsOpen={setIsOpen}>
          <UserModal />
        </ModalLayout>}

      <div className='p-4'>
        <button
          onClick={() => setIsOpen(true)}
          className='px-3 py-2 rounded-md
       bg-green-400 text-white
       font-semibold uppercase'>Open Popup !</button>

      </div>
    </>

  )
}

export default Home
