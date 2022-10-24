import React from 'react';

const Button = ({children}) => {
    return (
        <button className='bg-orange-600 text-white font-[Poppins] py-2 px-6 md:ml-8 hover:bg-orange-400 duration-500 rounded'>{children}</button>
    );
};

export default Button;