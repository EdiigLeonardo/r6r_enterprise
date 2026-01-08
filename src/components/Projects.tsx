import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'FinTech Platform',
      category: 'Financial Services',
      description: 'A comprehensive digital banking solution serving over 500,000 users with advanced security features.',
      image: 'https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'E-Commerce Ecosystem',
      category: 'Retail',
      description: 'Multi-vendor marketplace platform processing millions in transactions with seamless user experience.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Healthcare Management',
      category: 'Healthcare',
      description: 'HIPAA-compliant patient management system streamlining operations for 50+ medical facilities.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Logistics Dashboard',
      category: 'Supply Chain',
      description: 'Real-time tracking and analytics platform optimizing delivery operations across multiple regions.',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing some of our most impactful work across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-slate-900 hover:shadow-2xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover opacity-60 group-hover:opacity-40 transition"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="text-blue-400 text-sm font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-white font-semibold group-hover:text-blue-400 transition">
                  View Case Study
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition">
            View All Projects
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
