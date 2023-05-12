import React, { useState } from "react";
import heroimg1 from "../assets/hero-img1.png";
import heroimg2 from "../assets/hero-img2.png";
import cardimg1 from "../assets/card-img1.png";
import cardimg2 from "../assets/card-img2.png";
import cardimg3 from "../assets/card-img3.png";

const Home = ({ isMobile }) => {
  const [cardClicked, setCardClicked] = useState(0);
  const [stakeDetailsClicked, setStakeDetailsClicked] = useState(false);

  const cards = [
    {
      number: 1,
      img: cardimg1,
      name: "VANILLA SHAKE",
      lockingPeriod: 6,
      percentage: "11%",
      color: "#33CCCC",
      subText: "Bonze Option for less time staking contract.",
      stakes: [
        {
          number: 1,
          amount: 1000
        },
        {
          number: 2,
          amount: 500
        }
      ]
    },
    {
      number: 2,
      img: cardimg2,
      name: "STRAWBERRY SHAKE",
      lockingPeriod: 12,
      percentage: "28%",
      color: "#231B59",
      subText: "Silver Option for bor better ruturn staking contract.",
      stakes: []
    },
    {
      number: 3,
      img: cardimg3,
      name: "BELGIUM SHAKE",
      lockingPeriod: 18,
      percentage: "52%",
      color: "#E6028F",
      subText: "Gold Option for great return staking contract.",
      stakes: []
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
        {cards.map(card => {
          return (
            <div
              key={card.number}
              className="card"
              style={
                cardClicked === card.number && !isMobile
                  ? { width: "450px" }
                  : {}
              }
            >
              <img className="card-img" src={card.img} alt="cardtypeimg" />
              <div className="card-heading">
                {card.name}
              </div>
              <div className="card-row">
                <div
                  className="card-column"
                  style={
                    cardClicked === card.number && !isMobile
                      ? { flexDirection: "row-reverse" }
                      : {}
                  }
                >
                  <div className="card-locking-period">
                    {card.lockingPeriod} MONTHS LOCKING PERIOD
                  </div>
                  <div className="card-percentage">
                    {card.percentage}
                  </div>
                </div>
                {cardClicked === card.number
                  ? <div className="card-row">
                      <div className="card-stake-div">
                        <input
                          type="number"
                          className="card-stake-input"
                          style={{
                            border: "2px solid",
                            borderColor: card.color
                          }}
                        />
                        <button
                          className="card-stake-button"
                          style={{
                            background: card.color,
                            border: "2px solid",
                            borderColor: card.color
                          }}
                        >
                          STAKE
                        </button>
                      </div>
                      <div
                        className="card-stake-details"
                        onClick={() =>
                          setStakeDetailsClicked(!stakeDetailsClicked)}
                      >
                        Your Stake Details
                        {stakeDetailsClicked
                          ? <svg
                              width="20"
                              height="20"
                              viewBox="0 0 65 43"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.5 0L64.1099 42.75L0.890072 42.75L32.5 0Z"
                                fill="black"
                              />
                            </svg>
                          : <svg
                              width="20"
                              height="20"
                              viewBox="0 0 65 43"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.5 43L0.890072 0.250006L64.1099 0.25L32.5 43Z"
                                fill="black"
                              />
                            </svg>}
                      </div>
                    </div>
                  : ""}
              </div>
              {cardClicked === card.number && stakeDetailsClicked
                ? <div className="card-stakes">
                    {card.stakes.length !== 0
                      ? card.stakes.map(stake => {
                          return (
                            <div className="card-stake">
                              <div className="card-stake-number">
                                Stake {stake.number}:
                              </div>
                              <div className="card-stake-middle">
                                <div className="card-stake-amount">
                                  {stake.amount}
                                </div>
                                <button className="card-stake-claim">
                                  Claim
                                </button>
                              </div>
                              <button className="card-stake-unstake">
                                Unstake
                              </button>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                : ""}
              {cardClicked === card.number
                ? ""
                : <div className="card-column">
                    <div className="card-subtext">
                      Bonze Option for less time staking contract.
                    </div>
                    <button
                      className="card-button"
                      style={{ background: card.color }}
                      onClick={() => {
                        setCardClicked(card.number);
                      }}
                    >
                      CLAIM NOW
                    </button>
                  </div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
