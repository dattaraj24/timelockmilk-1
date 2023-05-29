import React, { useState,useEffect } from "react";
import {ethers} from "ethers"
import { erc20ABI } from "wagmi";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect } from 'wagmi'


const StrawberryShake = ({
  cardClicked,
  setCardClicked,
  isMobile,
  cardInfo
}) => {
  const [stakeDetailsClicked, setStakeDetailsClicked] = useState(false);
  const { connector: activeConnector, isConnected } = useAccount()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [stakedAmount, setStakedAmount] = useState([]);
  const [count, setCount] = useState(0);
  const [balance , setbalance] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isclaim, setIsClaimable] = useState([]);




  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  


  const timelockABI =[{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_stakingDuration","type":"uint256"},{"internalType":"uint256","name":"_apy","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Unstaked","type":"event"},{"inputs":[],"name":"apy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getpools","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"poolindex","type":"uint256"}],"name":"getpoolsinfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getreward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"poolindex","type":"uint256"}],"name":"getrewardinfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gettokenbalance","outputs":[{"internalType":"uint256","name":"_rewards","type":"uint256"},{"internalType":"uint256","name":"staked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"gettotalreward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"poolindex","type":"uint256"}],"name":"isClaimable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"topUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolIndex","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userPools","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"}],"stateMutability":"view","type":"function"}]
  

  const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const getRewards =async () => {
  const address = await signer.getAddress();
  const timelockContract = new ethers.Contract("0x9f5C648156C711f7D07B82cF8E30D698f81360cd", timelockABI, signer);
  const _reward = await timelockContract.getpools(address);
  const reward = ethers.BigNumber.from(_reward).toString()
  console.log(reward)
  setCount(reward)

}
const getBalance = async () => {
  const address = await signer.getAddress();
  const tokenContract = new ethers.Contract("0xc9bcf3f71e37579a4a42591b09c9dd93dfe27965", erc20ABI, signer);
  const balance = await tokenContract.balanceOf(address);
  
  const milk = ethers.utils.formatUnits(balance, 18);
  setbalance(milk);
}

async function getUserPools() {
  const address = await signer.getAddress();
  const timelockContract = new ethers.Contract(
    "0x2d2b22Ce59487f2B32928659F9EBd8D0EAb9E244",
    timelockABI,
    signer
  );

  const amounts = await Promise.all(
    Array.from({ length: count }).map((_, index) =>
      timelockContract.getpoolsinfo(address, index),
     
    )
  );

  const claimable = await Promise.all(
      Array.from({ length: count }).map((_, index) =>
         timelockContract.isClaimable(address, index)
      )
    );

  const parsedAmounts = amounts.map((amount) =>
    ethers.utils.formatUnits(amount.toString(), 18)
  );


  setIsClaimable(claimable);
  setStakedAmount(parsedAmounts);
}
useEffect( () => {



  const fetch = async () => {
 await getRewards()
 await  getBalance()
await getUserPools()
  }
    
  if(isConnected){
    fetch()
    }
  



}, [count]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleUnstake = () => {
    setStakedAmount(0);
  };




   const stake = async (amount) => {
    const timelockContract = new ethers.Contract("0x9f5C648156C711f7D07B82cF8E30D698f81360cd", timelockABI, signer);
    const tokencontract = new ethers.Contract("0xc9bcf3f71e37579a4a42591b09c9dd93dfe27965", erc20ABI, signer);
    const approve = await tokencontract.approve("0x9f5C648156C711f7D07B82cF8E30D698f81360cd" , amount);
    await approve.wait()
    alert("approved")
    const tx = await timelockContract.stake(amount);
    await tx.wait();
    alert("Staked", amount, "tokens");
  }
  
  // Function to unstake tokens from a specific pool index
  const unstake =async (poolIndex) => {
    const timelockContract = new ethers.Contract("0x9f5C648156C711f7D07B82cF8E30D698f81360cd", timelockABI, signer);
    const tx = await timelockContract.unstake(poolIndex);
    await tx.wait();
    alert("Unstaked tokens from pool", poolIndex);
  }


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
      {cardClicked === cardInfo[1].number && isConnected
        ?
          <div className="card-row">
            <div className="card-stake-div">
              <input
                type="number"
                className="card-stake-input"
                style={{
                  border: "2px solid",
                  borderColor: cardInfo[1].color
                }}
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                className="card-stake-button"
                style={{
                  background: cardInfo[1].color,
                  border: "2px solid",
                  borderColor: cardInfo[1].color
                }}
                onClick={
                  () => stake(ethers.utils.parseUnits(inputValue, 18))
                }
              >
                STAKE
              </button>
            </div>
            <p className="card-stake-amount">milk  :{balance}</p>
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
        : <ConnectButton showBalance={false} />}
    </div>
    {cardClicked === cardInfo[1].number && stakeDetailsClicked
      ? <div className="card-stakes">
         {Array.from({ length: count }).map((_, index) => (
                
                  <div className="card-stake">
                    <div className="card-stake-number">
                      Stake{count[index]}
                    </div>
                    <div className="card-stake-middle">
                      <div className="card-stake-amount">
                      {stakedAmount[index]}
                      </div>
                    
                    </div>
                    {isclaim[index] ?  <button
                        className="card-stake-claim"
                        onClick={
                          () =>
                          unstake(index)}
                      >
                        Claim
                      </button> :
                    <button
                      className="card-stake-unstake"
                      onClick={() =>
                         unstake(index)}
                    >
                      Unstake
                    </button>
}
                  </div>
                
                ))}

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
            STAKE NOW
          </button>
        </div>}
  </div>
);
};

export default StrawberryShake;
