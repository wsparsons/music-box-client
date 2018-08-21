import artistModel from "../models/artists";

export const GET_ALL_ARTISTS = "GET_ALL_ARTISTS";
// export const REMOVE_ARTIST = 'REMOVE_ARTIST'

export const getAllArtists = () => {
  return async dispatch => {
    const payload = await artistModel.get();
    dispatch({
      type: GET_ALL_ARTISTS,
      payload
    });
  };
};

export const removeArtist = (id) => {
  return async dispatch => {
    await artistModel.remove(id);
    // OPTION 1
    // dispatch({
    //   type: REMOVE_ARTIST,
    //   payload: id
    // })
    // OPTION 2
    // make a new request to get() everything
    // Dispatch with the type GET_ALL_ARTISTS
    const payload = await artistModel.get();
    dispatch({
      type: GET_ALL_ARTISTS,
      payload
    });
  };
};

export const createArtist = (body) => {
  return async dispatch => {
    await artistModel.create(body)
    const payload = await artistModel.get()
    dispatch({
      type: GET_ALL_ARTISTS,
      payload
    })
  }
}
