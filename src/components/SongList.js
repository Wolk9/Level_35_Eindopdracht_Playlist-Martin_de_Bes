import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sort-up, sort-down } from "@fortawesome/free-solid-svg-icons";
// import {
//   solid,
//   regular,
//   brands
// } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const SongList = (props) => {
  return (
    <div className="song-list">
      <Header />
      <Rows />
    </div>
  );
};




const Header = () => {
  return (
    <div className="flex-container flex-container-header">
      <div className="flex-item">Title<FontAwesomeIcon icon="fa-solid fa-sort-up" />
<FontAwesomeIcon icon="fa-solid fa-sort-down" /></div>
      <div className="flex-item">Artist<FontAwesomeIcon icon="fa-solid fa-sort-up" />
<FontAwesomeIcon icon="fa-solid fa-sort-down" /></div>
      <div className="flex-item">Genre<FontAwesomeIcon icon="fa-solid fa-sort-up" />
<FontAwesomeIcon icon="fa-solid fa-sort-down" /></div>
      <div className="flex-item">Rating<FontAwesomeIcon icon="fa-solid fa-sort-up" />
<FontAwesomeIcon icon="fa-solid fa-sort-down" /></div>
    </div>
  );
};

const Rows = () => {
  const dispatch = useDispatch();
  const record = useSelector((state) => state.song);
  const { removeSong } = bindActionCreators(actionCreators, dispatch);

  console.log(record);

  const handleClick = (event) => {
    console.log("HandleClick: ", event.target.id);
    let numID = Number(event.target.id);
    removeSong({
      id: numID
    });
  };

  const recordList = record.map((record) => {
    console.log(record);
    return (
      <div key={record.id} id={record.id} className="flex-container play-list">
        <div className="flex-item title">{record.title}</div>
        <div className="flex-item artist">{record.artist}</div>
        <div className="flex-item genre">{record.genre}</div>
        <div className="flex-item rating">{record.rating}</div>
        <button
          className="flex-item deletebutton"
          key={record.id}
          id={record.id}
          onClick={handleClick}
        >
          -
        </button>
      </div>
    );
  });

  return <div>{recordList}</div>;
};

export default SongList;
