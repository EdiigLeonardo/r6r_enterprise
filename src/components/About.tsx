import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '150+', label: 'Clients Worldwide' },
    { icon: Award, value: '250+', label: 'Projects Delivered' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
    { icon: Target, value: '12+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Innovative Solutions for Modern Businesses
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              R6R is a leading software development company specializing in creating cutting-edge digital solutions. With over a decade of experience, we've helped businesses across the globe achieve their technological goals.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of expert developers, designers, and strategists work collaboratively to deliver solutions that are not only technically sound but also aligned with your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition"
              >
                <stat.icon className="h-8 w-8 text-blue-600 mb-4" />
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
