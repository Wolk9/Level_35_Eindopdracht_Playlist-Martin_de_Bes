import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAlphaDown,
  faSortAlphaUp
} from "@fortawesome/free-solid-svg-icons";

const SongList = (props) => {
  return (
    <div className="song-list">
      <Header />
      <Rows />
    </div>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const record = useSelector((state) => state.song);

  const { storeResortedList } = bindActionCreators(actionCreators, dispatch);

  const sortByKey = (key, order, record) => {
    switch (order) {
      case "asc":
        console.log(key, "asc");
        // const ascSortedList = record.sort((a, b) => (a[key] > b[key] ? 1 : -1));
        const ascSortedList = record.sort((a, b) => {
          console.log(a[key], b[key]);
          return a[key] < b[key] ? 1 : -1;
        });
        console.log(ascSortedList);
        return storeResortedList(ascSortedList);
      case "desc":
        console.log(key, "desc");
        // const descSortedList = record.sort((a, b) => (b[key] > a[key] ? 1 : -1));
        const descSortedList = record.sort((a, b) => {
          console.log(a[key], b[key]);
          return a[key] > b[key] ? 1 : -1;
        });
        console.log(descSortedList);
        return storeResortedList(descSortedList);
      default:
        return;
    }
  };

  return (
    <div className="flex-container flex-container-header">
      <div className="flex-item">
        Title
        <FontAwesomeIcon
          icon={faSortAlphaUp}
          onClick={() => sortByKey("title", "asc", record)}
        />
        <FontAwesomeIcon
          icon={faSortAlphaDown}
          onClick={() => sortByKey("title", "desc", record)}
        />
      </div>
      <div className="flex-item">
        Artist
        <FontAwesomeIcon
          icon={faSortAlphaUp}
          onClick={() => sortByKey("artist", "asc", record)}
        />
        <FontAwesomeIcon
          icon={faSortAlphaDown}
          onClick={() => sortByKey("artist", "desc", record)}
        />
      </div>
      <div className="flex-item">
        Genre
        <FontAwesomeIcon
          icon={faSortAlphaUp}
          onClick={() => sortByKey("genre", "asc", record)}
        />
        <FontAwesomeIcon
          icon={faSortAlphaDown}
          onClick={() => sortByKey("genre", "desc", record)}
        />
      </div>
      <div className="flex-item">
        Rating
        <FontAwesomeIcon
          icon={faSortAlphaUp}
          onClick={() => sortByKey("rating", "asc", record)}
        />
        <FontAwesomeIcon
          icon={faSortAlphaDown}
          onClick={() => sortByKey("rating", "desc", record)}
        />
      </div>
      <div className="flex-item"></div>
    </div>
  );
};

const Rows = () => {
  const dispatch = useDispatch();
  const record = useSelector((state) => state.song);
  const { removeSong } = bindActionCreators(actionCreators, dispatch);

  // const record = unsortedRecord
  //   .slice()
  //   .sort(sortByKey("title", "asc", unsortedRecord));

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
