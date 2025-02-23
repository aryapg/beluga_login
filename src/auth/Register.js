import * as React from 'react';
import { auth, db } from '../fire';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';

function Register({ setAuthState, setUser, darkMode, toggleDarkMode }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = React.useState('');

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const user = result.user;
                await setDoc(doc(db, "gsign", user.uid), {
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid,
                    provider: "Google",
                    lastLogin: new Date().toISOString(),
                });
                setUser(user.email);
                setAuthState("home");
                redirectToMainPage();
            })
            .catch((err) => alert(err.message));
    };

    const onSignUpHandle = () => {
        if (email === "" || password === "" || confirmPassword === "") {
            setError("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await setDoc(doc(db, "nsign", user.uid), {
                    email: user.email,
                    uid: user.uid,
                    lastLogin: new Date().toISOString(),
                });
                setUser(user.email);
                setAuthState('home');
                redirectToMainPage();
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    const redirectToMainPage = () => {
        window.location.href = "https://beluga-main-page.vercel.app/";
    };

    return (
        <div className={`flex w-full h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            {/* Left Side - Register Form */}
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
                    <h1 className='text-5xl font-semibold'>Register</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Welcome! Please enter your details.</p>
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
                        <div className='flex flex-col mt-4 relative'>
                            <label className='text-lg font-medium'>Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full border-2 ${darkMode ? 'border-gray-700 bg-gray-700 text-white' : 'border-gray-100 bg-transparent'} rounded-xl p-4 mt-1`}
                                placeholder="Enter your password"
                                type={showPassword ? "text" : "password"}
                            />
                            <span
                                className="absolute right-4 top-12 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                            </span>
                        </div>
                        <div className='flex flex-col mt-4 relative'>
                            <label className='text-lg font-medium'>Confirm Password</label>
                            <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={`w-full border-2 ${darkMode ? 'border-gray-700 bg-gray-700 text-white' : 'border-gray-100 bg-transparent'} rounded-xl p-4 mt-1`}
                                placeholder="Confirm your password"
                                type={showPassword ? "text" : "password"}
                            />
                        </div>
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button
                                onClick={onSignUpHandle}
                                className={`active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-blue-500 rounded-xl text-white font-bold text-lg ${
                                    darkMode
                                    ? 'hover:bg-white hover:text-blue-500' // Dark mode hover effect
                                    : 'hover:bg-black hover:text-blue-500' // Light mode hover effect
                                  }`}
                            >
                                Register
                            </button>
                            <button
                                onClick={handleGoogleLogin}
                                className={`flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 rounded-xl font-semibold text-lg border-2 ${
                                    darkMode
                                        ? 'border-gray-100 text-gray-700 hover:bg-white hover:text-black'
                                        : 'border-gray-100 text-gray-700 hover:bg-black hover:text-white'
                                }`}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335" />
                                    <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853" />
                                    <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2" />
                                    <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05" />
                                </svg>
                                Sign up with Google
                            </button>
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='font-medium text-base'>Already have an account?</p>
                            <button
                                onClick={() => setAuthState('login')}
                                className='ml-2 font-medium text-base text-violet-500'
                            >
                                Sign in
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
                <div className={`absolute top-[50%] text-3xl font-bold animate-red-text-fade font-poppins ${darkMode ? 'text-white' : 'text-red-900'}`}>
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
                <div className={`absolute top-[50%] text-3xl font-bold opacity-0 animate-blue-text-fade font-poppins ${darkMode ? 'text-white' : 'text-blue-900'}`}>
                    Use Beluga🐋 - Secure Your Digital World!🌐
                </div>
            </div>
        </div>
    );
}

export default Register;
