import { connect } from "react-redux";
import { updateViewed } from "../redux/actions";
import React, { useState } from "react";

function Ommig({ viewed, updateViewed }) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const handleClick = () => {
    updateViewed(viewed + 1);
    setButtonDisabled(true);
  };
  return (
    <div className="mt-20 h-screen ml-20">
      <h1 className=" mt-20 font-bold text-3xl ">Om mig:</h1>
      <ul className="m-6 list-disc ">
        <li>24 år gammal</li>
        <li>Front end student</li>
        <li>Tycker om att träna och vara kreativ</li>
        <li>Favoritmat är hamburgare</li>
      </ul>
      <button
        onClick={handleClick}
        disabled={isButtonDisabled}
        className={`bg-gray-400 h-auto w-auto rounded-md p-1 text-black ${
          isButtonDisabled ? "cursor-not-allowed" : ""
        }`}
      >
        Tryck här när du har läst
      </button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  viewed: state.viewed,
});

const mapDispatchToProps = {
  updateViewed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ommig);
