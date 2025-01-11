'use client';
import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = React.useState("");
    
  const onSubmit = async (event : any) => {
      event.preventDefault();
      setResult('Sending....');
      const formData = new FormData(event.target);
      
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
        event.target.reset();
    } else {
        alert('Something went wrong');  // Fixed: Removed the second argument
        console.log('Error:', data);    // Kept the log to show the error details
        setResult('');
    }
    
  };
  
    return (
        <div className="bg-gray-50 pt-12 lg:pt-24 pb-24" id="contact">
             <h1 className="text-3xl font-bold mx-auto px-24 text-center">
        Contact <span className="text-rose-700">Us</span>
      </h1>
      <p className="text-sm px-6 mx-auto text-center mt-2">
      Have questions or need assistance? Reach out to us using the form below. We're here to respond promptly and support you.
      </p>
      <p className="text-center text-rose-700 mb-8 ">___________</p>

      <form className="max-w-2xl pt-8 mx-auto text-gray-600 md:border border-red-500 px-6 pb-6 rounded-lg" onSubmit={onSubmit} >
        <div className='flex flex-wrap'>
            <div className='w-full text-left md:w-1/2'>
            Your Name
            <input type="text" placeholder='Your Name' required className='w-full px-4 py-3 mt-2 border border-gray-300 rounded ' name='Name'/>
            </div>
            <div className='w-full pt-4 text-left md:w-1/2 md:pl-4 md:pt-0'>
            Your Email
            <input type="email" placeholder='Your Email' required className='w-full px-4 py-3 mt-2 border border-gray-300 rounded' name='Email'/>
            </div>
        </div>
        <div className="my-6 text-left">
            Message
            <textarea className='w-full h-48 px-4 py-3 mt-2 border border-gray-300 rounded resize-none' name="Message" placeholder='Write your Message....' required></textarea>
        </div>
        <button className="px-12 py-2 text-white bg-rose-600 rounded hover:bg-rose-900">{result ? result : 'Send Message'}</button>
       </form>
        </div>
    )
}

export default Contact