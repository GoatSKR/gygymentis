import React, { useEffect, useState } from 'react';

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsVisible(scrollTop > 100); 
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`fixed bottom-8 right-8 bg-white rounded-3xl shadow-md py-[1px] px-[10px] text-black text-2xl hover:bg-gray-100 z-50 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={scrollToTop}
        >
            ↑
        </button>
    );
};
export default Scroll;
