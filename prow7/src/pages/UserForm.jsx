import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const UserForm = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [gender, setGender] = useState('male');
  const api = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn';
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post(api, {
      name: name,
      image: url,
      gender: gender
    })
      .then(function (response) {
        console.log(response);
        setName('');
        setUrl('');
        setGender('male');
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        setErrorMessage('Error submitting the form');

      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className='flex justify-between bg-zinc-500 w-[70vw] max-sm:flex-col '>
          <div className='flex flex-col gap-3 items-center justify-center'>
            <img src="https://finalspaceapi.com/api/character/avatar/quinn_ergon.jpg"
              alt="image"
              className='w-40 h-40' />
            <Link to={'/'}>
              <button className='btn btn-circle bg-blue-400 min-h-7 h-9 w-20 hover:bg-blue-500 text-white border-none'>Home</button>
            </Link>
          </div>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">User Form</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="url">URL</label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Gender</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1"
                />
                Female
              </label>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
