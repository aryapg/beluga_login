import * as React from 'react';
import { auth } from '../fire';
import { sendPasswordResetEmail } from 'firebase/auth';
// import { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

function ForgotPassword({ setAuthState, darkMode, toggleDarkMode }) {
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [error, setError] = React.useState('');

    const handleResetPassword = () => {
        if (email === "") {
            setError("Please enter your email address.");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage("Password reset email sent! Check your inbox.");
                setError("");
            })
            .catch((err) => {
                setError(err.message);
                setMessage("");
            });
    };

    return (
        <div className={`flex w-full h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            {/* Left Side - Forgot Password Form */}
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className={`w-11/12 max-w-[700px] px-10 py-20 rounded-3xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border-2 shadow-lg`}>
                    <div className="flex justify-end">
                        <button
                            onClick={toggleDarkMode} // Use toggleDarkMode from props
                            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                        >
                            {darkMode ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-gray-700" />}
                        </button>
                    </div>
                    <h1 className='text-5xl font-semibold'>Forgot Password</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>
                        Enter your email address to reset your password.
                    </p>
                    <div className='mt-8'>
                        <div className='flex flex-col'>
                            <label className='text-lg font-medium'>Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full border-2 ${darkMode ? 'border-gray-700 bg-gray-700 text-white' : 'border-gray-100 bg-transparent'} rounded-xl p-4 mt-1`}
                                placeholder="Enter your email"
                            />
                        </div>
                        {message && <p className="text-green-500 mt-4">{message}</p>}
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button
                                onClick={handleResetPassword}
                                className={`active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-blue-500 rounded-xl text-white font-bold text-lg ${
                                    darkMode
                                      ? 'hover:bg-white hover:text-blue-500' // Dark mode hover effect
                                      : 'hover:bg-black hover:text-blue-500' // Light mode hover effect
                                  }`}
                            >
                                Send Reset Link
                            </button>
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='font-medium text-base'>Remember your password?</p>
                            <button
                                onClick={() => setAuthState('login')}
                                className='ml-2 font-medium text-base text-violet-500'
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Cybersecurity Animation */}
<div className={`hidden relative w-1/2 h-full lg:flex items-center justify-center ${darkMode ? 'bg-black' : 'bg-gray-200'}`}>
  {/* Red Circle - Starts fully in the unblurred part */}
  <div className="absolute w-60 h-60 bg-gradient-to-tr from-red-500 to-red-700 rounded-full animate-red-pop shadow-red-glow flex items-center justify-center">
    {/* Cross Mark */}
    <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </div>

  {/* Red Tagline - Appears with the red circle and disappears with it */}
  <div className="absolute top-[50%] text-white text-3xl font-bold animate-red-text-fade font-poppins">
    Stay Alert🚨 - Protect Your Digital World!
  </div>

  {/* Blue Circle - Now starts below blurred area and moves up fully */}
  <div className="absolute w-60 h-60 bg-gradient-to-tr from-cyan-500 to-blue-700 rounded-full animate-blue-pop shadow-blue-glow opacity-0 flex items-center justify-center">
    {/* Shield Icon */}
    <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  </div>

  {/* Blue Tagline - Appears after blue circle fully moves up */}
  <div className="absolute top-[50%] text-white text-3xl font-bold opacity-0 animate-blue-text-fade font-poppins">
    Use Beluga🐋 - Secure Your Digital World!🌐
  </div>
</div>
        </div>
    );
}

export default ForgotPassword;