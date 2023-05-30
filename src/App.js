import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, useNetwork, useProvider, useSigner, WagmiConfig, } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, bsc,bscTestnet} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// Css Import
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/app.scss";
import "./assets/scss/style.scss";
import "./assets/scss/responsive.scss";

const { chains, provider,webSocketPublicClient  } = configureChains(
  [bsc],
  [
   
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  function detectMobile() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some(toMatchItem => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log(detectMobile());
    setIsMobile(detectMobile());
  }, [isMobile]);

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
      <div className="wrapper">
      <BrowserRouter basename="/stake">
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/stake" element={<Home isMobile={isMobile} />} />
        </Routes>
      </BrowserRouter>
    </div>
    </RainbowKitProvider>
    </WagmiConfig>
      
  );
}

export default App;
