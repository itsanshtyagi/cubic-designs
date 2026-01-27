import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    'Professional Installation Team',
    'Premium Quality Materials',
    '5+ Years Industry Experience',
    'Customer-First Approach',
    'Competitive Pricing',
    'After-Sales Support',
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              About Cubic Designs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Creating Beautiful &{' '}
              <span className="text-gradient-copper">Functional Spaces</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Cubic Designs, we specialize in transforming homes with premium mesh solutions, 
              UPVC windows & doors, and comprehensive pest control services. Our commitment to 
              quality and customer satisfaction has made us a trusted name in the industry.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you're looking to enhance security, improve ventilation, or upgrade your 
              windows and doors, we have the expertise and products to bring your vision to life.
            </p>
            
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '5+', label: 'Years Experience' },
              { number: '100%', label: 'Customer Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div
                key={index}
                className="card-elevated p-8 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl sm:text-5xl font-heading font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
