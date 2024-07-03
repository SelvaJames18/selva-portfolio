import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kkbfk74', 'template_so1u75l', form.current, '0v91IukZSmCHTWL72')
      .then(
        () => {
          setStatusMessage("Your message was sent successfully!");
          setIsSuccess(true);
          form.current.reset(); 
        },
        (error) => {
          setStatusMessage("Failed to send your message. Please try again later.");
          setIsSuccess(false);
          console.error('Email sending error:', error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="mt-[100px]"
    >
      <h2 className="text-3xl font-bold text-center text-white">Get in Touch</h2>
      <div className="flex flex-wrap gap-[150px] justify-center mt-[60px] mb-[70px]">
        <div className="text-center">
          <i className="fa-solid fa-envelope"></i>
          <p className="text-white mt-1">Email</p>
          <p className="text-zinc-400 mt-1">selvajames418@gmail.com</p>
        </div>
        <div className="text-center">
          <i className="fa-solid fa-phone"></i>
          <p className="text-white mt-1">Phone</p>
          <p className="text-zinc-400 mt-1">+91 9360201726</p>
        </div>
        <div className="text-center">
          <i className="fa-solid fa-location-dot"></i>
          <p className="text-white mt-1">Address</p>
          <p className="text-zinc-400 mt-1">Tirunelveli, Tamil Nadu-627425</p>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-4 sm:mx-auto mb-10">
        <div className="mb-4">
          <label className="block text-red-300 text-[12px] mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="user_name" 
            className="w-full px-3 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-800 hover:border-zinc-800 hover:bg-zinc-900 transition duration-200"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-red-300 text-[12px] mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="user_email" 
            className="w-full px-3 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-800 hover:border-zinc-800 hover:bg-zinc-900 transition duration-200"
            placeholder="example@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-red-300 text-[12px] mb-2">Message</label>
          <textarea
            id="message"
            name="message" 
            rows="4"
            className="w-full px-3 py-2 text-white bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-800 hover:border-zinc-800 hover:bg-zinc-900 transition duration-200"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-zinc-800 border-2 border-zinc-700 text-sm text-red-300 px-6 py-2 rounded-3xl cursor-pointer hover:bg-zinc-900 hover:border-zinc-800 ease-out duration-300"
        >
          Send Message
        </button>
        {statusMessage && (
          <div
            className={`mt-4 text-sm px-4 py-2 rounded-lg ${isSuccess ? 'bg-green-500' : 'bg-red-500'} text-white`}
          >
            {statusMessage}
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default Contact;