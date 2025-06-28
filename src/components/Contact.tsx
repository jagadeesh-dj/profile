import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  // const contactInfo = [
  //   {
  //     icon: Mail,
  //     label: 'Email',
  //     value: 'alex.morgan@email.com',
  //     href: 'mailto:alex.morgan@email.com'
  //   },
  //   {
  //     icon: Phone,
  //     label: 'Phone',
  //     value: '+1 (555) 123-4567',
  //     href: 'tel:+15551234567'
  //   },
  //   {
  //     icon: MapPin,
  //     label: 'Location',
  //     value: 'San Francisco, CA',
  //     href: '#'
  //   }
  // ];

  // const socialLinks = [
  //   { icon: Github, href: '#', label: 'GitHub' },
  //   { icon: Linkedin, href: '#', label: 'LinkedIn' },
  //   { icon: Twitter, href: '#', label: 'Twitter' }
  // ];

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,100,255,0.05),transparent_25%),radial-gradient(circle_at_70%_50%,rgba(255,100,255,0.05),transparent_25%)]"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a chat. 
            Feel free to reach out!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative rounded-2xl p-2 w-full lg:max-w-xl text-gray-500">
            {/* <h3 className="text-2xl font-bold text-slate-800 mb-6">Send me a message</h3> */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium  text-slate-800 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}  
                    className="w-full px-4 py-3 text-white border border-gray-500 rounded-md outline-none bg-gray-800"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-800 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-white border border-gray-500 rounded-md outline-none bg-gray-800"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-800 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                    className="w-full px-4 py-3 text-white border border-gray-500 rounded-md outline-none bg-gray-800"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-800 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                    className="w-full px-4 py-3 text-white border border-gray-500 rounded-md outline-none bg-gray-800"
                  placeholder="Tell me about your project or just say hello!"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-md font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-200">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-slate-600">{info.label}</p>
                        <p className="text-lg font-semibold text-slate-800">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-slate-100 p-4 rounded-full hover:bg-blue-100 transition-all duration-200 group"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-6 w-6 text-slate-600 group-hover:text-blue-600" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;