import React, { useState } from "react";

const StrawberryShake = ({
  cardClicked,
  setCardClicked,
  isMobile,
  cardInfo
}) => {
  const [stakeDetailsClicked, setStakeDetailsClicked] = useState(false);

  cardInfo[1].stakes = [
    {
      number: 1,
      amount: 1000
    },
    {
      number: 2,
      amount: 500
    }
  ];
  return (
    <div
      key={cardInfo[1].number}
      className="card"
      style={
        cardClicked === cardInfo[1].number && !isMobile
          ? { width: "450px" }
          : {}
      }
    >
      <img className="card-img" src={cardInfo[1].img} alt="cardtypeimg" />
      <div className="card-heading">
        {cardInfo[1].name}
      </div>
      <div className="card-row">
        <div
          className="card-column"
          style={
            cardClicked === cardInfo[1].number && !isMobile
              ? { flexDirection: "row-reverse" }
              : {}
          }
        >
          <div className="card-locking-period">
            {cardInfo[1].lockingPeriod} MONTHS LOCKING PERIOD
          </div>
          <div className="card-percentage">
            {cardInfo[1].percentage}
          </div>
        </div>
        {cardClicked === cardInfo[1].number
          ? <div className="card-row">
              <div className="card-stake-div">
                <input
                  type="number"
                  className="card-stake-input"
                  style={{
                    border: "2px solid",
                    borderColor: cardInfo[1].color
                  }}
                />
                <button
                  className="card-stake-button"
                  style={{
                    background: cardInfo[1].color,
                    border: "2px solid",
                    borderColor: cardInfo[1].color
                  }}
                >
                  STAKE
                </button>
              </div>
              <div
                className="card-stake-details"
                onClick={() => setStakeDetailsClicked(!stakeDetailsClicked)}
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
      {cardClicked === cardInfo[1].number && stakeDetailsClicked
        ? <div className="card-stakes">
            {cardInfo[1].stakes.length !== 0
              ? cardInfo[1].stakes.map((stake, index) => {
                  return (
                    <div className="card-stake">
                      <div className="card-stake-number">
                        Stake {stake.number}:
                      </div>
                      <div className="card-stake-middle">
                        <div className="card-stake-amount">
                          {stake.amount}
                        </div>
                        <button
                          className="card-stake-claim"
                          onClick={() =>
                            alert(
                              `Claiming ${stake.amount} from ${index + 1} Stake`
                            )}
                        >
                          Claim
                        </button>
                      </div>
                      <button
                        className="card-stake-unstake"
                        onClick={() =>
                          alert(
                            `Unstaking ${stake.amount} from ${index + 1} Stake`
                          )}
                      >
                        Unstake
                      </button>
                    </div>
                  );
                })
              : ""}
          </div>
        : ""}
      {cardClicked === cardInfo[1].number
        ? ""
        : <div className="card-column">
            <div className="card-subtext">
              Bonze Option for less time staking contract.
            </div>
            <button
              className="card-button"
              style={{ background: cardInfo[1].color }}
              onClick={() => {
                setCardClicked(cardInfo[1].number);
              }}
            >
              CLAIM NOW
            </button>
          </div>}
    </div>
  );
};

export default StrawberryShake;
