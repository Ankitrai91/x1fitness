import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
  const companyWhatsappNumber = '7458057071'; // Replace with your company's WhatsApp number
  const handleJoinNowClick = (plan) => {
    const messageTemplate = encodeURIComponent(`Hello, I am interested in joining ${plan}.`); // Your predefined message
    const whatsappLink = `https://wa.me/${companyWhatsappNumber}?text=${messageTemplate}`;
    // window.location.href = whatsappLink;
    window.open(whatsappLink, '_blank');

  };
  return (
    <div className="plans-container fullplans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">now with us</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>₹ {plan.price} <s>{plan?.hprice}</s></span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
                <span>See more benefits --{">"} </span>
            </div>
            <button className="btn"  onClick={()=>handleJoinNowClick(plan.name)}>Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
