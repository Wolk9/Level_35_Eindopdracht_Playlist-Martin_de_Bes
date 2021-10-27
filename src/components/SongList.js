import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

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
    <div className="flex-container">
      <div className="flex-item">Title</div>
      <div className="flex-item">Artist</div>
      <div className="flex-item">Genre</div>
      <div className="flex-item">Rating</div>
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
        <div className="flex-item">{record.title}</div>
        <div className="flex-item">{record.artist}</div>
        <div className="flex-item">{record.genre}</div>
        <div className="flex-item">{record.rating}</div>
        <button key={record.id} id={record.id} onClick={handleClick}>
          -
        </button>
      </div>
    );
  });

  return <div>{recordList}</div>;
};

export default SongList;
