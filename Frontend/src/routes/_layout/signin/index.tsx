import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { RxAvatar } from 'react-icons/rx';
import { FaLinkedin, FaGithub, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useRouter } from '@tanstack/react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
export const Route = createFileRoute('/_layout/signin/')({
  component: RouteComponent,
});

const signinSchema = z.object({
  email: z.string().nonempty('Email is required'),
  password: z.string().min(8, 'Please enter password'),
})



function RouteComponent() {
  const [showPassword, setPassword] = useState(false);
  const router = useRouter();

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

 

  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm<{ email: string; password: string }>({
    resolver: zodResolver(signinSchema),
})

 async function onSubmit( data: { email: string; password: string } ) {
  try {
    const response = await axios.post('http://localhost:8000/api/v1/users/signin', data);
    localStorage.setItem('token', response.data.token); // Store token
    alert("Login successful!");
    router.navigate({ to: "/home" }); // Redirect to home page
} catch (error: any) {
    alert(error.response?.data?.message || "Login failed");
}
}


  return (
    <>
    <div className='min-h-screen flex pt-10 flex-col customBlue'>

    
      <div className="flex items-center justify-center h-screen" data-aos="zoom-in" data-aos-delay="600">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-96 border border-white/20">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Sign In</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {/* Email */}
            <div>
            <FaUser className="absolute left-4 sm:text-2xl text-xl top-3 text-white" />
              <label className="text-white font-semibold">Email</label>
              <input
                {...register("email")}
                name = "email"
                type="email"
                className="w-full p-3 mt-1 text-lg rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
              {errors.email && <p className='text-yellow-300'>{errors.email.message as string}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="text-white font-semibold">Password</label>
              <input
                  {...register("password")}
                  name='password'
                type={showPassword ? 'text' : 'password'}
                className="w-full p-3 mt-1 text-lg rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
              {errors.password && <p className='text-yellow-300'>{errors.password.message as string}</p>}

              {/* Eye Icon Button */}
              <button
                className="absolute right-4 top-14 text-xl transform -translate-y-1/2 text-white cursor-pointer"
                type="button"
                onClick={() => setPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>

            </div>


            {/* Sign Up Button */}
            <button type='submit' className="cursor-pointer w-full py-3 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg">
              Login
            </button>

            {/* Already have an account? */}
            <p className="text-center text-gray-300 text-sm">
              Don't have an account? <Link to='/signup' className="text-blue-400 hover:underline">Sign In</Link>
            </p>
          </form>
        </div>
      </div>


      <footer className='relative w-full py-4 flex items-center justify-center font-semibold text-2xl'>
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
    </>
  )
}
