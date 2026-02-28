import React from 'react';
import { ArrowRight, Sun, Hammer, Settings } from 'lucide-react';
import { Button } from '../ui/Button';

const Services = ({servicesData=[], ...props}) => {


  return (
    <section style={{
        backgroundImage: `url(${props.backgroundImage})`
    }} className="py-24 bg-cover bg-no-repeat bg-center flex justify-center items-center relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>

      <div className=" max-w-[1260px] mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">{props.title}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {props.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={service.id} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2">
              <div className="h-60 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                <img 
                  src={service.coverImage} 
                  alt={service.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-5 left-6 z-20 flex items-center gap-4">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                </div>
              </div>
              
              <div className="p-8 flex flex-col justify-between">
                <p className="text-white text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button link={`/services/${servicesData[index]._sys.filename}`}>
                    Explore More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;