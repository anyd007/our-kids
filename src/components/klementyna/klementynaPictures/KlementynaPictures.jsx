import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { Loading1 } from "../../loading/Loading";
import { useTheme } from "../../contexts/StyleContext";
import { KlementynaPicture } from "../../apis/KlementynaApi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./klementynnaPictures.css";

const KlementynaPictures = () => {
  const { klementynaMedias } = useTheme();
  const [loading, setLoading] = useState(true);
  const [pictures, setPictures] = useState(KlementynaPicture);
  const [filterPictures, setFilterPictures] = useState([]);
  const [showPictures, setShowPictures] = useState(false);
  const history = useNavigate()

  useEffect(() => {
    setPictures(KlementynaPicture);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });
  const handleOpenPic = (e) => {
    let x = pictures.filter((item) => item.id === e.id);
    setFilterPictures(x);
    setShowPictures(true);
  };

  //slider ręczny przód
  const handleNextPic = (next) => {
    let y = [];
    y = pictures.filter((el) => el.index > next);
    setFilterPictures(y);
    if (y === [] || y.length < 1) {
      let z = pictures.filter((item) => item.index === 1);
      setFilterPictures(z);
    }
  };
  //slider ręczny wstecz
  const handlePrevPic = (prev) => {
    let maxIndex = pictures.map((el) => el.index);
    let y = pictures.filter((item) => item.index < prev).reverse();
    setFilterPictures(y);
    if (y === [] || y.length < 1) {
      let z = pictures.filter((item) => item.index === Math.max(...maxIndex));
      setFilterPictures(z);
    }
  };

  const handleClose = () => {
    setShowPictures(false);
    setFilterPictures([]);
  };

  return (
    <>
      {loading && <Loading1 />}
      <Container style={klementynaMedias}>
        <Row style={{ textAlign: "center" }}>
        <AiOutlineCloseCircle
                onClick={()=>history("/klementyna")}
                className="closePictures exit"
              />
          <h2 className="picTitle">ZDJĘCIA KLEMENTYNKI</h2>
        </Row>
        <Row className="picturesRow">
          {pictures &&
            pictures.map((el) => (
              <div
                onClick={(e) => handleOpenPic(e.target)}
                key={el.id}
                id={el.id}
                index={el.index}
                style={{ backgroundImage: el.link }}
                className="pics"
              ></div>
            ))}
        </Row>
        {showPictures && (
          <Row>
            <div className="filterPicsDiv">
              <GrNext
                onClick={() => handleNextPic(filterPictures[0].index)}
                className="nextBtn"
              />
              <AiOutlineCloseCircle
                onClick={handleClose}
                className="closePictures"
              />
              <img className="filterPics" src={filterPictures[0].image} />
              <GrPrevious
                onClick={() => handlePrevPic(filterPictures[0].index)}
                className="prevBtn"
              />
            </div>
          </Row>
        )}
      </Container>
    </>
  );
};

export default KlementynaPictures;
