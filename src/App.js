
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <div className='offer-section'>
        <p> <a href="/#">Get started With 20% off your first box,<span>click to redeem</span></a> </p>
      </div>

      <ChakraProvider>
        <Header></Header>
      </ChakraProvider>



    </div>
  )
}

export default App
