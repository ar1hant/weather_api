const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place,
  };
};

const updatePlaceData = (place) => {
  return (dispatch) => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=7574597f23ff40de85d132005210308&q=${place}&days=3`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: "UPDATE_PLACE_DATA",
        payload: data,
      });
    });
  }
};

const toggleTheme = () => {
  return{
    type: "TOGGLE_THEME",
  };
};

export {updatePlace, updatePlaceData, toggleTheme};