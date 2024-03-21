import React from "react";
import Button from "../Component/Button";
import Header from "../Component/Header";
import Popup from "../Component/Popup";
import { useState } from "react";

const Segment = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div>
        <Header title="View Audience" />
      </div>
      <div className="segment-wrapper">
        <Button onClick={togglePopup} label="Save" className="btn "></Button>
        {showPopup && <Popup handleClose={closePopup} show={showPopup} />}
      </div>
    </>
  );
};

export default Segment;
