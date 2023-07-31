import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div className="middle">
        <p className="middle_title">НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</p>

        <div className="middle_blocks">
          <div className="middle_info">
            <div className="gallery">
                <div className="gallery-item">  
                    <img
                        className="middle_image"
                        src="https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?b=1&s=612x612&w=0&k=20&c=HqM6ioLM2ynkcQXXLd3-thXTGKnBqbynW5SLhLfbHaU="
                        alt=""
                    />
                    <div className="orange_block"></div>

                    <h3>
                        <b>Tel-Ran Gmbh</b>
                    </h3>
                    <p className="image_text">
                        Онлайн школа по программированию с трудоустройством в Германии и
                        США. Гранты на обучение. Наши студенты работают в лучших
                        компаниях Германии и Европы. Помогаем с трудоустройством. Курсы:
                        Веб-разработка, Программирование для всех.
                    </p>
                </div>
                <div className="gallery-item">  
                    <img
                        className="middle_image"
                        src="https://st.depositphotos.com/1433239/4843/i/600/depositphotos_48430985-stock-photo-skyscrapers-against-the-sky.jpg"
                        alt=""
                    />
                    <div className="orange_block"></div>

                    <h3>
                        <b>Tel-Ran Gmbh</b>
                    </h3>
                    <p className="image_text">
                        Онлайн школа по программированию с трудоустройством в Германии и
                        США. Гранты на обучение. Наши студенты работают в лучших
                        компаниях Германии и Европы. Помогаем с трудоустройством. Курсы:
                        Веб-разработка, Программирование для всех.
                    </p>
                </div>
                <div className="gallery-item">  
                    <img
                        className="middle_image"
                        src="https://media.istockphoto.com/id/176859184/photo/financial-district-of-london.jpg?s=612x612&w=0&k=20&c=ljpuApVxg5Q2BeHzfe4WGAq37kLILBEyB2_EiJgWKVk="
                        alt=""
                    />
                    <div className="orange_block"></div>

                    <h3>
                        <b>Tel-Ran Gmbh</b>
                    </h3>
                    <p className="image_text">
                        Онлайн школа по программированию с трудоустройством в Германии и
                        США. Гранты на обучение. Наши студенты работают в лучших
                        компаниях Германии и Европы. Помогаем с трудоустройством. Курсы:
                        Веб-разработка, Программирование для всех.
                    </p>
                </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
