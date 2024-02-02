import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateViewed } from "../redux/actions";
import Greeting from "../../components/greeting";

const text =
  "Hej och välkommen till mitt interaktiva CV skrivet med React + Vite!";
function Home({ viewed }) {
  useEffect(() => {
    if (viewed === 3) {
      updateViewed(viewed);
    }
  }, [viewed, updateViewed]);

  function showReward() {
    const reward = document.getElementById("reward");
    reward.style.display = "none";
  }

  return (
    <div className="h-screen flex flex-col items-center">
      <Greeting value={text}></Greeting>
      <div className="text-slate-500 ml-30 mt-6">
        -clicka gärna på någon av länkarna i navfältet för att fortsätta vidare,
        när du sett alla sidor återvänd hit för en belöning här nedan-
      </div>
      <div className="relative overflow-hidden">
        <div
          id="reward"
          className="z-10 w-72 h-72 bg-black absolute mt-10 text-center flex justify-center items-center text-9xl font-bold"
        >
          ?
        </div>
        <img
          src="public/cat.png"
          alt="Varsågod! en söt katt"
          className="h-72 w-72 mt-10"
        />
      </div>
      <button
        onClick={showReward}
        className={`bg-black px-2 py-1 rounded-md mt-2 ${
          viewed < 3 ? "cursor-not-allowed" : ""
        }`}
        disabled={viewed < 3}
      >
        {viewed >= 3 ? "Tryck här för belöning" : `${viewed}/3`}
      </button>
      <footer id="footer" className="mt-64 ml-18 text-black">
        Utvecklad av Simeon Maskuniitty - FE23
      </footer>
    </div>
  );
}
const mapStateToProps = (state) => ({
  viewed: state.viewed,
});

const mapDispatchToProps = {
  updateViewed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
