import * as React from 'react';
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import Home from './pages/Home';
import { auth } from './fire';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
    const [user, setUser] = React.useState(null);
    const [authState, setAuthState] = React.useState(null);
    const [darkMode, setDarkMode] = React.useState(() => {
        // Retrieve dark mode state from local storage
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    });

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        // Save dark mode state to local storage
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    };

    React.useEffect(() => {
        const unSubscribeAuth = onAuthStateChanged(auth, async (authenticatedUser) => {
            if (authenticatedUser) {
                setUser(authenticatedUser.email);
                setAuthState('home');
            } else {
                setUser(null);
                setAuthState('login');
            }
        });

        return unSubscribeAuth;
    }, [user]);

    if (authState === null) return <div className='font-bold text-center text-5xl'>loading...</div>;
    if (authState === 'login') return <Login setAuthState={setAuthState} setUser={setUser} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
    if (authState === 'register') return <Register setAuthState={setAuthState} setUser={setUser} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
    if (authState === 'forgotPassword') return <ForgotPassword setAuthState={setAuthState} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
    if(user) return <Home user={user} setAuthState={setAuthState} setUser={setUser}/>
}

export default App;