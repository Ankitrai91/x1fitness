import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png';
import { motion } from "framer-motion";
const Programs = () => {

  const companyWhatsappNumber = '7458057071'; // Replace with your company's WhatsApp number
  const handleJoinNowClick = (plan) => {
    const messageTemplate = encodeURIComponent(`Hello, I am interested in joining ${plan}.`); // Your predefined message
    const whatsappLink = `https://wa.me/${companyWhatsappNumber}?text=${messageTemplate}`;
    // window.location.href = whatsappLink;
    window.open(whatsappLink, '_blank');

  };

  return (
    <div className="Programs" id='programs'>

        {/* programs header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>


      {/* programs-categories */}
      <div className="prgoram-categories">
        {programsData.map((program)=>(
            <motion.div
            whileHover={{background: 'var(--planCard)', cursor: 'pointer'}}
            transition={{type: 'spring'}}
                onClick={()=>handleJoinNowClick(program.heading)}
                className="category" >
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <img src={RightArrow} alt="" />
                </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
