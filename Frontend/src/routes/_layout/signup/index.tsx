import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { RxAvatar } from "react-icons/rx";
import { FaLinkedin, FaGithub, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useRouter } from '@tanstack/react-router'
import { useAuth } from '../../AuthContext'

export const Route = createFileRoute('/_layout/signup/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { login } = useAuth()

    const [showPassword, setPassword] = useState(false)

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

    // Zod Validation Schema
    const signupSchema = z.object({
        name: z.string().min(3, 'Name must be at least 3 characters long'),
        email: z.string().email('Invalid email address'),
        password: z.string().min(8, 'Password must be at least 8 characters long'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signupSchema),
    })

    const router = useRouter();
    function onSubmit(data: any) {
    login(data.email);
    router.navigate({ to: "/home" });
  }

    

    return (
        <>
            <div className="flex items-center justify-center h-screen" data-aos="zoom-in" data-aos-delay="600">
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-96 border border-white/20">
                    <h2 className="text-2xl font-bold text-white text-center mb-6">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        {/* Full Name */}
                        <div>
                            <label className="text-white font-semibold">Full Name</label>
                            <FaUser className="absolute left-4 sm:text-2xl text-xl top-3 text-white" />
                            <input
                                {...register('name')}
                                type="text"
                                className="w-full p-3 mt-1 text-lg rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your full name"
                            />
                            {errors.name && <p className='text-yellow-300 text-sm mt-1'>{errors.name.message as string}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-white font-semibold">Email</label>
                            <input
                                {...register('email')}
                                type="email"
                                className="w-full p-3 mt-1 text-lg rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className='text-yellow-300 text-sm mt-1'>{errors.email.message as string}</p>}
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label className="text-white font-semibold">Password</label>
                            <input
                                {...register('password')}
                                type={showPassword ? 'text' : 'password'}
                                className="w-full p-3 mt-1 text-lg rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your password"
                            />
                            {/* Eye Icon Button */}
                            <button
                                className="absolute right-4 top-14 text-xl transform -translate-y-1/2 text-white cursor-pointer"
                                type="button"
                                onClick={() => setPassword(!showPassword)}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>

                            {errors.password && <p className="text-yellow-300 text-sm mt-1">{errors.password.message as string}</p>}
                        </div>


                        {/* Sign Up Button */}
                        <button type='submit' className="cursor-pointer w-full py-3 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg">
                            Sign Up
                        </button>

                        {/* Already have an account? */}
                        <p className="text-center text-gray-300 text-sm">
                            Already have an account? <Link to='/signin' className="text-blue-400 hover:underline">Sign In</Link>
                        </p>
                    </form>
                </div>
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
        </>
    )
}
