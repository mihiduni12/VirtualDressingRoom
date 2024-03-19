import React from "react";
import Header from "../../components/Header/Header";
import ForY from "../../components/Articles/ForY";
import LogoArticle from "../../components/Articles/LogoArticle";
import Buttons from "../../components/Header/Buttons";
import SearchBar from "../../components/Header/SearchBar";
import Navbar from "../../components/Header/Navbar";
import ButtonV from "../../components/Articles/ButtonV";
import Footer from "../../components/Footer/Footer";
import CulExp from "../../components/Articles/CulExp";

function ArtCulturalExpr() {
  return (
    <div>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Coda&family=Fira+Sans&family=Dancing+Script&family=Kay+Pho+Du&family=Spirax&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abel&family=Cantora+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-light.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap"
          rel="stylesheet"
        />
      </div>
      <div className="bg-yellow h-[114px] w-[100%] fixed z-20">
        <LogoArticle />
        <Buttons />
        <SearchBar />
        <Navbar />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>

      <CulExp />
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default ArtCulturalExpr;
