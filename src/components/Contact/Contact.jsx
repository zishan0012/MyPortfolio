import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, FileDown } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error once user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setStatus('sending');

    // Simulate API Request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset status back to idle after some time
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-accent" />,
      label: "Email Me",
      value: "zishanahmad5065@gmail.com",
      link: "mailto:zishanahmad5065@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-accent" />,
      label: "Call Me",
      value: "+91 9142915494",
      link: "tel:+919142915494"
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      label: "My Location",
      value: "Chandigarh, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-accent mb-2"
          >
            Get In Touch
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2"
          >
            Let's Start a Conversation
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Contact Information
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Have a project idea, question, or looking to collaborate? Fill out the form or reach out via email/phone directly. I will get back to you within 24 hours.
              </p>

              {/* Cards info list */}
              <div className="space-y-4 pt-4">
                {contactDetails.map((detail, index) => (
                  <div
                    key={detail.label}
                    className="p-4 rounded-xl border border-white/5 bg-white/2 flex items-center space-x-4 glassmorphism-light hover:border-primary/10 transition-colors duration-300"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-medium block">
                        {detail.label}
                      </span>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          className="text-sm font-semibold text-white hover:text-accent transition-colors duration-200"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-white">
                          {detail.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Resume Download Callout */}
            <div className="p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent glassmorphism-light mt-6">
              <h4 className="font-display font-semibold text-sm text-white">
                Looking for my credentials?
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Download my complete offline CV detailing intermediate coursework and certifications.
              </p>
              <a
                href="/Zishanresume.pdf"
                download="Zishan_Ahmad_Resume.pdf"
                className="mt-4 inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/30 transition-all duration-300 transform active:scale-95"
              >
                <FileDown className="w-4 h-4 text-accent animate-bounce" />
                <span>Get Resume PDF</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-white/8 bg-white/3 glassmorphism shadow-2xl relative">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  /* Success Screen */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle className="w-16 h-16 text-[#10B981] drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                    </motion.div>
                    <h3 className="font-display font-bold text-2xl text-white mt-6">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 text-sm max-w-sm mt-3 leading-relaxed">
                      Thank you for reaching out, Zishan. Your message has been captured. I will get in touch with you shortly.
                    </p>
                  </motion.div>
                ) : (
                  /* Standard Form Screen */
                  <form key="form" onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="name" className="text-xs text-gray-400 font-semibold tracking-wide">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`px-4 py-3 rounded-xl bg-white/3 border text-sm text-white placeholder-gray-600 focus:outline-none focus:bg-white/5 transition-all duration-300 ${
                            formErrors.name ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-white/8 focus:border-primary focus:ring-1 focus:ring-primary/20'
                          }`}
                          placeholder="John Doe"
                        />
                        {formErrors.name && (
                          <span className="text-[10px] text-[#EF4444] font-medium flex items-center space-x-1 mt-0.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{formErrors.name}</span>
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="email" className="text-xs text-gray-400 font-semibold tracking-wide">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`px-4 py-3 rounded-xl bg-white/3 border text-sm text-white placeholder-gray-600 focus:outline-none focus:bg-white/5 transition-all duration-300 ${
                            formErrors.email ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-white/8 focus:border-primary focus:ring-1 focus:ring-primary/20'
                          }`}
                          placeholder="john@example.com"
                        />
                        {formErrors.email && (
                          <span className="text-[10px] text-[#EF4444] font-medium flex items-center space-x-1 mt-0.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{formErrors.email}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="subject" className="text-xs text-gray-400 font-semibold tracking-wide">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl bg-white/3 border text-sm text-white placeholder-gray-600 focus:outline-none focus:bg-white/5 transition-all duration-300 ${
                          formErrors.subject ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-white/8 focus:border-primary focus:ring-1 focus:ring-primary/20'
                        }`}
                        placeholder="Collaboration Opportunities"
                      />
                      {formErrors.subject && (
                        <span className="text-[10px] text-[#EF4444] font-medium flex items-center space-x-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{formErrors.subject}</span>
                        </span>
                      )}
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="message" className="text-xs text-gray-400 font-semibold tracking-wide">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className={`w-full px-4 py-3 rounded-xl bg-white/3 border text-sm text-white placeholder-gray-600 focus:outline-none focus:bg-white/5 transition-all duration-300 resize-none ${
                          formErrors.message ? 'border-[#EF4444] focus:border-[#EF4444]' : 'border-white/8 focus:border-primary focus:ring-1 focus:ring-primary/20'
                        }`}
                        placeholder="Hi Zishan, I would like to discuss..."
                      />
                      {formErrors.message && (
                        <span className="text-[10px] text-[#EF4444] font-medium flex items-center space-x-1 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{formErrors.message}</span>
                        </span>
                      )}
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-4 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-primary via-secondary to-accent hover:brightness-110 disabled:brightness-75 shadow-lg shadow-primary/25 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transition-all duration-300 transform active:scale-[0.98] cursor-pointer"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
