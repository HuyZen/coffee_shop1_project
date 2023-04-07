import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { member } from '../constant/dataAbout';
const MemberList = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='mb-[50px]'>
            <div className='flex gap-4' data-aos="fade-right" data-aos-duration="1000">
                    {
                        member.map((item, _) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.img} alt='img_member' className='object-cover object-center lg:h-[400px]' />
                                    <p className='mt-[30px] text-lg mb-[10px]'>{item.name}</p>
                                    <p className='text-xs font-bold tracking-widest text-gray-500'>{item.position}</p>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    );
}

export default MemberList;

