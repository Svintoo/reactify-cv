import { connect } from "react-redux";
import { updateViewed } from "../redux/actions";
import React, { useState } from "react";

function Projekt({ viewed, updateViewed }) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const handleClick = () => {
    updateViewed(viewed + 1);
    setButtonDisabled(true);
  };
  return (
    <div className=" ml-20 h-screen">
      <h1 className="mt-20 font-bold text-3xl ">Projekt:</h1>
      <ul className="m-6 list-disc ">
        <h2 className="font-semibold">2023</h2>
        <li>Hund dagis</li>
        <li>Cafe creme - literatur shop</li>
        <li>Taverna - Texas BBQ</li>
        <h2 className="font-semibold mt-2">2024</h2>
        <li>CHANG filmDB i Next.js</li>
        <li>Reactify-CV</li>
      </ul>
      <button
        onClick={handleClick}
        disabled={isButtonDisabled}
        className={`bg-gray-400 h-auto w-auto rounded-md p-1 text-black ${isButtonDisabled ? "cursor-not-allowed" :""}`}
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

export default connect(mapStateToProps, mapDispatchToProps)(Projekt);
