import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">R6R</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition">
            Get Started
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Digital
            <span className="text-blue-400"> Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            We transform innovative ideas into powerful software solutions that drive business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition">
              View Our Work
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
