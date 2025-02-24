import { createFileRoute } from '@tanstack/react-router'
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import ColorPallete from '../../../ColorPallete';
import { useRouter } from '@tanstack/react-router';
export const Route = createFileRoute('/_layout/home/')({
    component: Home,
})



function Home() {
    const router = useRouter()
    const routeToPortfolio = () => {
        router.navigate({to: '/Portfolio'})
    }

    const [services, setServices] = useState([{ id: 1, name: "", about: "" }]);
    const [skills, setSkills] = useState([{ id: 1, name: "" }]);
    const [projects, setProjects] = useState([{ id: 1, title: "", about: "", link: "" }])

    // Function to add a new service field
    const addService = () => {
        setServices([...services, { id: services.length + 1, name: "", about: "" }]);
    };

    const addSoftSkill = () => {
        setSkills([...skills, { id: skills.length + 1, name: "" }]);
    };

    const addProjects = () => {
        setProjects([...projects, { id: projects.length + 1, title: "", about: "", link: "" }])
    }

    


    return (
        <>
            <div className='w-full min-h-screen customBlue'>

                {/* Heading  */}
                <div className="flex justify-center items-center min-h-[200px] gap-2 pt-5">
                    <span className="text-2xl sm:text-4xl text-white font-bold">Let's create your</span>
                    <h1 className="text-2xl sm:text-4xl font-bold text-amber-300 relative after:absolute after:left-0 after:bottom-0 after:h-1 cursor-pointer after:w-full after:bg-amber-300 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                        Portfolio
                    </h1>
                </div>
                {/* Basic Info  */}
                <div className="flex justify-center">
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl shadow-gray-800 w-full max-w-md mx-auto sm:ml-7 mb-5">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl text-amber-400 font-bold">1.</span>
                            <h1 className="text-2xl text-white font-semibold">Basic Info</h1>
                        </div>
                        {/* Input Section  */}
                        <div className="mt-4">
                            <form  action="">
                                {/* Name */}
                                <label className="text-lg text-gray-300 block mb-1" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                                {/* Role */}
                                <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="role">
                                    Role
                                </label>
                                <input
                                    id="role"
                                    type="text"
                                    name="role"
                                    placeholder="(e.g full stack developer)"
                                    className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                                {/* About me */}
                                <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="about">
                                    About me
                                </label>
                                <textarea
                                    id="about"
                                    placeholder="I'm an experienced full stack developer with skills..."
                                    className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                ></textarea>
                                {/* Languages */}
                                <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="languages">
                                    Languages
                                </label>
                                <input
                                    id="languages"
                                    type="text"
                                    name="languages"
                                    placeholder="(e.g Urdu, English etc)"
                                    className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                                {/* Profile Pic */}
                                <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="profile-pic">
                                    Profile Pic
                                </label>
                                <input
                                    id="profile-pic"
                                    className="w-full cursor-pointer z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    type="file"
                                />
                            </form>
                        </div>
                    </div>
                </div>
                {/* Contact Info */}
                <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl shadow-gray-800 w-full max-w-md sm:mr-7 mb-5 mx-auto">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl text-amber-400 font-bold">2.</span>
                        <h1 className="text-2xl text-white font-semibold">Contact Info</h1>
                    </div>
                    {/* Input Section  */}
                    <div className="mt-4">
                        <form  action="">


                            {/* Email */}
                            <label className="text-lg text-gray-300 block mb-1" htmlFor="name">
                                Email
                            </label>
                            <input

                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            {/* Phone */}
                            <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="name">
                                Phone
                            </label>
                            <input
                                id="phone"
                                type="number"
                                name="phone"
                                placeholder="+923334455"
                                className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            {/* Residence */}
                            <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="name">
                                Residence
                            </label>
                            <input placeholder='Enter your Residence' className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" type="text" name="" id="" />

                            {/* Social Links */}
                            <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="name">
                                Linkedin
                            </label>
                            <input
                                id="linkedin"
                                type="url"
                                name="linkedin"
                                placeholder="Linkedin link"
                                className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="name">
                                Github
                            </label>
                            <input

                                id="linkedin"
                                type="url"
                                name="linkedin"
                                placeholder="Github link"
                                className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                        </form>
                    </div>
                </div>
                {/* Education */}
                <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl shadow-gray-800 w-full max-w-md sm:ml-7 mb-5 mx-auto">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl text-amber-400 font-bold">3.</span>
                        <h1 className="text-2xl text-white font-semibold">Education</h1>
                    </div>
                    {/* Input Section  */}
                    <div className="mt-4">
                        <form  action="">
                            {/* University Name */}
                            <label className="text-lg text-gray-300 block mb-1" htmlFor="university">
                                University Name
                            </label>
                            <input
                                id="university"
                                type="text"
                                name="university"
                                placeholder="Enter your university name"
                                className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            {/* Batch Number */}
                            <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="batch">
                                Batch Number
                            </label>
                            <input
                                id="batch"
                                type="number"
                                name="batch"
                                placeholder="Enter your batch (e.g., 2020-2024)"
                                className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            {/* Field of study */}
                            <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="batch">
                                Field of Study
                            </label>
                            <input
                                id="field"
                                type="text"
                                name="field"
                                placeholder="(e.g Bachelors of Computer Science)"
                                className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            {/* GPA */}
                            <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="gpa">
                                GPA
                            </label>
                            <input
                                id="gpa"
                                type="number"
                                name="gpa"
                                placeholder="Enter your GPA (e.g., 3.8/4.0)"
                                className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            {/* College Name */}
                            <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="college">
                                College Name
                            </label>
                            <input
                                id="college"
                                type="text"
                                name="college"
                                placeholder="Enter your college name"
                                className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            {/* College Marks */}
                            <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="college-marks">
                                College Marks / Percentage
                            </label>
                            <input
                                id="college-marks"
                                type="number"
                                name="collegeMarks"
                                placeholder="Enter your marks (e.g., 85% or 900/1100)"
                                className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            {/* Additional Information */}
                            <label className="text-lg mt-4 text-gray-300 block mb-1" htmlFor="additional-info">
                                Additional Information (Optional)
                            </label>
                            <textarea
                                id="additional-info"
                                placeholder="Any extra details about your education..."
                                className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            ></textarea>
                        </form>
                    </div>
                </div>
                {/* Services */}
                <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl shadow-gray-800 w-full max-w-md sm:mr-7 mb-5 mx-auto">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl text-amber-400 font-bold">4.</span>
                        <h1 className="text-2xl text-white font-semibold">Services</h1>
                    </div>
                    {/* Input Section  */}
                    <div className="mt-4">
                        <form>
                            {services.map((service, index) => (
                                <div key={service.id} className="mb-4">
                                    {/* Service Name */}
                                    <label className="text-lg text-gray-300 block mb-1">
                                        Service {index + 1}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="(e.g MERN Stack)"
                                        className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    />

                                    {/* About the Service */}
                                    <label className="text-lg mt-2 text-gray-300 block mb-1">
                                        About the service
                                    </label>
                                    <textarea
                                        placeholder="I develop user-friendly..."
                                        className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    ></textarea>
                                </div>
                            ))}

                            {/* Add More Services Button */}
                            <span
                                className="text-white flex justify-center items-center mt-4 text-4xl cursor-pointer"
                                onClick={addService}
                            >
                                <CiCirclePlus />
                            </span>
                        </form>
                    </div>
                </div>


                <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl shadow-gray-800 w-full max-w-md sm:ml-7 mb-5  mx-auto">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl text-amber-400 font-bold">5.</span>
                        <h1 className="text-2xl text-white font-semibold">Skills</h1>
                    </div>

                    {/* Input Section  */}
                    <div className="mt-4">
                        <form>

                            {/* Soft skills */}
                            <h1 className='text-2xl text-amber-200 text-center font-bold'>Soft Skills</h1>
                            {skills.map((skill, index) => (
                                <div key={skill.id} className="mb-4">
                                    {/* Service Name */}
                                    <label className="text-lg text-gray-300 block mb-1">
                                        Skill {index + 1}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="(e.g Communication skill)"
                                        className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    />
                                </div>
                            ))}
                            {/* Add More Services Button */}
                            <span
                                className="text-white flex justify-center items-center mt-4 mb-4 text-4xl cursor-pointer"
                                onClick={addSoftSkill}
                            >
                                <CiCirclePlus />
                            </span>



                            {/* Technical skills */}
                            <h1 className='text-2xl text-amber-200 text-center font-bold'>Technical Skills</h1>

                            {services.map((service, index) => (
                                <div key={service.id} className="mb-4">
                                    {/* Service Name */}
                                    <label className="text-lg text-gray-300 block mb-1">
                                        Skill {index + 1}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="(e.g Frontend development)"
                                        className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    />

                                    {/* About the Service */}
                                    <label className="text-lg mt-2 text-gray-300 block mb-1">
                                        About the skill
                                    </label>
                                    <textarea
                                        placeholder="I create responsive designs....."
                                        className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    ></textarea>
                                </div>
                            ))}




                            {/* Add More Services Button */}
                            <span
                                className="text-white flex justify-center items-center mt-4 text-4xl cursor-pointer"
                                onClick={addService}
                            >
                                <CiCirclePlus />
                            </span>
                        </form>
                    </div>
                </div>


                {/* Projects */}
               
                <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl shadow-gray-800 w-full max-w-md sm:mr-7 mb-5 mx-auto">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl text-amber-400 font-bold">6.</span>
                        <h1 className="text-2xl text-white font-semibold">Projects</h1>
                    </div>

                    {/* Input Section  */}
                    <div className="mt-4">
                        <form>
                            {projects.map((project, index) => (
                                <div key={project.id} className="mb-4">
                                    {/* Service Name */}
                                    <label className="text-lg text-gray-300 block mb-1">
                                        Project {index + 1}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    />


                                    {/* About the Service */}
                                    <label className="text-lg mt-2 text-gray-300 block mb-1">
                                        About the project
                                    </label>
                                    <textarea
                                        placeholder="This is portfolio generator tool......"
                                        className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    ></textarea>

                                    <label className="text-lg text-gray-300 block mb-1">
                                        Link
                                    </label>
                                    <input placeholder='project link (optional)' type="url" name="" id="" className="w-full z-10 p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    />
                                </div>
                            ))}

                            {/* Add More Services Button */}
                            <span
                                className="text-white flex justify-center items-center mt-4 text-4xl cursor-pointer"
                                onClick={addProjects}
                            >
                                <CiCirclePlus />
                            </span>
                        </form>
                    </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl shadow-gray-800 w-full max-w-md sm:ml-7 mb-5 mx-auto">
                
                <ColorPallete/>
                
                </div>

                


                {/* Generate Portfolio Button */}

                <div className='flex justify-center items-center mt-6 pb-6'>
                    <button
                        onClick={routeToPortfolio}
                        className="animate-bounce cursor-pointer focus:animate-none hover:animate-none inline-flex text-lg shadow-lg shadow-gray-800  bg-amber-500 font-bold mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
                        aria-label="Sign up" >
                        <span className="relative flex items-center">
                            Generate Portfolio
                        </span>
                    </button>
                </div>

            </div>

            


            <footer className='relative customBlue w-full py-4 flex items-center justify-center font-semibold text-2xl'>
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

