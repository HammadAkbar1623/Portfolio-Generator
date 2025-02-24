import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/Portfolio/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Header Section */}
      <header className="text-center bg-white shadow-lg p-6 mx-auto max-w-4xl rounded-lg mb-10">
        <div className="flex flex-col items-center space-y-4">
          {/* Profile Photo */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-400">
            <img
              src="https://via.placeholder.com/150" // Replace with dynamic image URL
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name */}
          <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
          {/* Role */}
          <p className="text-xl text-gray-600">Full Stack Developer</p>
          {/* Contact Info */}
          <div className="flex space-x-4">
            <a href="mailto:john.doe@example.com" className="text-gray-600 hover:text-amber-500">
              john.doe@example.com
            </a>
            <a href="tel:+1234567890" className="text-gray-600 hover:text-amber-500">
              +123 456 7890
            </a>
          </div>
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-amber-500"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-amber-500"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl space-y-10">
        {/* About Me Section */}
        <section className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600">
            I am an experienced full-stack developer with a passion for building scalable and user-friendly applications. I specialize in the MERN stack and have a strong background in both frontend and backend development.
          </p>
        </section>

        {/* Education Section */}
        <section className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Bachelor of Computer Science</h3>
              <p className="text-gray-600">University of Example, 2020 - 2024</p>
              <p className="text-gray-600">GPA: 3.8/4.0</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">High School</h3>
              <p className="text-gray-600">Example High School, 2018 - 2020</p>
              <p className="text-gray-600">Marks: 90%</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Technical Skills</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Soft Skills</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Services</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Web Development</h3>
              <p className="text-gray-600">
                I develop user-friendly and responsive websites using modern technologies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Mobile App Development</h3>
              <p className="text-gray-600">
                I build cross-platform mobile applications using React Native.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Portfolio Generator</h3>
              <p className="text-gray-600">
                A tool to generate personalized portfolios based on user input.
              </p>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:underline"
              >
                View Project
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">E-commerce Website</h3>
              <p className="text-gray-600">
                A fully functional e-commerce website built with MERN stack.
              </p>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="text-center mt-10 text-gray-600">
        <p>© 2023 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}