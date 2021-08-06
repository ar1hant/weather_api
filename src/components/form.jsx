import {useSelector, useDispatch} from "react-redux";
import {updatePlace, updatePlaceData} from "../actions";

const Form = () => {
  const place = useSelector(state => state.place);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 form">
            <input type="text" value={place} placeholder="City Name" 
            onChange={(e) => { dispatch(updatePlace(e.target.value));}}
            />
            <button className={theme ? "btn box dark" : "btn box"}
            onClick={() => {dispatch(updatePlaceData(place))}}
            >
            Go</button>
          </div>
      </div>
    </div>
    );
}

export default Form;