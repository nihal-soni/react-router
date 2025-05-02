import React, { useEffect, useState } from 'react'
// import { Data } from 'react-router-dom'

function Github() {
   const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/nihal-soni')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    })


    return (
        <div className='p-4 m-4 bg-gray-600 text-amber-100'>
            <div className='flex justify-center'>
            Github Followers : {data.followers}
            </div>
            <div className='flex justify-center'>
            <img src={data.avatar_url} alt="" width={300} />
            </div>
        </div>
    )
}

export default Github