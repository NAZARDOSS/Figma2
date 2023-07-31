import React, { Component } from "react";
import Rectangle from "./Rectangle.png";

class ContentBg extends Component {
  render() {
    return (
      <div
        className="Upper_cont"
        style={{
          background: `linear-gradient(180deg, rgba(41,40,45,0.836594012605042) 0%, rgba(129,68,73,0.43883490896358546) 100%), 
                           url(${Rectangle}) center/cover no-repeat`,
          height: "80%",
          width: "100%",
        }}
      >
        <div className="title_block">
          <p className="title">РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ Tel-Ran</p>
          <p className="description">
            Nazar, Volodymyr, Alex, Vlad, Alina, Gegham
          </p>
        </div>

        <div className="white_block">
          <div className="info-block">
            <div className="info-item">
              <p className="first">26</p>
              <p className="second">Лет</p>
              <p className="third">на рынке</p>
            </div>
            <div className="info-item">
              <p className="first">26</p>
              <p className="second">Лет</p>
              <p className="third">на рынке</p>
            </div>
            <div className="info-item">
              <p className="first">26</p>
              <p className="second">Лет</p>
              <p className="third">на рынке</p>
            </div>
            <div className="info-item">
              <p className="first">26</p>
              <p className="second">Лет</p>
              <p className="third">на рынке</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentBg;
