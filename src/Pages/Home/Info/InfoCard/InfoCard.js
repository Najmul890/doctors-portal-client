import React from 'react';

const InfoCard = ({img, title, bgClass}) => {
    return (
        <div class={`card lg:card-side text-white shadow-xl p-5  ${bgClass} `}>
            <figure class="pl-5" ><img src={img} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title"> {title} </h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                
            </div>
        </div>
    );
};

export default InfoCard;