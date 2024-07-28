import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS library
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.name) {
      valid = false;
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      valid = false;
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        valid = false;
        errors.email = 'Invalid email address';
      }
    }
    if (!formData.subject) {
      valid = false;
      errors.subject = 'Subject is required';
    }
    if (!formData.message) {
      valid = false;
      errors.message = 'Message is required';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Your message has been sent!');
    }
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-xl font-bold">NSS</a>
          <div className="space-x-4">
            <a href="/home" className="text-gray-300 hover:text-white">Home</a>
            <a href="/about" className="text-gray-300 hover:text-white">About</a>
            <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
      </nav> 

      <header 
  className="relative h-96 text-white flex items-center justify-center" 
  style={{ 
    backgroundImage: 'url(https://yas.tripura.gov.in/sites/default/files/inline-images/nss.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }}>
  <div 
    className="absolute inset-0 bg-black opacity-50" 
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
  </div>
  <div className="relative text-center">
    <h1 
      className="text-5xl font-extrabold mb-4" 
      style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} 
      data-aos="fade-up">
      Contact Us
    </h1>
    <p 
      className="text-lg font-bold" 
      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} 
      data-aos="fade-up" 
      data-aos-delay="200">
      Get in touch with us for any queries or support
    </p>
  </div>
</header>

      <main className="container mx-auto py-16">
        <section id="contact-details" className="mb-16" data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Information</h2>
          <div className="bg-white shadow-md rounded-lg p-6 max-w-4/5 mx-auto">
            <p className="text-gray-700 mb-4">
              If you have any questions or need further information, feel free to contact us:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Email:</span> info@nss.org
              </li>
              <li>
                <span className="font-semibold">Phone:</span> +91 98765 43210
              </li>
              <li>
                <span className="font-semibold">Address:</span> NSS Office, Main Campus, Mumbai, India
              </li>
            </ul>
          </div>
         
            <div className="w-4/5 mx-auto mt-8">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d5872.6410523867735!2d72.8332052966871!3d19.12286089975492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7c9d90fffffff%3A0xb336106f9c10343e!2s4RFP%2BXCH%20Bhavan&#39;s%20College%2C%20JP%20Rd%2C%20Old%20D%20N%20Nagar%2C%20Munshi%20Nagar%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400058!3m2!1d19.124932599999998!2d72.8360953!5e0!3m2!1sen!2sin!4v1722189898275!5m2!1sen!2sin" 
    width="100%" 
    height="450" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
  ></iframe>


          </div>
        </section>

        <section id="contact-form" className="mb-16" data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4 text-center">Send Us a Message</h2>
          <form 
            className="space-y-4 mx-auto w-4/5"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={`w-full p-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded`}
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <p className="text-red-600">{errors.subject}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded`}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="text-red-600">{errors.message}</p>}
            </div>
            <button type="submit" className="bg-gray-800 text-white p-2 rounded w-full hover:bg-gray-700">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 p-4 mt-16 text-center text-gray-300">
        <p>&copy; 2024 NSS. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Contact;
