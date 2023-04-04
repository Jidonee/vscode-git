import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

/*
import React from "react";
import "./home.css"; 

const Home = () => {
    return (
        <div className="content">
            <div className="textBox">
                <h1>안녕하세요 <br></br> 웹 개발자 <br></br> <span>이지선</span> 입니다.</h1>
            </div>
            <img className="profile_img" src="img/jidonee.jpg"></img>
            <div className="logo_list">
                <img className="github" src="img/github.png" />
    </div> 
        </div>
    )
}

export default Home*/