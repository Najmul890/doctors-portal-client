import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center' >
            <div className='flex-1 hidden lg:block' >
                <img className='mt-[-130px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5 lg:p-0' >
                <h3 className="text-xl text-primary">Appointment</h3>
                <h2 className="text-3xl text-white">Make An Appointment Today</h2>
                <p className='text-white mt-5' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, laudantium praesentium corrupti ea ex est esse quaerat eveniet ut distinctio nostrum id quos animi similique suscipit voluptates ullam deserunt vitae maiores nobis ipsam? Ad reiciendis est, facilis quos ea magni!</p>
                <PrimaryButton>Make Appointment</PrimaryButton>
            </div>
        </div>
    );
};

export default MakeAppointment;