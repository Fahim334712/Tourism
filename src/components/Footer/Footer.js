import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerDesign bg-info pt-4 pb-3">
            <h5 className="text-white fw-bold ">Join Our Social Media</h5><br />
            <i className="fab rafi fa-facebook"></i><i class="fab rafi fa-instagram"></i><i class="fab rafi fa-linkedin"></i><i class="fab rafi fa-twitter-square"></i><i class="fab rafi fa-youtube-square"></i><br />
            <p className="mt-2 fw-bold"> © copyright all rights reserved FahimKhan</p>
        </div>
    );
};

export default Footer;