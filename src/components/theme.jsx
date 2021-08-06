import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions";

const Theme = () =>{
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="toggle_theme">
    <button className={theme ? "btn btn-light" : "btn btn-dark"} onClick={() => dispatch(toggleTheme())}>
      {
        theme ? "dark" : "light"
      }
    </button>
    </div>
  )
};

export default Theme;