
import { useState } from 'react'
import './App.css'
import { Button } from './Components/Button'
import { Card } from './Components/Card'
import { CreateContentModal } from './Components/CreateContentModal'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'
import { SideBar } from './Components/SideBar'

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  function onClose(){
    setModalOpen(false);
  }

  return (
    <>
      <CreateContentModal open={modalOpen} onClose={onClose} />
      
      <div className=''>
        <SideBar />
        <div className="p-4 flex flex-col gap-4 ml-72 min-h-screen bg-gray-200 border-2">
          <div className="flex justify-end gap-4">
            <Button variant="Primary" size='sm' onClick={() => { 
              setModalOpen(true)
            }} text='Add content' startIcon={<PlusIcon size='md' />} />
            <Button variant="Secondary" size='md' onClick={() => { }} text='Share Brain' startIcon={<ShareIcon size='md' />} />
          </div>


          <div className="flex gap-4">
            <Card link='https://x.com/nikyendukura/status/1890286162432126982' type='Twitter' title='Praboss' icon={<PlusIcon size='md' />} />

            <Card link='https://www.youtube.com/embed/PcZii0OWtAE' type='Youtube' title='Praboss' icon={<PlusIcon size='md' />} />
          </div>
        </div>
      </div>
      


    </>
  )
}

export default App
