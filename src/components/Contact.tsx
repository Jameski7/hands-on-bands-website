import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    treatmentDate: "",
    details: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Please agree to receive communication about your booking");
      return;
    }

    const subject = encodeURIComponent(`Treatment Booking Request - ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(`
Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Requested Date: ${formData.treatmentDate}
Location & Details: ${formData.details}

Consent: I agree to receive communication about my treatment and booking updates
    `);

    window.location.href = `mailto:contact@handsonbands.com?subject=${subject}&body=${body}`;
    
    toast.success("Opening your email client...");
  };

  const contactMethods = [
    {
      title: "LAST-MINUTE SUPPORT",
      content: "+44 (0) 7824388682",
      subtitle: "Urgent care support needs",
      icon: "🚨",
      link: "tel:+447824388682"
    },
    {
      title: "BOOKING LINE",
      content: "+44 (0) 7824388682",
      subtitle: "Schedule your treatment",
      icon: "📞",
      link: "tel:+447824388682"
    },
    {
      title: "EMAIL SUPPORT",
      content: "contact@handsonbands.com",
      subtitle: "General enquiries & bookings",
      icon: "✉️",
      link: "mailto:contact@handsonbands.com"
    }
  ];

  const coverage = [
    "London",
    "Manchester",
    "Edinburgh",
    "Glasgow",
    "Aberdeen",
    "Dublin",
    "Belfast"
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-black text-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h2 id="contact-heading" className="text-white mb-4 text-2xl sm:text-3xl md:text-4xl">GET IN TOUCH</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-5xl text-sm sm:text-base">
            Whether you need us for a single stage gig or an entire tour, we have you covered. We offer flexible day rates for one-off events, or we can join you on the road to keep your whole crew moving night after night.
          </p>
          <p className="text-gray-300 max-w-5xl mt-4 text-sm sm:text-base">
            We already have setups in Edinburgh, Glasgow, Aberdeen, Manchester, London, Belfast, and Dublin, but we are ready to travel wherever your schedule takes you. Heading across Europe? Just let us know where and when, and we will make it happen.
          </p>
          <p className="text-gray-300 max-w-5xl mt-4 text-sm sm:text-base">
            Discreet, reliable, and trusted by performers for over 20 years, get in touch and let us take care of the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 flex flex-col">
            <h3 className="text-white mb-6 text-xl sm:text-2xl">CONTACT METHODS</h3>
            <div className="flex flex-col gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700 hover:border-white transition-colors">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl flex-shrink-0" aria-hidden="true">{method.icon}</div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <div className="text-white mb-1 text-sm sm:text-base">{method.title}</div>
                        <a 
                          href={method.link} 
                          className="text-white mb-2 block hover:underline break-words text-sm sm:text-base min-h-[44px] flex items-center touch-manipulation"
                          aria-label={`${method.title}: ${method.content}`}
                        >
                          {method.content}
                        </a>
                        <div className="text-gray-400 text-xs sm:text-sm">{method.subtitle}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coverage Areas */}
            <div className="mt-8 flex flex-col">
              <h4 className="text-white mb-4 text-lg sm:text-xl">UK COVERAGE AREAS</h4>
              <div className="grid grid-cols-2 gap-3 auto-rows-fr">
                {coverage.map((area, index) => (
                  <div key={index} className="flex items-center text-gray-300 text-sm sm:text-base">
                    <div className="w-2 h-2 bg-white mr-3 rotate-45 flex-shrink-0" aria-hidden="true"></div>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 flex flex-col">
            <Card className="bg-gray-900 border-gray-700 flex flex-col flex-1">
              <CardHeader>
                <CardTitle className="text-white text-xl sm:text-2xl">BOOK YOUR TREATMENT</CardTitle>
                <p className="text-gray-300 text-sm sm:text-base">Fill out the form below and we'll get back to you within 2 hours</p>
              </CardHeader>
              <CardContent className="flex-1 p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="h-full">
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label htmlFor="firstName" className="text-white mb-2 block text-sm sm:text-base">First Name *</label>
                        <Input 
                          id="firstName"
                          name="firstName"
                          placeholder="Your first name"
                          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-white min-h-[48px] text-base touch-manipulation"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          aria-required="true"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="lastName" className="text-white mb-2 block text-sm sm:text-base">Last Name *</label>
                        <Input 
                          id="lastName"
                          name="lastName"
                          placeholder="Your last name"
                          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-white min-h-[48px] text-base touch-manipulation"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label htmlFor="phone" className="text-white mb-2 block text-sm sm:text-base">Phone Number *</label>
                        <Input 
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Your phone number"
                          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-white min-h-[48px] text-base touch-manipulation"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          aria-required="true"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="email" className="text-white mb-2 block text-sm sm:text-base">Email Address *</label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-white min-h-[48px] text-base touch-manipulation"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label htmlFor="service" className="text-white mb-2 block text-sm sm:text-base">Service Needed *</label>
                        <select 
                          id="service"
                          name="service"
                          className="w-full p-3 bg-gray-800 border border-gray-600 text-white focus:border-white focus:outline-none rounded-md min-h-[48px] text-base touch-manipulation"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          required
                          aria-required="true"
                        >
                          <option value="">Select a service</option>
                          <option value="chiropractic">Chiropractic Care</option>
                          <option value="physiotherapy">Physiotherapy</option>
                          <option value="massage">Massage Therapy</option>
                          <option value="emergency">Last-Minute Treatment</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="treatmentDate" className="text-white mb-2 block text-sm sm:text-base">Requested Treatment Date *</label>
                        <Input 
                          id="treatmentDate"
                          name="treatmentDate"
                          type="date"
                          className="bg-gray-800 border-gray-600 text-white focus:border-white min-h-[48px] text-base touch-manipulation"
                          value={formData.treatmentDate}
                          onChange={(e) => setFormData({ ...formData, treatmentDate: e.target.value })}
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="details" className="text-white mb-2 block text-sm sm:text-base">Location & Additional Details</label>
                      <Textarea 
                        id="details"
                        name="details"
                        placeholder="Tell us about your current location, specific concerns, or any additional details..."
                        rows={4}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-white resize-none min-h-[100px] text-base touch-manipulation"
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      />
                    </div>

                    <div className="flex items-start gap-3 min-h-[44px]">
                      <input 
                        type="checkbox" 
                        id="consent"
                        name="consent"
                        className="w-5 h-5 mt-1 flex-shrink-0 touch-manipulation"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        aria-required="true"
                      />
                      <label htmlFor="consent" className="text-gray-300 flex-1 text-sm sm:text-base">
                        I agree to receive communication about my treatment and booking updates
                      </label>
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-95 min-h-[56px] text-base sm:text-lg touch-manipulation"
                      aria-label="Send booking request"
                    >
                      SEND BOOKING REQUEST
                    </Button>

                    <p className="text-gray-400 text-center text-sm sm:text-base">
                      Last-Minute? Call Us For Availability: <a href="tel:+447824388682" className="text-white hover:underline min-h-[44px] inline-flex items-center touch-manipulation">+44 (0) 7824388682</a>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}