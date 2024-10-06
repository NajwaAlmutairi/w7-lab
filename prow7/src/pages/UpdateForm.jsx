import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function UpdateForm() {
    const [url, setUrl] = useState('');
    const api = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn';
    const navigate = useNavigate();
    let { id } = useParams();


    const handleUpdate = () => {
        axios.put(`${api}/${id}`, {
            image: url
        })
            .then(function (response) {
                console.log(response);
                setUrl('');
                navigate("/");
            })
            .catch(function (error) {
                console.log(error);
                setErrorMessage('Error submitting the form');
            });
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-800">
                <div className='flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
                    <h2 className="text-xl font-semibold mb-4">Update URL</h2>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="url">URL</label>
                        <input
                            type="url"
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <button onClick={handleUpdate} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                        Update
                    </button>
                    <div className='flex justify-center items-center'>
                        <Link to={'/'}>
                            <button className='mt-2 w-16 bg-blue-400 min-h-7 h-9 rounded hover:bg-blue-500 text-white border-none'>
                                Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpdateForm