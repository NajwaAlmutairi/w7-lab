import React from 'react'

function RegForm() {
    return (
        <>
            {/* <div className='flex items-center justify-center h-screen bg-gray-100'>
                <div className='w-96 bg-white rounded-lg p-4'>
                    <div className='flex justify-center items-center mb-3'>
                        <img src={logo} alt="logo" className='h-6' />
                    </div>
                    <div className='flex justify-center items-center mb-3 mt-5'>
                        <h1 className="text-[#606060] text-2xl font-bold">Register a Character</h1>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                        <div> <label htmlFor="username" className='font-bold mb-4 text-sm text-[#606060]' > اسم الحساب </label>
                            <input className="w-full text-[#0f0f0f] py-2 px-3 border rounded-xl focus:outline-slate-200"
                                id="username"
                                type="text"
                                placeholder="أدخل اسم الحساب"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className='font-bold text-sm text-[#606060] mb-4' > كلمة المرور</label>
                            <input className="w-full text-[#0f0f0f] py-2 px-3 border rounded-xl focus:outline-slate-200"
                                id="password"
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='mt-3'></div>
                        {errorMessage && (
                            <div className="text-red-500 mb-2">
                                {errorMessage}
                            </div>
                        )}
                        <div className='flex justify-center items-center'>
                            <button className="bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none "
                                type="submit"
                            >
                                تسجيل دخول
                            </button>
                        </div>
                    </form>
                    <p className="text-[.9rem] text-center text-gray-600 mt-4 ">
                        ليس لديك حساب؟{' '}
                        <Link to={'/register'} className="text-blue-500 hover:text-blue-700">
                            أنشى حساب
                        </Link>
                    </p>
                </div>

            </div> */}

            <div className='flex items-center justify-center h-screen bg-gray-100 '>
                <div className='flex items-center '>
                    <div className='flex items-center justify-center'>
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F28740859%2FCharacter-Designs-Kids&psig=AOvVaw0G7l7K57M4el7twFzYf8ld&ust=1728288867007000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiS4dGn-YgDFQAAAAAdAAAAABAP" 
                        alt="image" 
                        className='w-14 h-7' />
                    </div>
                    <hr />
                    <div className='flex flex-col m-4 w-96 bg-white rounded-lg p-4' >
                        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                            <div> <label htmlFor="username" className='font-bold mb-4 text-sm text-[#606060]' > اسم الحساب </label>
                                <input className="w-full text-[#0f0f0f] py-2 px-3 border rounded-xl focus:outline-slate-200"
                                    id="username"
                                    type="text"
                                    placeholder="أدخل اسم الحساب"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className='font-bold text-sm text-[#606060] mb-4' > كلمة المرور</label>
                                <input className="w-full text-[#0f0f0f] py-2 px-3 border rounded-xl focus:outline-slate-200"
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='mt-3'></div>
                            {errorMessage && (
                                <div className="text-red-500 mb-2">
                                    {errorMessage}
                                </div>
                            )}
                            <div className='flex justify-center items-center'>
                                <button className="bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none "
                                    type="submit"
                                >
                                    تسجيل دخول
                                </button>
                            </div>
                        </form>
                    </div>

                </div>


            </div>
        </>
    )
}

export default RegForm