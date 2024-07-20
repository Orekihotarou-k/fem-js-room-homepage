import { useState } from 'react'
import data from '../data.json'


export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
 
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const currentItem = data[currentIndex]


  return (
    <main className="font-league text-sm  overflow-hidden">
      <section className='relative grid lg:grid-cols-7'>
        <nav className='w-full absolute left-[10%] sm:left-16 top-8 flex items-center gap-14 sm:top-4'>
          <button 
            className='mr-10 sm:hidden'
            onClick={toggleMenu}>
              <img src="/images/icon-hamburger.svg" alt="menu toggle" />
          </button>

          <a href="#">
            <img
              src="/images/logo.svg"
              alt="logo"
            />
          </a>

          <ul className={`bg-white sm:bg-transparent ${menuOpen ? 'flex' : 'hidden'} w-full sm:text-white items-center gap-10 absolute left-[-2.5rem] p-8 sm:relative sm:flex`}>
            <img 
              src="/images/icon-close.svg" 
              alt="close navigation menu"
              className='sm:hidden'
              onClick={toggleMenu} />
            <div className='flex gap-6 sm:gap-10'>
              <li><a href="#">home</a></li>
              <li><a href="#">shop</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">contact</a></li>
            </div>
          </ul>
        </nav>

        <div className='lg:col-span-4'>
          <img 
            src={currentItem.imgURL} 
            className='w-full h-full object-cover' 
            alt={currentItem.title} />
        </div>

        <div className='lg:p-24 md:p-14 px-8 py-14 relative lg:col-span-3'>
          <h1 className='lg:text-5xl md:text-4xl text-3xl text-very-dark-gray lg:w-[30rem] font-bold leading-11'>{currentItem.title}</h1>
          <p className='lg:w-[23rem] mt-6 text-dark-gray leading-normal'>{currentItem.content}</p>
          <button
          className='mt-6 text-lg font-bold text-very-dark-gray font-league tracking-[.8rem] flex items-center gap-8 cursor-pointer'>SHOP NOW <img src="/images/icon-arrow.svg" alt="" /></button>

          <div className='absolute sm:left-0 lg:bottom-0 lg:top-[unset] right-0 -top-[4.5rem]'>
            <button 
              onClick={handlePrev}
              aria-label='previos home text' 
              className='bg-black p-6 px-[1.85rem] hover:bg-very-dark-gray'>
                <img src="/images/icon-angle-left.svg" alt="" />
            </button>

            <button 
              onClick={handleNext}
              aria-label='next home text' 
              className='bg-black p-6 px-[1.85rem] hover:bg-very-dark-gray'>
                <img src="/images/icon-angle-right.svg" alt="" />
            </button>
          </div>
        </div>

        
      </section>

      <section className=' mx-auto w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-3 w-full'>
          <div>
            <img
              src="/images/image-about-dark.jpg"
              alt="" 
              className='w-full h-64 object-cover'/>
          </div>

          <div className='px-8 lg:px-12 py-14 lg:pb-0'>
            <h2 className='text-very-dark-gray text-lg  mb-4 font-bold tracking-[.5rem]'>ABOUT OUR FURNITURE</h2>
            <p className='leading-normal text-dark-gray'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
          </div>
          
          <div>
            <img
              src="/images/image-about-light.jpg"
              alt=""
              className='w-full h-64 object-cover' />
          </div>
        </div>
      </section>
    </main>
  )
}