import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Alert from './components/Alert';

function App() {
  const [data, setData] = useState([]);
  const api = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn';
  const [showAlert, setShowAlert] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [searchedValue, setSearchedValue] = useState('');

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    axios.get(api)
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  // const handleDelete = (id) => {
  //   <Alert />
  //   console.log(id)
  //   axios.delete(`${api}/${id}`)
  //   .then(() =>{
  //     setData(data.filter((ele)=>ele.id !==id));
  //   })

  // }

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowAlert(true);
  };

  const confirmDelete = () => {
    axios.delete(`${api}/${deleteId}`)
      .then(() => {
        setData(data.filter((ele) => ele.id !== deleteId));
        setShowAlert(false);
      });
  };

  const cancelDelete = () => {
    setShowAlert(false);
    setDeleteId(null);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchedValue.toLowerCase())
  );


  return (
    <>
      <div className='bg-gray-800'>
        <div className='flex items-center justify-center pt-6'>
          <div className='flex items-center gap-2'>
            <input type="search" value={searchedValue} placeholder='Search by name' onChange={(e) => setSearchedValue(e.target.value)}
              className="w-[40vw] p-3 pl-10 pr-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"

            />
            <Link to={'/reg'}>
              <button className='btn btn-circle bg-blue-400 min-h-7 h-9 w-20 hover:bg-blue-500 text-white border-none'>Add</button>
            </Link>
          </div>
        </div>
        <div className='flex justify-center items-center w-full pt-5'>
          <div className='flex justify-start flex-wrap gap-4 pt-5 w-[90%] max-sm:w-[100%] max-sm:justify-evenly'>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div key={item.id} className='flex flex-col hover:border-2 hover:border-slate-500 bg-slate-300 gap-2 w-[32%] max-sm:w-[47%] p-2'>
                  <div className='w-full h-48 max-sm:h-32 rounded-lg bg-slate-400'>
                    <img src={item.image} alt="image" className='rounded-lg w-full h-full' />
                  </div>
                  <hr />
                  <h1 className='text-center'>{item.name}</h1>
                  <div className='flex justify-center items-center gap-2 pt-3 pb-2'>
                    <Link to={'/reg'}>
                      <button className='btn btn-circle bg-blue-400 min-h-7 h-9 w-20 hover:bg-blue-500 text-white border-none'>Add</button>
                    </Link>
                    <button onClick={() => handleDelete(item.id)} className='btn btn-circle bg-red-500 min-h-7 h-9 w-20 hover:bg-red-700 text-white border-none'>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <h1 className='text-center text-red-500 pt-10'>Oops! No results found.</h1>
            )}
          </div>
        </div>
      </div>
      {!data &&
        <h1 className='text-center pt-60'> fetching data  ..... </h1>
      }
      {showAlert && (
        <Alert
          message="Are you sure you want to delete this item?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )
      }

    </>
  )
}

export default App
