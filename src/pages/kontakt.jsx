import { connect } from "react-redux";
import { updateViewed } from "../redux/actions";
import React, { useState } from "react";

function Kontakt({ viewed, updateViewed }) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const handleClick = () => {
    updateViewed(viewed + 1);
    setButtonDisabled(true);
  };

  return (
    <div className="ml-20 h-screen overflow">
      <h1 className="mt-20 font-bold text-3xl ">Kontakt:</h1>
      <ul className="m-6 list-disc ">
        <li>Telefon: 070-123-456-78</li>
        <li>Email: Email@email.com</li>
        <li>Adress: Black lodge</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Kontakt);
