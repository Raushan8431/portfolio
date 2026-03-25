import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    acceptNotifications: false
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormState({
        ...formState,
        [name]: checked
      });
    } else {
      setFormState({
        ...formState,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Form validation
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMessage('Please fill in all required fields');
      setFormStatus('error');
      return;
    }

    if (!formState.acceptNotifications) {
      setErrorMessage('Please accept notifications to proceed');
      setFormStatus('error');
      return;
    }
    
    setFormStatus('submitting');
    setErrorMessage('');
    
    try {
      // Prepare form data for Web3Forms
      const formData = new FormData();
      formData.append('access_key', 'fd015783-b659-4df2-ae58-fe0507db2773');
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', formState.subject || 'Contact Form Submission');
      formData.append('message', formState.message);
      formData.append('from_name', 'Portfolio Contact Form');
      formData.append('to_name', 'Raushan Kumar');
      
      // Add notification preference
      formData.append('notifications_accepted', formState.acceptNotifications ? 'Yes' : 'No');
      
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
          acceptNotifications: false
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      data-section="contact"
      className="section relative py-24"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <p className="text-neutral-300 mb-8">
                Have a project in mind or want to discuss potential collaborations? 
                Feel free to reach out using the contact form or through the following channels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-background-dark rounded-full p-3">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:erraushan8431@gmail.com" className="text-neutral-400 hover:text-primary transition-colors duration-300">
                      erraushan8431@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-background-dark rounded-full p-3">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-neutral-400">Hi-Tech City, Telangana, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-background-dark rounded-full p-3">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <a href="tel:+916201906512" className="text-neutral-400 hover:text-primary transition-colors duration-300">
                      +91 6201906512
                    </a>
                  </div>
                </div>
              </div>

              {/* Web3Forms Info */}
              <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="text-primary font-semibold mb-2">Secure Form Submission</h4>
                <p className="text-neutral-300 text-sm">
                  This form is powered by Web3Forms for secure and reliable message delivery. 
                  Your information is protected and will be sent directly to my inbox.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-panel h-full">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name <span className="text-error">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your full name"
                    value={formState.name}
                    onChange={handleChange}
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3 rounded-md bg-background-dark border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email <span className="text-error">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="your.email@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3 rounded-md bg-background-dark border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="What is this about?"
                    value={formState.subject}
                    onChange={handleChange}
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3 rounded-md bg-background-dark border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message <span className="text-error">*</span>
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    placeholder="Your message here..."
                    value={formState.message}
                    onChange={handleChange}
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3 rounded-md bg-background-dark border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none transition-colors duration-300"
                    required
                  />
                </div>

                {/* Notification Acceptance Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="acceptNotifications"
                    name="acceptNotifications"
                    checked={formState.acceptNotifications}
                    onChange={handleChange}
                    disabled={formStatus === 'submitting'}
                    className="mt-1 w-4 h-4 text-primary bg-background-dark border-neutral-700 rounded focus:ring-primary focus:ring-2"
                    required
                  />
                  <label htmlFor="acceptNotifications" className="text-sm text-neutral-300">
                    <span className="text-error">*</span> I accept to receive notifications and updates about my message status. 
                    Your information will be handled securely and used only for communication purposes.
                  </label>
                </div>
                
                {/* Error Message */}
                {formStatus === 'error' && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-md bg-error/10 border border-error/30 text-error"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{errorMessage}</span>
                  </motion.div>
                )}
                
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center ${
                    formStatus === 'success' 
                      ? 'bg-success hover:bg-success-dark text-white' 
                      : formStatus === 'error'
                      ? 'bg-error hover:bg-error-dark text-white'
                      : 'bg-primary hover:bg-primary-dark text-background'
                  } ${formStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {formStatus === 'submitting' && (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  )}
                  
                  {formStatus === 'success' && (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span>Message Sent Successfully!</span>
                    </>
                  )}
                  
                  {formStatus === 'error' && (
                    <>
                      <AlertCircle className="w-5 h-5 mr-2" />
                      <span>Try Again</span>
                    </>
                  )}
                  
                  {formStatus === 'idle' && (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;