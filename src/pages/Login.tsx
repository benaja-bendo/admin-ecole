import React, {useState} from "react";
import {Link} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // const history = useHistory();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email, password);
        // try {
        //     await firebase.auth().signInWithEmailAndPassword(email, password);
        //     history.push('/');
        // } catch (error) {
        //     setError(error.message);
        // }
    };

    return (
        <div className="login">
            <div className="container">
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button type="submit">Sign In</button>
                </form>
                <p>{error}</p>
                <p>
                    Don't have an account?{" "}
                    <Link to="/signup" className="login__register">
                        Register Now
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;