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

// const sortByKey = (list) => {
//   const sortList = [...list].sort((a, b) => a.artist - b.artist);
//   console.log(sortList);
//   return sortList;
// };

// const sortByKey2 = (list, column, order) => {
//   console.log("sortByKey", list, column, order);
//   let newList;
//   switch (column) {
//     case "title":
//       switch (order) {
//         case "asc":
//           newList = list.sort((a, b) => {
//             console.log(a.title, b.title);
//             return a.title - b.title;
//           });
//           console.log(newList);
//           return newList;
//         case "desc":
//           newList = list.sort((a, b) => b.title - a.title);
//           console.log(newList);
//           return newList;
//         default:
//           return list;
//       }
//     case "artist":
//       switch (order) {
//         case "asc":
//           return (list = list.sort((a, b) => a.artist - b.artist));
//         case "desc":
//           return (list = list.sort((a, b) => b.artist - a.artist));
//         default:
//           return list;
//       }
//     case "genre":
//       switch (order) {
//         case "asc":
//           return (list = list.sort((a, b) => a.genre - b.genre));
//         case "desc":
//           return (list = list.sort((a, b) => b.genre - a.genre));
//         default:
//           return list;
//       }
//     case "rating":
//       switch (order) {
//         case "asc":
//           return (list = list.sort((a, b) => a.genre - b.genre));
//         case "desc":
//           return (list = list.sort((a, b) => b.genre - a.genre));
//         default:
//           return list;
//       }
//     default: {
//       return list;
//     }
//   }
// };

const sortByKey = (key, order, record) => {
  switch (order) {
    case "asc":
      console.log(key, "asc");
      const ascSortedList = (a, b) => (a[key] > b[key] ? 1 : -1);
      console.log(ascSortedList);
      return ascSortedList;
    case "desc":
      console.log(key, "desc");
      const descSortedList = (a, b) => (b[key] > a[key] ? 1 : -1);
      console.log(descSortedList);
      return descSortedList;
    default:
      return;
  }
};

// const sortByKey = (key) => (a, b) => a[key] > b[key] ? 1 : -1;
// const record = (key) => unSortedRecord.slice().sort(sortByKey(key));

const Header = () => {
  const record = useSelector((state) => state.song);
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
          onClick={() => sortByKey("artist", "asc")}
        />
        <FontAwesomeIcon
          icon={faSortAlphaDown}
          onClick={() => sortByKey("artist", "desc")}
        />
      </div>
      <div className="flex-item">
        Genre
        <FontAwesomeIcon
          icon={faSortAlphaUp}
          onClick={() => sortByKey("genre", "asc")}
        />
        <FontAwesomeIcon
          icon={faSortAlphaDown}
          onClick={() => sortByKey("genre", "desc")}
        />
      </div>
      <div className="flex-item">
        Rating
        <FontAwesomeIcon
          icon={faSortAlphaUp}
          onClick={() => sortByKey("rating", "asc")}
        />
        <FontAwesomeIcon
          icon={faSortAlphaDown}
          onClick={() => sortByKey("rating", "desc")}
        />
      </div>
    </div>
  );
};

const Rows = () => {
  const dispatch = useDispatch();
  const unsortedRecord = useSelector((state) => state.song);
  const { removeSong } = bindActionCreators(actionCreators, dispatch);

  const record = unsortedRecord.slice().sort(sortByKey("title", "asc"));

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
