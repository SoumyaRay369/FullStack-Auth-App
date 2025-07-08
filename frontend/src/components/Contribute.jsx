import { useEffect, useState } from "react";

export const Contribute = () => {
    const [messageFromServer, setMessageFromServer] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/contributions', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => setMessageFromServer(data.message))
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-100 flex flex-col items-center justify-center p-5">
            <div className="bg-white/80 rounded-xl shadow-2xl p-10 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-amber-600 mb-4">Welcome to the Contributions Page</h1>
                {messageFromServer ? (
                    <p className="text-lg text-gray-700 font-medium bg-amber-100 rounded-md p-4 shadow-inner">
                        {messageFromServer}
                    </p>
                ) : (
                    <p className="text-gray-500">Loading your contributions...</p>
                )}
            </div>
        </div>
    );
};
