import React, { useState, useMemo } from 'react';
import { ContactsOutlined, ShoppingOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Navbar from './Navbar';
import Footer from './Footer';
import Countdown from 'react-countdown';
import Select from 'react-select';
import countryList from 'react-select-country-list';

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

export default function Transaction() {

  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = value => {
    setValue(value)
  }

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
      <div className='booking-container'>
        <div className='booking-left'>
          <div className='parent-a w-full bg-white p-6'>
            <div className='left-header'>
              <span>
                <ContactsOutlined />
              </span>
              <h3>Detail Pemesan</h3>
            </div>
            <div className='left-content'>
              <div className='flex w-full gap-8 mb-2 '>
                <select className='border-brand-gray p-2 border-2 rounded-md' type="text">
                  <option value="Tuan">Tuan</option>
                  <option value="Nyonya">Nyonya</option>
                  <option value="Nona">Nona</option>
                </select>
                <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                  <input className='w-full p-2 focus:outline-none text-black placeholder:text-black' type="text" placeholder="Nama Lengkap" />
                </div>
              </div>
              <div className='flex mb-2 w-full'>
                <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                  <input className='w-full p-2 focus:outline-none text-black placeholder:text-black' type="text" placeholder="Email" />
                </div>
              </div>
              <div className='flex mb-2 w-full'>
                <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                <Select options={options} value={value} onChange={changeHandler} />
                </div>
              </div>
              <div className='flex mb-2 w-full'>
                <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                  <input className='w-full p-2 focus:outline-none text-black placeholder:text-black' type="text" placeholder="No Telepon" />
                </div>
              </div>
            </div>
          </div>
          <div className='parent-b w-full bg-white p-6 mt-6'>
            <div className='left-header'>
              <span>
                <ContactsOutlined />
              </span>
              <h3>Detail Penumpang</h3>
            </div>
            <div className='left-content'>
              <div className='flex w-full gap-8 mb-2 '>
                <select className='border-brand-gray p-2 border-2 rounded-md' type="text">
                  <option value="Tuan">Tuan</option>
                  <option value="Nyonya">Nyonya</option>
                  <option value="Nona">Nona</option>
                </select>
                <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                  <input className='w-full p-2 focus:outline-none text-black placeholder:text-black' type="text" placeholder="Nama Lengkap" />
                </div>
              </div>
              <div className='flex mb-2 w-full'>
                <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                  <input className='w-full p-2 focus:outline-none text-black placeholder:text-black' type="text" placeholder="Email" />
                </div>
              </div>
              <div className='flex w-full'>
                <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                  <input className='w-full p-2 focus:outline-none text-black placeholder:text-black' type="text" placeholder="No Telepon" />
                </div>
              </div>
            </div>
          </div>
          <div className='parent-c w-full bg-white p-6 mt-6'>
            <div className='left-header'>
              <span>
                <UnorderedListOutlined />
              </span>
              <h3>Extra Fasilitas</h3>
            </div>
            <div className='left-content'>
              <span className='p-2'>
                <ShoppingOutlined />
              </span>
              <h3>Bagasi</h3>
              <p></p>
            </div>
          </div>
          <button className='flex cursor-pointer justify-center h-[60px] w-[50%] p-4 bg-brand-yellow text-[#f9f9f9] border-0 font-[600] tracking-[2px] m-4' type="submit">LANJUT PEMBAYARAN</button>
        </div>
        <div className='booking-right'>
        
        </div>
      </div>
      <Footer />
    </div>
  )
}
