import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messageFromServer, setMessageFromServer] = useState('');

    const handleSubmit = () => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
            credentials: 'include' // ensure cookie is set
        })
        .then(res => res.json())
        .then(data => setMessageFromServer(data.message));
    };

    return (
        <>
            <div className="flex justify-center p-5 bg-white/70 rounded-md text-2xl font-semibold">
                Welcome to the Login Page
            </div>
            <div className="h-screen bg-gradient-to-b from-yellow-50 to-amber-100 flex justify-center items-center">
                <div className="bg-white/70 rounded-xl p-8 shadow-2xl">
                    <div className="font-bold text-xl mb-3">
                        Please Enter Your Credentials
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <input type="text" placeholder="Enter your Email Id" className="p-3 rounded-md outline-amber-500 shadow-md" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Enter your Password" className="p-3 rounded-md outline-amber-500 shadow-md" onChange={(e) => setPassword(e.target.value)} />
                        <button className="font-semibold text-xl p-3 rounded-md bg-gradient-to-r from-amber-400 to-amber-500 cursor-pointer" onClick={handleSubmit}>
                            Submit
                        </button>

                        {messageFromServer && (
                            <>
                                <div className="text-green-600 font-semibold">{messageFromServer}</div>
                                {messageFromServer.includes("successfully logged in") && (
                                    <Link to="/contribute" className="font-semibold text-center p-3 rounded-md bg-gradient-to-r from-green-400 to-green-500 cursor-pointer text-white">
                                        Go to Contribute Page
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
