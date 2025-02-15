
import './App.css'
import { Button } from './Components/Button'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'

function App() {

  return (
    <>
      <Button variant="Primary" size='sm' onClick={()=>{}} text='Add content' startIcon={<PlusIcon size='lg'/>}/>
      <Button variant="Secondary" size='md' onClick={()=>{}} text='Share Brain'  startIcon={<ShareIcon size='lg'/> } />
    </>
  )
}

export default App
