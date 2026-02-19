import { MapPin, Phone, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Location() {
  // Google Maps embed URL for the address
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123456789!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDgnMDAuMCJX!5e0!3m2!1sen!2smx!4v1234567890123!5m2!1sen!2smx`;

  return (
    <section id="location" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Nuestra Panadería
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-96 md:h-[500px]">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Dirección
                </h3>
                <p className="text-primary/70 font-body">
                  {siteConfig.bakery.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Teléfono
                </h3>
                <p className="text-primary/70 font-body">
                  {siteConfig.bakery.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Horarios
                </h3>
                <div className="text-primary/70 font-body space-y-1">
                  <p>Lunes - Viernes: 7:00 AM - 8:00 PM</p>
                  <p>Sábado: 6:00 AM - 9:00 PM</p>
                  <p>Domingo: 7:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

