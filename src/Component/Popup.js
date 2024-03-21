import React from "react";
import Header from "./Header";
import SegmentView from "./Dropdown";

const Popup = ({ handleClose, show }) => {
  const showHide = show ? "openPopup" : "closePopup";

  return (
    <div className={showHide}>
      <section className="popup-main">
        <div className="popup-wrapper">
          <Header title="Saving Segment" onClick={handleClose} />
          <SegmentView handleClose={handleClose} />
        </div>
      </section>
    </div>
  );
};

export default Popup;
