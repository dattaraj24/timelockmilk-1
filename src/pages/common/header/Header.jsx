import { useContext,useEffect } from "react";
import Logo from './../../../elements/logo/Logo3.jsx';
import Nav from "../../common/header/Nav";
import StickyHeader from "./StickyHeader";
import { ConnectButton } from '@rainbow-me/rainbowkit';
// import useFetch2 from "../useFetch";


const Header = () => {



  // console.log(milk3,"----------------------------------------------------")





  const sticky = StickyHeader(100);

  return (
    <>
      <header className="header axil-header header-style-1">
        <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
          <div className="container">
            <div className="header-navbar">
              <div className="header-logo">
                <Logo
                  limage="/images/logo.webp"
                  dimage="/images/logo.webp"
                  simage="/images/logo.webp"
                />
               
              </div>
              <div className="header-main-nav">
                {/* <UnlockButton/> */}
                <Nav />
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                  <ConnectButton showBalance={false} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
