import React from 'react';
import { Mail, Phone, MapPin, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Jsme tu pro Vás
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Kontaktní údaje</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a
                      href="mailto:info@paytech.cz"
                      className="hover:text-blue-600"
                    >
                      info@paytech.cz
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href="tel:+420533533052" className="hover:text-blue-600">
                      +420 533 533 052
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Fakturační údaje</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p>PayTech s.r.o.</p>
                      <p className="font-medium">Fakturační adresa:</p>
                      <p>Stojanova 136/9</p>
                      <p>Veveří, 602 00 Brno</p>
                      <p className="mt-2 font-medium">Sídlo:</p>
                      <p>Mlýnská 425/70</p>
                      <p>602 00 Brno-střed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>IČO: 217 25 497</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-bold mb-4">
                Začněte s PayTech ještě dnes
              </h3>
              <p className="text-gray-600 mb-8">
                Připojte se k tisícům spokojených podnikatelů a začněte šetřit
                na poplatcích
              </p>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center gap-2"
              >
                Registrovat nyní
                <ArrowRight className="w-5 h-5" />{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
