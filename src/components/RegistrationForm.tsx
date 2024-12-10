import React, { useState } from 'react';
import { Flag, Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ico: string;
  country: 'CZ' | 'SK';
  business: string;
  wantTerminal: boolean;
  terminalCount: string;
  expectedTurnover: string;
  averageTransaction: string;
  affiliateCode: string;
  termsAccepted: boolean;
}

const inputClasses = "mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-lg shadow-sm transition duration-200 ease-in-out hover:bg-white";
const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
const errorClasses = "mt-2 text-sm text-red-600 flex items-center";
const sectionClasses = "bg-white p-8 rounded-xl shadow-lg space-y-6 hover:shadow-xl transition duration-300";

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ico: '',
    country: 'CZ',
    business: '',
    wantTerminal: false,
    terminalCount: '1',
    expectedTurnover: '',
    averageTransaction: '',
    affiliateCode: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^(\+420)?\s*[0-9]{3}\s*[0-9]{3}\s*[0-9]{3}$/.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName) newErrors.firstName = 'Vyplňte jméno';
    if (!formData.lastName) newErrors.lastName = 'Vyplňte příjmení';
    if (!formData.email || !validateEmail(formData.email)) newErrors.email = 'Zadejte platný email';
    if (!formData.phone || !validatePhone(formData.phone)) newErrors.phone = 'Zadejte platné telefonní číslo';
    if (!formData.ico) newErrors.ico = 'Vyplňte IČO';
    if (!formData.business) newErrors.business = 'Vyplňte předmět podnikání';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'Musíte souhlasit s podmínkami';

    if (formData.wantTerminal) {
      if (!formData.expectedTurnover) newErrors.expectedTurnover = 'Vyplňte předpokládaný obrat';
      if (!formData.averageTransaction) newErrors.averageTransaction = 'Vyplňte průměrnou transakci';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Registrace do PayTech</h2>
          <p className="text-lg text-gray-600">Začněte šetřit na poplatcích již dnes</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <motion.div 
            className={sectionClasses}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Kontaktní údaje</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>Jméno</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.firstName ? 'border-red-500' : ''}`}
                  placeholder="Zadejte jméno"
                />
                {errors.firstName && (
                  <p className={errorClasses}>
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.firstName}
                  </p>
                )}
              </div>
              
              <div>
                <label className={labelClasses}>Příjmení</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.lastName ? 'border-red-500' : ''}`}
                  placeholder="Zadejte příjmení"
                />
                {errors.lastName && (
                  <p className={errorClasses}>
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.lastName}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="vas@email.cz"
                />
                {errors.email && (
                  <p className={errorClasses}>
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="+420 123 456 789"
                />
                {errors.phone && (
                  <p className={errorClasses}>
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={sectionClasses}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Základní údaje o firmě</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>IČO</label>
                <input
                  type="text"
                  name="ico"
                  value={formData.ico}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.ico ? 'border-red-500' : ''}`}
                  placeholder="12345678"
                />
                {errors.ico && (
                  <p className={errorClasses}>
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.ico}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses}>Země</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`${inputClasses} cursor-pointer`}
                >
                  <option value="CZ">🇨🇿 Česká republika</option>
                  <option value="SK">🇸🇰 Slovensko</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className={labelClasses}>Předmět podnikání</label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.business ? 'border-red-500' : ''}`}
                  placeholder="Např. Prodej zboží, služby..."
                />
                {errors.business && (
                  <p className={errorClasses}>
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.business}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={sectionClasses}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Informace o platebních terminálech</h3>
            <div className="space-y-6">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="wantTerminal"
                  checked={formData.wantTerminal}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-lg text-gray-700">Chci zřídit platební terminál</span>
              </label>

              {formData.wantTerminal && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-8">
                  <div>
                    <label className={labelClasses}>Počet terminálů</label>
                    <select
                      name="terminalCount"
                      value={formData.terminalCount}
                      onChange={handleChange}
                      className={`${inputClasses} cursor-pointer`}
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClasses}>Předpokládaný měsíční obrat</label>
                    <input
                      type="text"
                      name="expectedTurnover"
                      value={formData.expectedTurnover}
                      onChange={handleChange}
                      className={`${inputClasses} ${errors.expectedTurnover ? 'border-red-500' : ''}`}
                      placeholder="Např. 100 000 Kč"
                    />
                    {errors.expectedTurnover && (
                      <p className={errorClasses}>
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.expectedTurnover}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClasses}>Průměrná transakce</label>
                    <input
                      type="text"
                      name="averageTransaction"
                      value={formData.averageTransaction}
                      onChange={handleChange}
                      className={`${inputClasses} ${errors.averageTransaction ? 'border-red-500' : ''}`}
                      placeholder="Např. 300 Kč"
                    />
                    {errors.averageTransaction && (
                      <p className={errorClasses}>
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.averageTransaction}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div 
            className={sectionClasses}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Affiliate kód</h3>
            <div>
              <input
                type="text"
                name="affiliateCode"
                value={formData.affiliateCode}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Zadejte affiliate kód (volitelné)"
              />
            </div>
          </motion.div>

          <motion.div 
            className={sectionClasses}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="space-y-6">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className={`w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${
                    errors.termsAccepted ? 'border-red-500' : ''
                  }`}
                />
                <span className="text-gray-700">
                  Souhlasím s{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                    obchodními podmínkami
                  </a>{' '}
                  a zpracováním osobních údajů
                </span>
              </label>
              {errors.termsAccepted && (
                <p className={errorClasses}>
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.termsAccepted}
                </p>
              )}

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Check className="w-6 h-6" />
                  ODESLAT
                </button>
              </div>
            </div>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}