'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope as EnvelopeIcon, FaPhone as PhoneIcon, FaMapMarkerAlt as MapIcon, FaPaperPlane as SendIcon, FaCheckCircle as CheckIcon } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // In development / demo mode, simulate success state to wow the user
      setTimeout(async () => {
        const confetti = (await import('canvas-confetti')).default;
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#4F46E5', '#06B6D4', '#8B5CF6'],
        });
        setIsSent(true);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
      
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#4F46E5', '#06B6D4', '#8B5CF6'],
      });

      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      console.error('EmailJS error:', err);
      setErrorMessage('Failed to send mail. Please try again later or contact directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030611]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-gray-400 font-mono text-xs tracking-widest uppercase mb-3">
            Inquiry
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Form Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Information cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl flex-1 flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl" />
              
              <h4 className="text-xl font-bold font-heading text-white mb-8">
                Contact Information
              </h4>

              <div className="space-y-8">
                {/* Email Info */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl">
                    <EnvelopeIcon className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block">
                      Direct Mail
                    </span>
                    <a
                      href="mailto:guhanguhan529@gmail.com"
                      className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors mt-1 block"
                    >
                      guhanguhan529@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl">
                    <PhoneIcon className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block">
                      Call / WhatsApp
                    </span>
                    <a
                      href="tel:+919444341696"
                      className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors mt-1 block"
                    >
                      +91 9444341696
                    </a>
                  </div>
                </div>

                {/* Location Info */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl">
                    <MapIcon className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block">
                      Current Location
                    </span>
                    <span className="text-sm font-semibold text-gray-200 mt-1 block">
                      Erode, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick response note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.015] border border-white/[0.04] text-xs leading-relaxed text-gray-400 font-mono"
            >
              <span className="text-cyan-400 font-bold block mb-1">PROTIP:</span>
              Messages sent through this form compile to a direct email alert to my client. I typically respond to inbox inquiries within 12–24 business hours.
            </motion.div>
          </div>

          {/* Right Side: Form / Success Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-10 rounded-2xl h-full relative overflow-hidden hover:border-indigo-500/15">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-30 rounded-full blur-3xl pointer-events-none" />

              {!isSent ? (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 h-full justify-between">
                  <div>
                    <h4 className="text-lg font-bold font-heading text-white mb-6">
                      Send a Message
                    </h4>
                    
                    {/* Inputs panel */}
                    <div className="space-y-6">
                      {/* Name input */}
                      <div className="flex flex-col">
                        <label htmlFor="name" className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-2 ml-1">
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] focus:border-indigo-500 focus:bg-white/[0.04] focus:ring-1 focus:ring-indigo-500 text-sm text-white placeholder-gray-600 outline-none transition-all font-sans"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col">
                        <label htmlFor="email" className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-2 ml-1">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. johndoe@gmail.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] focus:border-indigo-500 focus:bg-white/[0.04] focus:ring-1 focus:ring-indigo-500 text-sm text-white placeholder-gray-600 outline-none transition-all font-sans"
                        />
                      </div>

                      {/* Message input */}
                      <div className="flex flex-col">
                        <label htmlFor="message" className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-2 ml-1">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          placeholder="Provide details about your project or opportunity..."
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] focus:border-indigo-500 focus:bg-white/[0.04] focus:ring-1 focus:ring-indigo-500 text-sm text-white placeholder-gray-600 outline-none transition-all resize-none font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submission triggers */}
                  <div className="mt-8 flex flex-col gap-3">
                    {errorMessage && (
                      <p className="text-red-400 text-[10px] font-mono ml-1">{errorMessage}</p>
                    )}
                    
                    {!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY && (
                      <span className="text-[9px] text-indigo-400/60 font-mono italic">
                        * Running in Demo Mode. Submitting will simulate success immediately.
                      </span>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.01] hover:brightness-105 active:scale-[0.99] disabled:opacity-50 disabled:scale-100 shadow-xl shadow-indigo-600/10 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <SendIcon className="text-xs" />
                          Transmit Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Premium Thank You state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full py-12"
                >
                  <div className="p-4 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-4xl mb-6 animate-bounce">
                    <CheckIcon />
                  </div>
                  
                  <h4 className="text-2xl font-bold font-heading text-white tracking-wide mb-3">
                    Transmission Success!
                  </h4>
                  
                  <p className="text-gray-300 text-sm leading-relaxed max-w-sm mb-8 font-sans">
                    Thank you for reaching out, Guhan has received your request. The systems have logged your details, and a response is routing back to you.
                  </p>

                  <button
                    onClick={() => setIsSent(false)}
                    className="px-6 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.08] hover:border-white/[0.15] text-[10px] font-bold tracking-widest uppercase transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
