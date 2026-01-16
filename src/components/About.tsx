import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Musicians Helped" },
    { number: "100+", label: "Venues Covered" },
    { number: "24/7", label: "Urgent Care" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-black" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className="flex flex-col">
            <h2 id="about-heading" className="text-white mb-6">ABOUT HANDS ON BANDS</h2>
            <div className="w-24 h-1 bg-white mb-8"></div>
            
            <div className="flex flex-col gap-6 text-gray-300 leading-relaxed">
              <p>
                Established in Scotland, Hands on Bands delivers an unparalleled standard of care for world-class performers. Our team of elite wellness professionals brings over two decades of backstage expertise, providing tailored, discreet, and seamless support wherever the performance takes you.
              </p>
              
              <p>
                From global arena tours to prestigious theatre productions and international film sets, we operate with the precision and professionalism expected at the highest level. Whether in a luxury dressing suite or a makeshift space behind the curtain, our focus remains uncompromising — to ensure every artist, dancer, and crew member performs at their absolute best.
              </p>
              
              <p>
                We understand that every role has its own physical demands. A singer's breath control, a drummer's stamina, a dancer's balance — each requires specialised attention. Our bespoke approach is crafted to sustain excellence, prevent fatigue, and optimise performance.
              </p>

              <p>
                Confidentiality is absolute. We do not take photographs, we do not share client names, and we work quietly behind the scenes to deliver the care that keeps the show running smoothly.
              </p>

              <p>
                Hands on Bands is trusted by those who expect excellence. When it truly matters, we are the team behind the performance.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mt-12 flex flex-col">
              <h3 className="text-white mb-6">WHY MUSICIANS CHOOSE US</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white mt-2 rotate-45 flex-shrink-0"></div>
                  <div className="flex flex-col">
                    <div className="text-white mb-1">Specialised Knowledge</div>
                    <div className="text-gray-300">Expert understanding of musician-specific injuries</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white mt-2 rotate-45 flex-shrink-0"></div>
                  <div className="flex flex-col">
                    <div className="text-white mb-1">Mobile Service</div>
                    <div className="text-gray-300">We come to you, anywhere in the UK & Ireland</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white mt-2 rotate-45 flex-shrink-0"></div>
                  <div className="flex flex-col">
                    <div className="text-white mb-1">Flexible Scheduling</div>
                    <div className="text-gray-300">Available around your performance schedule</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white mt-2 rotate-45 flex-shrink-0"></div>
                  <div className="flex flex-col">
                    <div className="text-white mb-1">Emergency Support</div>
                    <div className="text-gray-300">24/7 availability for urgent needs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="flex flex-col">
            <div className="relative mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740459057005-65f000db582f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2NrJTIwY29uY2VydCUyMHN0YWdlJTIwbGlnaHRzfGVufDF8fHx8MTc1OTQ4MzQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Live music concert stage with professional lighting - Hands on Bands provides mobile therapy services for touring musicians across UK and Ireland"
                className={`w-full h-80 object-cover filter transition-all duration-1000 ${isVisible ? 'grayscale-0' : 'grayscale'}`}
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute bottom-6 left-6 flex flex-col text-white">
                <div className="text-white mb-2">WE UNDERSTAND YOUR WORLD</div>
                <div className="text-gray-300">Because we've been part of it</div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 auto-rows-fr">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-6 bg-black border-2 border-gray-700 hover:border-white transition-colors">
                  <div className="text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}