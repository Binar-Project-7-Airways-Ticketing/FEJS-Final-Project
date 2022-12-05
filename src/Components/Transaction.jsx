import React, { useState, useMemo } from 'react';
import { ContactsOutlined, ShoppingOutlined, UnorderedListOutlined, ArrowRightOutlined, ScheduleOutlined, DollarCircleOutlined } from '@ant-design/icons';
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
                  <Select options={options} value={value} onChange={changeHandler} placeholder='Country' />
                </div>
              </div>
              <div className='flex mb-2 w-full'>
                <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                  <input className='w-full p-2 focus:outline-none text-black placeholder:text-black' type="text" placeholder="No Telepon" />
                </div>
              </div>
            </div>
          </div>
          <div className='parent-b w-full bg-white p-6'>
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
              <div className='flex mb-2 w-full'>
                <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
                  <Select className='placeholder:text-black' options={options} value={value} onChange={changeHandler} placeholder="Country" />
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
            <div className='flex justify-between items-center mb-4 gap-4'>
              <div className='flex justify-start items-center mb-4 gap-4'>
                <span>
                  <ShoppingOutlined />
                </span>
                <h3 className='text-[20px] mt-2'>Bagasi</h3>
              </div>
              <div className='flex justify-start items-center gap-4'>
                <select>
                  <option >Select Extra Baggage</option>
                  <option >+5Kg x 1 (175000IDR)</option>
                  <option >+5Kg x 2 (350000IDR)</option>
                  <option >+5Kg x 3 (525000IDR)</option>
                  <option >+5Kg x 4 (700000IDR)</option>
                  <option >+5Kg x 5 (875000IDR)</option>
                  <option >+5Kg x 6 (1050000IDR)</option>
                </select>
              </div>
            </div>
          </div>
          <div className='parent-d w-full mt-6 flex justify-end'>
            <button className='block rounded-lg cursor-pointer justify-center h-[60px] w-[50%] bg-brand-yellow text-[#f9f9f9] border-0 font-[600] tracking-[2px]' type="submit">LANJUT PEMBAYARAN</button>
          </div>
        </div>

        <div className='booking-right'>
          <div className='w-full bg-white'>
            <div className='parent-a w-full bg-white p-6'>
              <div className='flex justify-start items-center mb-4 gap-4'>
                <h3 className='text-[20px] text-black mb-2'>Penerbangan</h3>
              </div>
              <div className='py-2'>
                <div className='flex w-full gap-8 mb-2 '>
                  <div className='flex w-full gap-4'>
                    <h3>Jakarta</h3>
                    <span>
                      <ArrowRightOutlined />
                    </span>
                    <h3>Makassar</h3>
                  </div>
                  <div>
                    <a href=''>Detail</a>
                  </div>
                </div>
                <div className='w-full my-[2rem]'>
                  <h3 className='text-[20px] text-black mb-4'>Kebijakan Tiket</h3>
                  <div className='flex justify-start items-center mb-4 gap-4'>
                    <span>
                      <DollarCircleOutlined />
                    </span>
                    <p className='mt-2'>Bisa Refund</p>
                  </div>
                  <div className='flex justify-start items-center mb-4 gap-4'>
                    <span>
                      <ScheduleOutlined />
                    </span>
                    <p className='mt-2'>Bisa Rescedhule</p>
                  </div>
                </div>
                <div className='flex w-full my-[2rem]'>
                  <div>
                    <h3 className='text-[20px] text-black mb-4'>Total Pembayaran</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}