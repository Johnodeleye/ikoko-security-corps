'use client';
import React from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");
    
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setResult('Sending....');
      const formData = new FormData(event.target as HTMLFormElement);
      
      formData.append('access_key', '8d4a9798-6b50-4e7e-b2d6-55108dd78b15');
      
      const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setResult('Form Submitted Successfully');
        Swal.fire({
            title: "Success!",
            text: "Your message has been received",
            icon: "success"
        });
        (event.target as HTMLFormElement).reset();
    } else {
        alert('Something went wrong');
        console.log('Error:', data);
        setResult('');
    }
  };
  
  return (
<motion.div
  className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
  id="contact"
>

      {/* Background Image - Fullscreen and Responsive */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/logo.png')",
          filter: "brightness(0.3)",
          backgroundSize: "cover",
        }}
      />

      {/* Content Section */}
      <div className="relative z-10 max-w-3xl w-full bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Contact <span className="text-rose-700">Us</span>
        </h1>
        <p className="text-sm text-center mt-2 text-gray-600">
          Have questions or need assistance? Reach out to us using the form below. We're here to respond promptly and support you.
        </p>
        <p className="text-center text-rose-700 mb-8">___________</p>

        {/* Contact Form */}
        <form 
          onSubmit={onSubmit} 
          className="grid grid-cols-1 gap-6"
        >
          {/* Name Field */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label>Your Name</label>
            <input 
              type="text" 
              name="Name" 
              placeholder="Your Name" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label>Your Email</label>
            <input 
              type="email" 
              name="Email" 
              placeholder="Your Email" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label>Message</label>
            <textarea 
              name="Message" 
              placeholder="Write your message..." 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-rose-700"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button 
            type="submit" 
            className="w-full py-3 text-white bg-rose-600 rounded-lg hover:bg-rose-700 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            {result ? result : 'Send Message'}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
