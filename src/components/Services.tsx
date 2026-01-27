import { Shield, Grid3X3, Bug, Blinds, DoorOpen, LayoutGrid, SlidersHorizontal, PanelTop } from 'lucide-react';
import serviceMeshImage from '@/assets/service-mesh.jpg';
import serviceWindowsImage from '@/assets/service-windows.jpg';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="group card-elevated p-6 hover:scale-105 transition-all duration-300">
    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
      {icon}
    </div>
    <h4 className="text-lg font-heading font-semibold text-foreground mb-2">{title}</h4>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  const meshServices = [
    {
      icon: <Grid3X3 className="w-6 h-6" />,
      title: 'Mesh Installing',
      description: 'Expert installation of high-quality mesh screens for windows and doors.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Premium Aluminium Mesh',
      description: 'Durable aluminium mesh solutions that provide lasting protection.',
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: 'Honey Comb',
      description: 'Innovative honeycomb mesh designs for enhanced ventilation.',
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: 'Pest Control',
      description: 'Complete pest control solutions to keep your home protected.',
    },
  ];

  const windowServices = [
    {
      icon: <Blinds className="w-6 h-6" />,
      title: 'Blinds',
      description: 'Stylish window blinds to control light and add elegance.',
    },
    {
      icon: <DoorOpen className="w-6 h-6" />,
      title: 'UPVC Windows & Doors',
      description: 'Energy-efficient UPVC solutions for modern homes.',
    },
    {
      icon: <PanelTop className="w-6 h-6" />,
      title: 'Balcony Doors & Windows',
      description: 'Beautiful balcony solutions that maximize your views.',
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6" />,
      title: 'Slider Doors & Windows',
      description: 'Smooth sliding solutions for seamless indoor-outdoor living.',
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Complete Home{' '}
            <span className="text-gradient-copper">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From mesh installation to premium windows and doors, we offer comprehensive 
            services to transform and protect your home.
          </p>
        </div>

        {/* Mesh & Protection Solutions */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
                Mesh & Protection Solutions
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {meshServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img
                  src={serviceMeshImage}
                  alt="Premium mesh installation"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Window & Door Solutions */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img
                  src={serviceWindowsImage}
                  alt="UPVC windows and doors"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
                Window & Door Solutions
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {windowServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
