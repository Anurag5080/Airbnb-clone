import React from 'react'

const card = () => {
  return (
    <>
    <div className="card h-[360px] m-4 flex flex-col justify-between">
        <div className="image">
            <img src="https://img.freepik.com/free-photo/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302742.jpg?semt=ais_hybrid" alt="Homestay image" className='img h-[270px] w-[300px] object-cover rounded-2xl'/>
        </div>
        <div>
            <h5 className='font-semibold text-sm'>Mashobra, India</h5>
            <h5>Mountain views</h5>
            <h5>19-24 Oct</h5>
        </div>
        <div>
            <h5 className='text-sm'><span className='font-semibold'>₹15,200</span> night</h5>
        </div>
    </div>
    </>
  )
}

export default card