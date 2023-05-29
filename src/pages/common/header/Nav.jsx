/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";

import { ConnectButton } from '@rainbow-me/rainbowkit';


// import bsc from "../../images/icon/bsc-scan.svg"

const Nav = () => {




  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li>
          <a href="https://milkshakeswap.finance/">Home</a>
        </li>
        <li className="menu-item-has-children">
        
            Trade <FaAngleDown />
      
          <ul className="axil-submenu">
            <li>
              <a href="https://v2exchange.milkshakeswap.finance/#/swap" target="_parent">
                Exchange
              </a>
            </li>
            <li>
              <a href="https://v2exchange.milkshakeswap.finance/#/pool" target="_parent">
                Liquidity
              </a>
            </li>
          </ul>
        </li>
        <li>
        <a target="_parent" href="https://milkshakeswap.finance/farm" >Milkings</a>
        </li>
        <li>
        <a target="_parent" href="https://milkshakeswap.finance/pool" >Flavour Pool</a>
        </li>
        <li>
        <a target="_parent" href="https://staking.milkshakeswap.finance" >
                staking
              </a>
        </li>
        <li className="menu-item-has-children">
    
            Coming Soon <FaAngleDown />
        
          <ul className="axil-submenu">
            <li>
            <a target="_parent" href="https://milkshakeswap.finance/launchpad" >Launchpad</a>
            </li>
            <li>
            <a target="_parent" href="https://milkshakeswap.finance/nft-marketplace" >NFT MarketPlace</a>
            </li>
            <li>
            <a target="_parent" href="https://milkshakeswap.finance/m-el-dorado" >M El Dorado</a>
            </li>
          </ul>
        </li>
        <li>
        <ConnectButton showBalance={false} />
        </li>
      </ul>
      
    </nav>
  );
};

export default Nav;
