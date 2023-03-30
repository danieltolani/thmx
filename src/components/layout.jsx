import React from "react";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/layout.css'

const CustomNavLink = ({ to, ...props }) => {
    let activeStyle = {
      textDecoration: 'underline',
      // backgroundPosition: '0% 50%',
      // backgroundImage: 'linear-gradient(93.55deg, #f2059f .2%, #0ecfe5 88.67%)', webkitBackgroundClip: 'text',
      // webkitTextFillColor: 'transparent',
      // backgroundClip: 'text'
      // color: '#444444',
    };
  
    return (
      <NavLink
        style={({ isActive }) =>
          isActive ? activeStyle : { textDecoration: 'none', }
        }
        to={to}
        end
        {...props}
      />
    );
  };


const Layout = () => {

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth)
  }

  window.addEventListener('resize', handleResize)

  }, [screenSize]);



    return (
      <section className="nav-section">
        <nav className="nav-links">
            {screenSize > 890 && <svg xmlns="http://www.w3.org/2000/svg" width="103" height="30" fill="none"><path fill="url(#a)" d="M13.71.004h5.605L12.38 9.81l3.217 4.564-2.734 3.878-3.214-4.559-3.884 5.51-5.59.002 6.68-9.477L0 .004 5.464 0l4.124 5.851L13.71.004Z"/><path fill="url(#b)" d="m9.555 25.735 9.292-13.183 5.455.007L12.01 30l-5.302-.005-6.67-9.463 5.853.007 3.663 5.197Z"/><path fill="#000" fill-opacity=".2" d="m9.555 25.735 9.292-13.183 5.455.007L12.01 30l-5.302-.005-6.67-9.463 5.853.007 3.663 5.197Z"/><path fill="#fff" d="m45.352 5.805-5.336-.18-3.63 5.152-3.436-4.943h-5.998l6.458 9.164-7 9.827h5.535l4.067-5.77 4.39 5.77h5.92l-6.947-9.856 5.977-9.164Zm10.839 19.02 5.004-13.444h-4.733l-2.924 8.35h-.12l-2.924-8.35H45.37l5.003 13.444h5.818Zm6.27-13.444v13.444h4.883V11.38H62.46Zm-.03-1.266h4.943v-4.28H62.43v4.28Zm17.995 1.417c-.332-.271-1.055-.513-1.869-.513-1.779 0-3.195 1.236-3.677 2.743v-2.38h-4.884v13.443h4.884v-6.15c0-2.26 1.115-3.104 2.924-3.104.934 0 1.657.18 2.32.572l.302-4.611Zm8.983 7.686c0 1.748-1.116 2.773-2.503 2.773-.813 0-1.356-.452-1.356-1.145 0-.874.694-1.236 1.87-1.477l1.989-.362v.211Zm4.792-2.924c0-3.737-2.622-5.275-6.179-5.275-4.04 0-6.24 2.05-6.662 5.004l4.522.301c.21-.994.754-1.687 1.839-1.687 1.175 0 1.688.662 1.688 1.778v.21l-3.768.634c-2.924.512-4.793 1.628-4.793 4.22 0 2.291 1.718 3.648 4.34 3.648 2.14 0 3.678-.815 4.462-2.382.452 1.537 1.748 2.381 3.406 2.381 1.387 0 2.351-.392 3.045-.873V21.66a2.78 2.78 0 0 1-1.086.21c-.512 0-.814-.3-.814-.994v-4.582Zm3.316-10.46v18.99h4.883V5.835h-4.883Z"/><defs><linearGradient id="a" x1=".008" x2="19.322" y1="9.609" y2="9.593" gradientUnits="userSpaceOnUse"><stop stop-color="#0ECFE5"/><stop offset=".459" stop-color="#5F17A7"/><stop offset="1" stop-color="#F2059F"/></linearGradient><linearGradient id="b" x1=".031" x2="24.154" y1="21.018" y2="21.421" gradientUnits="userSpaceOnUse"><stop stop-color="#0ECFE5"/><stop offset=".459" stop-color="#5F17A7"/><stop offset="1" stop-color="#F2059F"/></linearGradient></defs></svg>}
            {/* {screenSize <= 890 && <svg className="brand-logo" xmlns="http://www.w3.org/2000/svg" width="42" height="38" fill="none"><g filter="url(#a)"><path fill="url(#b)" d="M22.393 6.632h-2.8v1.322h2.8V6.632Z"/><path fill="url(#c)" d="M24.492 9.276h-6.998v1.322h6.998V9.276Z"/><path fill="url(#d)" d="M9.097 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#e)" d="M11.896 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#f)" d="M14.695 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#g)" d="M17.494 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#h)" d="M20.293 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#i)" d="M23.092 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#j)" d="M25.891 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#k)" d="M28.69 18.53h-1.399v1.322h1.4V18.53Z"/><path fill="url(#l)" d="M31.49 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#m)" d="M34.289 18.53h-1.4v1.322h1.4V18.53Z"/><path fill="url(#n)" d="M15.395 27.783h-1.4v1.322h1.4v-1.322Z"/><path fill="url(#o)" d="M22.393 23.157v7.931c0 .397.28.661.7.661h9.796c.42 0 .7-.264.7-.66v-7.932c0-.397-.28-.661-.7-.661h-9.797c-.42 0-.7.265-.7.66Zm1.4 4.627h3.498v2.643h-3.499v-2.643Zm4.898 2.643v-2.643h3.498v2.643h-3.498Zm3.498-3.965h-3.498v-2.644h3.498v2.643Zm-4.898-2.644v2.643h-3.499v-2.643h3.499Z"/><path fill="url(#p)" d="M39.187 35.715v-1.983c0-.396-.28-.66-.7-.66h-1.4V17.207h2.1c.42 0 .7-.265.7-.661V14.1a.59.59 0 0 0-.28-.529l-5.318-3.701V2.005c0-.396-.28-.66-.7-.66H27.99c-.42 0-.7.264-.7.66v2.908L21.413.815c-.28-.198-.56-.198-.84 0L2.87 13.242H2.8v.066l-.42.264a.59.59 0 0 0-.28.53v2.445c0 .396.28.66.7.66h2.1v15.864h-1.4c-.42 0-.7.265-.7.661v1.983H0v1.322h41.987v-1.322h-2.8ZM32.89 2.666v.661H28.69v-.66h4.2ZM28.69 4.65h4.2v4.23l-4.2-2.974V4.649ZM3.5 14.564h27.99v-1.322H5.18L20.992 2.138l17.494 12.294v1.454H3.498v-1.322Zm2.799 2.644h29.39V33.07H18.194v-9.253h1.4v-1.322H7.696v1.322h1.4v9.253h-2.8V17.208Zm4.198 6.61h6.298v9.253h-6.298v-9.253ZM4.2 35.715v-1.322h33.589v1.322H4.197Z"/></g><defs><linearGradient id="b" x1="20.11" x2="21.826" y1="6.773" y2="6.867" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="c" x1="18.785" x2="23.008" y1="9.417" y2="9.992" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="d" x1="7.955" x2="8.815" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="e" x1="10.755" x2="11.614" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="f" x1="13.553" x2="14.413" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="g" x1="16.353" x2="17.213" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="h" x1="19.152" x2="20.011" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="i" x1="21.951" x2="22.811" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="j" x1="24.75" x2="25.61" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="k" x1="27.549" x2="28.409" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="l" x1="30.348" x2="31.208" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="m" x1="33.147" x2="34.007" y1="18.671" y2="18.694" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="n" x1="14.254" x2="15.113" y1="27.924" y2="27.948" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="o" x1="24.457" x2="31.334" y1="23.483" y2="23.697" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><linearGradient id="p" x1="7.743" x2="33.532" y1="4.546" y2="5.312" gradientUnits="userSpaceOnUse"><stop stop-color="#DC3E88"/><stop offset=".419" stop-color="#B840AE"/><stop offset="1" stop-color="#843FE8"/></linearGradient><filter id="a" width="45.986" height="40.371" x="0" y=".667" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="22"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.376471 0 0 0 0 0.376471 0 0 0 0 0.376471 0 0 0 0.15 0"/><feBlend in2="shape" result="effect1_innerShadow_1730_598"/></filter></defs></svg>} */}

            <div className='nav-routes-container'>
                <CustomNavLink className='side-bar-link' to='/' >About</CustomNavLink>
                <CustomNavLink className='side-bar-link' to='/place-to-stay' >Info</CustomNavLink>
                <CustomNavLink className='side-bar-link' to='/NFTS' >Contact</CustomNavLink>
            </div>

            {/* <div className="nav-rhs">
              <button className="button">connect wallet</button>
              <div className="menu-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none"><path stroke="#292D32" stroke-linecap="round" stroke-width="2" d="M4.5 10.5h27M4.5 18h27M4.5 25.5h27"/></svg>
              </div>
            </div> */}
            
        </nav>
      </section>   
    )
}

export default Layout;