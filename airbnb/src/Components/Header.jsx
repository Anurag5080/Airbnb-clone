import React from 'react'

const header = () => {
    return (
        <>
            <div className="main flex flex-col justify-center items-center  w-screen mt-1 pl-12 pr-12">
                <div className='a w-full h-1/2 flex justify-between align-text-bottom items-center mt-6'>
                    <div className='a1'>
                        <img src='/airbnb.svg' alt='airbnb logo' className='h-11' />
                    </div>
                    <div className='a2 flex justify-center items-center flex-row gap-10 w-1/3'>
                        <h5 className='font-semibold'>Stays</h5>
                        <h5>Experiences</h5>
                    </div>
                    <div className='a3 flex gap-8 justify-between items-center'>
                        <div className='a31 font-[580] text-sm'>
                            Airbnb your home
                        </div>
                        <div className='a32'>
                            <img src="/world.png" alt="Globe logo" className='h-5' />
                        </div>
                        <div className='a33 h-16 flex justify-center items-center gap-4 border-gray-400 rounded-full border-[1px] p-3 hover:shadow-md ease-in-out overflow-hidden'>
                            <div>
                                <img src="/menu.png" alt="Menu logo" className='h-7' />
                            </div>
                            <div>
                                <img src="/user.png" alt="User logo" className='h-10' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='b w-[65vw] flex justify-center items-center border-gray-200 rounded-full border-[0.5px] pt-3 pb-3 pl-10 pr-3 mt-5 shadow-xl'>
                    <div className='b1 w-1/3'>
                        <h5 className='font-semibold text-sm'>Where</h5>
                        <h5>Search destinations</h5>
                    </div>
                    <span className='w-[0.5px] h-[35px] bg-gray-400'></span>
                    <div className='b2 flex justify-around items-center w-1/3'>
                        <div className='b21'>
                        <h5 className='font-semibold text-sm'>Check in</h5>
                        <h5>Add dates</h5> 
                        </div>
                        <span className='w-[0.5px] h-[35px] bg-gray-400'></span>
                        <div className='b22'>
                        <h5 className='font-semibold text-sm'>Check out</h5>
                        <h5>Add dates</h5> 
                        </div>
                    </div>
                    <span className='w-[0.5px] h-[35px] bg-gray-400'></span>
                    <div className='b3 flex justify-between items-center w-1/3 pl-7'>
                        <div className="b31">
                        <h5 className='font-semibold text-sm'>Who</h5>
                        <h5>Add guests</h5> 
                        </div>
                        <div className="b32">
                            <img src="/search.png" alt="Search logo" className='h-16'/>
                        </div>
                    </div>
                </div>
                <span className='w-[100vw] h-[0.5px] bg-gray-300 mt-8'></span>
            </div>
            
        </>
    )
}

export default header