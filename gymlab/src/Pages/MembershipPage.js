import React, {useEffect} from "react";
import SmallBanner from "../Components/SmallBanner";
import "../Styles/MembershipPageStyles/MembershipPage.css";
import Card from "../Components/MembershipPageComponents/Card";




const MembershipPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="membershipPage">
      <SmallBanner title="Membership" />
      <div className="introduction">
        <h2 className="sectionHeading">Exclusive Pricing Plan</h2>
        Unlock your full potential with our affordable gym membership plans! Enjoy unlimited access to state-of-the-art equipment, diverse fitness classes, and personalized training sessions. Sign up now and transform your fitness journey today!
        </div>
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
