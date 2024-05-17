import React from "react";
import SmallBanner from "../Components/SmallBanner";
import "../Styles/MembershipPageStyles/MembershipPage.css";
import Card from "../Components/MembershipPageComponents/Card";

const MembershipPage = () => {
  return (
    <div>
      <SmallBanner title="Membership" />
      <div className="trainingPlans">
        <Card
          backgroundImg="Images/pricing-bg3.jpg"
          heading="Beginner"
          price="30"
          benefits={["20 entries", "Free water"]}
        />
        <Card
          backgroundImg="Images/pricing-bg2.jpg"
          heading="Intermediate"
          price="60"
          benefits={["40 entries", "Free water", "5 free protein doses","Personal trainer", "2 swimming pool entries"]}
        />
        <Card
          backgroundImg="Images/pricing-bg1.jpg"
          heading="Pro"
          price="120"
          benefits={["Unlimited entries", "Free water", "Free protein","Personal trainer", "Free swimming pool", "Gym merch"]}
        />
      </div>
    </div>
  );
};
export default MembershipPage;
