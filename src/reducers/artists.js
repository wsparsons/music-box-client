//// create a reducers folder
//// create a artists.js file
//// create a variable for the initial state
//// write a reducer function

// const initialArtists = [
//   { id: 1, name: "Drake", genre: "hip-hop" },
//   { id: 2, name: "Fugees", genre: "hip-hop" },
//   { id: 3, name: "A Tribe Called Quest", genre: "hip-hop" }
// ];

import { 
  GET_ALL_ARTISTS
} from "../actions/artists";

const artists = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_ARTISTS:
      return payload;
    // case REMOVE_ARTIST: 
    //   return payload;
    default:
      return state;
  }
};

export default artists;
