import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from './Context';

function Home() {
    const { username, setUsername, users } = useGlobalContext()

    return (
        <div className='h-[100vh]  bg-black  w-[100vw] font-[montserrat] overflow-x-hidden flex flex-col justify-around items-center'>


            <form action="" className='flex justify-center '>
                <input type="text" className='w-[100%] mt-4 p-3 rounded-xl outline-none' value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='Enter your Username' />
            </form>
            {

                users.message === 'Not Found' ?
                    <div className='w-[80%] h-[100px]  flex  items-center justify-center'>
                        <div className='container flex w-[80%] bg-white rounded-lg overflow-hidden'>
                            <h1 className='p-2'>No user Found</h1>
                        </div>
                    </div>
                    :
                    <div className="flip w-[400px] h-[400px] text-center transition-transform duration-700" style={{ perspective: "1000px" }}>
                        <div className="flip-content w-[100%] h-[100%] transition-transform duration-700 " style={{ transformStyle: "preserve-3d" }}>
                            <div className="flip-front">
                                <img src={users.avatar_url} />
                            </div>
                            <div className="flip-back">
                                <h3 className='font-extrabold text-2xl mt-8'>{users.login}</h3>
                                <h3 className='font-extrabold'>No. of public repos {users.public_repos}</h3>
                                <h3 className='font-extrabold'>No. of public gists {users.public_gists}</h3>
                                <h3 className='font-extrabold '>Profile created at in time {users.created_at}</h3>

                            </div>
                        </div>
                    </div>


            }
        </div>


    )
}

export default Home
