import React from 'react';
import logo from '../../assets/fairy-tales-logo.svg';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-primary text-base-content">
            <div>
                <img src={logo} alt="" />
                <p>Copyright: Fairy Tales Ltd.<br />Providing reliable tech since 2000</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <a className="link link-hover">Mail: fairytales@gmail.com</a>
                <a className="link link-hover">Phone: 01789093789</a>
                <a className="link link-hover">Address: Dhaka, Bangladesh</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;