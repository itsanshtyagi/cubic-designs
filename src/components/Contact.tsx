import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: [
        { text: '+91 82875 07128', href: 'tel:+918287507128' },
        { text: '+91 87458 94545', href: 'tel:+918745894545' },
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: [
        { text: 'service.cubicdesigns@gmail.com', href: 'mailto:service.cubicdesigns@gmail.com' },
      ],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: [
        { text: 'JVTS Garden, Block G, Chattarpur, New Delhi, 110074', href: '#' },
      ],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Let's Discuss Your{' '}
            <span className="text-gradient-copper">Project</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to transform your space? Contact us today for a free consultation 
            and quote. Our team is here to help you find the perfect solutions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="card-elevated p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-accent">
                {info.icon}
              </div>
              <h4 className="text-lg font-heading font-semibold text-foreground mb-3">
                {info.title}
              </h4>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <a
                    key={idx}
                    href={detail.href}
                    className={`block text-muted-foreground ${
                      detail.href !== '#' ? 'hover:text-accent transition-colors' : ''
                    }`}
                  >
                    {detail.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="card-elevated p-8 sm:p-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-8">
            Call us now for a free consultation and get a quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918287507128">
              <Button variant="copper" size="xl" className="w-full sm:w-auto gap-2">
                <Phone className="w-5 h-5" />
                +91 82875 07128
              </Button>
            </a>
            <a
              href="https://wa.me/918287507128?text=Hello%20Cubic%20Designs,%20I%20am%20interested%20in%20your%20home%20and%20window%20solutions."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="copperOutline" size="xl" className="w-full sm:w-auto gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
