import React from "react";
import { Card } from "../../Components/Common/Card";

import HandshakeIMG from "../../assets/Empleaves.png";

import { Link } from "react-router-dom";

;


const Leaves: React.FC = () => {

  const CardData = [
    {
      CardTitle: "Employee Leaves",
      IMG: HandshakeIMG,
      nameOfIMG: "Employee Leaves",
      path : "/employeeleave"
    },
    {
      CardTitle: "Leave Requests",
      IMG: HandshakeIMG,
      nameOfIMG: "Leave Requests",
      path: "/leaverequests"
    },
    {
      CardTitle: "Events",
      IMG: HandshakeIMG,
      nameOfIMG: "Events",
      path:"/Events",
    },
    {
      CardTitle: "Leave Balance",
      IMG: HandshakeIMG,
      nameOfIMG: "Leave Balance",
      path:"/leavebalance"
    }
  ];



  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Leave Management</h2>

      <div className="flex flex-wrap gap-6">
        {CardData.map((card, index) => (
          <Link to={card.path as string}>
          <Card
            key={index}
            CardTitle={card.CardTitle}
            IMG={card.IMG}
            NameOfIMG={card.nameOfIMG}
            
          />
          </Link>
        ))}
      </div>
     
    </div>
  );
};

export default Leaves;
