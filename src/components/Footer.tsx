import { Code2, Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">R6R</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building innovative software solutions for businesses worldwide since 2012.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2024 R6R Development. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
