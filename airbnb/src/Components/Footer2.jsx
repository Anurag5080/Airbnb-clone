import React from 'react'

const Footer2 = () => {
    return (
        <>
            <div className="footer2 pl-12 pr-12 pt-8 pb-8 flex justify-between items-center bg-zinc-100">
                <div className='a text-sm flex items-center gap-3 w-3/4'>
                    <h5>&copy; 2024 Airbnb, Inc.</h5>
                    <span className='text-xl'>·</span>
                    <h5>Privacy</h5>
                    <span className='text-xl'>·</span>
                    <h5>Terms</h5>
                    <span className='text-xl'>·</span>
                    <h5>Sitemap</h5>
                    <span className='text-xl'>·</span>
                    <h5>Company details</h5>
                </div>
                <div className='b flex items-center justify-between w-1/4 font-semibold text-sm'>
                    <div className='b1 flex gap-3'>
                        <div className='b11'>
                            <img src="/world.png" alt="Globe logo" className='h-5' />
                        </div>
                        <div className='b12'>
                            <h5>English(IN)</h5>
                        </div>
                    </div>
                    <div className='b2'>
                        <h5>₹ INR</h5>
                    </div>
                    <div className='b3 flex  gap-6'>
                        <img src="/facebook.png" alt="Facebook logo" className='h-7' />
                        <img src="/twitter.png" alt="Twitter logo" className='h-7' />
                        <img src="/instagram.png" alt="Instagram logo" className='h-7' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer2