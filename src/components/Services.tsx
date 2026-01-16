import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import chiropracticImage from "figma:asset/b3c47b5ed8db64fe43488d99e92c2cc3f013b8a7.png";
import physiotherapyImage from "figma:asset/704621ec481a1f85e5e3c8d95ad3dcea28858648.png";
import massageImage from "figma:asset/749b7311fd7a8c45d2ec1048fc12408ece9b5e17.png";

export function Services() {
  const services = [
    {
      title: "CHIROPRACTIC",
      description: "Specialised spinal adjustments and alignment therapy designed for the unique postural challenges musicians face during long performances and travel.",
      image: chiropracticImage,
      features: ["Spinal Alignment", "Posture Correction", "Pain Relief", "Performance Enhancement"]
    },
    {
      title: "PHYSICAL THERAPY",
      description: "Comprehensive movement therapy and rehabilitation services to keep you performing at your peak, with specialised techniques for instrument-specific injuries.",
      image: physiotherapyImage,
      features: ["Injury Prevention", "Movement Analysis", "Strength Training", "Flexibility Programs"]
    },
    {
      title: "MASSAGE",
      description: "Deep tissue and therapeutic massage services to relieve tension, improve circulation, and accelerate recovery between performances.",
      image: massageImage,
      features: ["Deep Tissue", "Sports Massage", "Trigger Point", "Relaxation Therapy"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 id="services-heading" className="text-white mb-4">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-white mb-6"></div>
          <p className="text-gray-300 max-w-2xl">
            Touring takes its toll. Long travel days, back-to-back shows, tight turnarounds — we know the grind, and we know how to keep you and your band in top form.
          </p>
          <p className="text-gray-300 max-w-2xl mt-4">
            Trusted by artists and tour managers alike, we make life easier behind the scenes. We know the score, and we make sure your team is ready for every performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <Card key={index} className="bg-black border-2 border-gray-700 hover:border-white transition-all duration-300 transform hover:scale-105 group flex flex-col">
              <div className="relative overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={service.image}
                  alt={`${service.title} - Hands on Bands mobile therapy service for touring musicians in UK and Ireland`}
                  className="w-full h-64 object-cover object-[center_30%] filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-white group-hover:text-gray-200 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-1 gap-4">
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="flex flex-col gap-2 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-200">
                      <div className="w-2 h-2 bg-white mr-3 rotate-45 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center text-center mt-16 p-8 bg-black text-white border-2 border-gray-700">
          <h3 className="text-white mb-4">READY TO GET BACK ON STAGE?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl">
            Don't let pain or injury stop your tour. We bring our mobile treatment units directly to you, whether you are at a festival, venue, or hotel. Because the show must go on, and so must you.
          </p>
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 px-8"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            BOOK LAST-MINUTE TREATMENT
          </Button>
        </div>
      </div>
    </section>
  );
}