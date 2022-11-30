import React from 'react';
import Countdown from 'react-countdown';
import Footer from './Footer';
import Navbar from './Navbar';

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <>
            <span className='flex justify-center items-center h-8 w-8 text-brand-nude bg-brand-yellow'>
                {hours}
            </span>
            <span className='flex justify-center items-center h-8 w-8 text-brand-nude bg-brand-yellow'>
                {minutes}
            </span>
            <span className='flex justify-center items-center h-8 w-8 text-brand-nude bg-brand-yellow'>
                {seconds}
            </span>
        </>
    }
};

export default function Payment() {
    return (
        <div className='bg-gray-200'>
            <Navbar />
            <div className='flex justify-center items-center pt-[80px] bg-brand-black'>
                <div className='flex my-2 gap-2 items-center'>
                    <h3 className='text-brand-nude'>Mohon selesaikan pesanan anda dalam </h3>
                    <Countdown
                        date={Date.now() + 900000}
                        renderer={renderer}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}
