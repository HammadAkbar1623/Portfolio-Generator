import { createFileRoute } from '@tanstack/react-router'
import { useTypewriter } from 'react-simple-typewriter'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { RxAvatar } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRouter } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: RouteComponent,
})



function RouteComponent() {

 

  // Typewriter configuration
  const [text] = useTypewriter({
    words: [
      'Projects',
      'Expertise',
      'Experience',
    ],
    loop: true,
  })

  // AOS Initialization
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    Aos.refresh()
  }, [])


  const router = useRouter();
  const routeToSignUp = () => {
    router.navigate({ to: '/signup' })
  }

  const routeToSignIn = () => {
    router.navigate({ to: '/signin' })
  }

  return (
    <>

    <div className='w-full h-full customBlue'>

    

      <div className="area" data-aos="fade-in" data-aos-delay="600">


        <div className="flex flex-row pl-3 items-center w-full h-auto bg-blue-900 shadow-xl rounded-xl shadow-blue-950 py-4">
          <span className="text-xl sm:text-2xl inline-flex gap-1 text-white">
            Developed By <p className="font-bold underline text-yellow-300">Hammad</p>
          </span>
        </div>
        

        <div className='flex flex-col pt-32 items-center h-screen gap-2'>
          
          <span className='inline-flex gap-2.5 text-3xl sm:text-5xl font-semibold text-white'>Generate Your <h1 className='font-bold text-yellow-300'>PORTFOLIO</h1></span>

          <span className='text-lg flex sm:text-2xl font-semibold text-white gap-2'>Showcase Your <h1 className='inline-flex font-bold text-yellow-300'>{text}</h1> with one click</span>




          <div className="mt-8 flex sm:gap-24 items-center gap-10">
            {/* Sign Up Button */}
            <button
              onClick={routeToSignUp}
              className="
              cursor-pointer
      relative px-8 py-3 sm:px-6 sm:py-2
      text-lg sm:text-xl font-semibold
      text-yellow-100 bg-gradient-to-r from-yellow-500 to-orange-500
      rounded-lg shadow-md hover:shadow-2xl
      transform hover:scale-105 active:scale-95
      transition-all duration-300 ease-in-out
      focus:outline-none focus:ring-4 focus:ring-yellow-400
    "
              aria-label="Sign up"
            >
              <span className="relative z-10 flex items-center">
                Sign Up
              </span>
            </button>

            {/* Sign In Button */}
            <button
            onClick={routeToSignIn}
              className="
              cursor-pointer
      relative px-8 py-3 sm:px-6 sm:py-2
      text-lg sm:text-xl font-semibold text-white
      bg-gradient-to-r from-blue-500 to-blue-700
      rounded-lg shadow-lg hover:shadow-2xl
      transform hover:scale-105 active:scale-95
      transition-all duration-300 ease-in-out
      focus:outline-none focus:ring-4 focus:ring-blue-400
    "
              aria-label="Sign in"
            >
              <span className="relative z-10 flex items-center">
                Sign In
              </span>
            </button>
          </div>


          <footer className='absolute bottom-0 w-full py-4 flex items-center justify-center font-semibold text-2xl text-gray-900'>
                <div className="flex cursor-pointer">
                    <ul className="sm:flex sm:gap-5">
                        {/* Name Section (Non-Link) */}
                        <li className="flex items-center gap-2 group hover:scale-110 duration-300">
                            <RxAvatar className="text-white group-hover:text-yellow-300 transition-colors duration-300" />
                            <h1 className="text-lg text-white group-hover:text-yellow-300 transition-colors duration-300">
                                Hammad Akbar Khan
                            </h1>
                        </li>

                        {/* LinkedIn Link */}
                        <li className="group hover:scale-110 duration-300">
                            <a
                                href="https://www.linkedin.com/in/hammad-akbar-khan-107167283"
                                target="_blank"
                                className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-all duration-300"
                            >
                                <FaLinkedin className="text-white group-hover:text-yellow-300 transition-colors duration-300" />
                                <h1 className="text-lg text-white underline decoration-transparent group-hover:decoration-yellow-300 transition-all duration-300 group-hover:text-yellow-300">
                                    Hammad Akbar Khan
                                </h1>
                            </a>
                        </li>

                        {/* GitHub Link */}
                        <li className="group hover:scale-110 duration-300">
                            <a
                                href="https://github.com/HammadAkbar1623"
                                target="_blank"
                                className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-all duration-300"
                            >
                                <FaGithub className="text-white group-hover:text-yellow-300 transition-colors duration-300" />
                                <h1 className="text-lg text-white underline decoration-transparent group-hover:decoration-yellow-300 transition-all duration-300 group-hover:text-yellow-300">
                                    HammadAkbar1623
                                </h1>
                            </a>
                        </li>
                    </ul>
                </div>



            </footer>


        </div>
      </div>

      </div>

    </>
  )
}
