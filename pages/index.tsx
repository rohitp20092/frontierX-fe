import type { NextPage } from 'next'
//Components
import Footer from '../components/layout/Footer'
import CenterLayout from '../components/layout/CenterLayout'
import Navbar from '../components/layout/NavBar'
import AccordionLayout from '../components/layout/AccordionLayout'

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <CenterLayout />
      <AccordionLayout />
      <Footer />
    </div>
  )
}

export default Home
