import { useEffect, useState } from 'react'
import './App.css'
import Bottles from './Bottles'
import { getCartls } from './utilities/Ls'

function App() {
  const [bottles, setBottles] = useState([])
  const [newcart,setnewCart] =useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBottles(data))
  }, [])
  const savedcart = [];
  useEffect(() => {
    if (bottles.length > 0) {
      const bottlesfromls = getCartls()
      for (const lsbottleid of bottlesfromls) {
        const bottle = bottles.find(bottle => bottle.id === lsbottleid)
        if (bottle) {
          savedcart.push(bottle)
        }
      }
      setnewCart(savedcart)
    }
  }, [bottles])
  return (
    <>
      <div className='container mx-auto'>
        <Bottles newcart={newcart} bottles={bottles}></Bottles>
      </div>
    </>
  )
}

export default App
