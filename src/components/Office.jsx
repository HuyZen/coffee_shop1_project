import React from 'react';

export const OfficeFirst = ({images}) => {
    return (
        <div className=''>
                    <img src={images} alt="unitedOffice" className='lg:h-[300px]'/>
                    <h2 className='mb-2 text-xs font-bold tracking-widest text-gray-500 mt-7'>UNITED KINGDOM</h2>
                    <ul>
                        <li>Canary Wharf, London</li>
                        <li className='uppercase'>Jubilee Place</li>
                        <li>London</li>
                    </ul>
                    <p className='mb-2 text-xs font-bold tracking-widest text-gray-500 mt-7'>OPENING TIMES</p>
                    <ul>
                        <li>Mon - Fri 08:00 to 22:00</li>
                        <li>Sat - 09:00 to 20:00</li>
                        <li>Sun - 12:00 to 18:00</li>
                    </ul>
                </div>
    );
}

export const OfficeSecond = ({images}) => {
    return (
        <div className=''>
                    <img src={images} alt="unitedOffice" className='lg:h-[300px]'/>
                    <h2 className='mb-2 text-xs font-bold tracking-widest text-gray-500 mt-7'>UNITED KINGDOM</h2>
                    <ul>
                        <li>West Street, London</li>
                        <li className='uppercase'>MaryLebone</li>
                        <li>London</li>
                    </ul>
                    <p className='mb-2 text-xs font-bold tracking-widest text-gray-500 mt-7'>OPENING TIMES</p>
                    <ul>
                        <li>Mon - Fri 08:00 to 22:00</li>
                        <li>Sat - 09:00 to 20:00</li>
                        <li>Sun - 12:00 to 18:00</li>
                    </ul>
                </div>
    );
}

