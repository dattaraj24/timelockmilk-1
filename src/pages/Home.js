import React, { useState } from "react";
import heroimg1 from "../assets/hero-img1.png";
import heroimg2 from "../assets/hero-img2.png";
import cardimg1 from "../assets/card-img1.png";
import cardimg2 from "../assets/card-img2.png";
import cardimg3 from "../assets/card-img3.png";
import VanillaShake from "./components/VanillaShake";
import StrawberryShake from "./components/StrawberryShake";
import BelgiumShake from "./components/BelgiumShake";

const Home = ({ isMobile }) => {
  const [cardClicked, setCardClicked] = useState(0);

  const cardsInfo = [
    {
      number: 1,
      img: cardimg1,
      name: "VANILLA SHAKE",
      lockingPeriod: 6,
      percentage: "11%",
      color: "#33CCCC",
      subText: "Bonze Option for less time staking contract."
    },
    {
      number: 2,
      img: cardimg2,
      name: "STRAWBERRY SHAKE",
      lockingPeriod: 12,
      percentage: "28%",
      color: "#231B59",
      subText: "Silver Option for bor better return staking contract."
    },
    {
      number: 3,
      img: cardimg3,
      name: "BELGIUM SHAKE",
      lockingPeriod: 18,
      percentage: "52%",
      color: "#E6028F",
      subText: "Gold Option for great return staking contract."
    }
  ];

  return (
    <div className="wrapper">
      <div className="heading" style={isMobile ? { fontSize: "36px" } : {}}>
        Time Locking Stacking Contract
      </div>
      <img
        className="hero-img1"
        style={isMobile ? { height: "200px" } : {}}
        src={heroimg1}
        alt="hero-img1"
      />
      <img
        className="hero-img2"
        style={isMobile ? { height: "60px" } : {}}
        src={heroimg2}
        alt="hero-img2"
      />
      <button className="button">OUR APP CLAIM DETAILS</button>
      <div
        className="cards"
        style={
          isMobile ? { flexDirection: "column" } : { flexDirection: "row" }
        }
      >
        <VanillaShake
          cardClicked={cardClicked}
          setCardClicked={setCardClicked}
          isMobile={isMobile}
          cardInfo={cardsInfo}
        />
        <StrawberryShake
          cardClicked={cardClicked}
          setCardClicked={setCardClicked}
          isMobile={isMobile}
          cardInfo={cardsInfo}
        />
        <BelgiumShake
          cardClicked={cardClicked}
          setCardClicked={setCardClicked}
          isMobile={isMobile}
          cardInfo={cardsInfo}
        />
      </div>
    </div>
  );
};

export default Home;
