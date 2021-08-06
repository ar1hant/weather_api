import {useSelector} from "react-redux";

const Weather = () => {
  const placeData = useSelector(state => state.placeData);
  const theme = useSelector((state) => state.theme);
  return (
    <div className="col-12 weather">
      <div className={theme ? "card dark" : "card"}>
        {
          placeData.location ?
          <div className="container"> 
            <div className="row">
              <div className="col-4 name_styling_l">
                <div>{placeData.location.name}</div>
                <div>{placeData.location.country}</div>
              </div>
              <div className="col-4">
                <img src={placeData.current.condition.icon} alt="cloud" />
              </div>
              <div className="col-4 name_styling_r">
                <div>{placeData.current.temp_c}&deg;</div>
                <div>{placeData.current.condition.text}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-4 name_styling_bottom">
                <div>TODAY</div>
                <img src={placeData.forecast.forecastday[0].day.condition.icon} alt="cloud" />
                <div className="max_temp">{placeData.forecast.forecastday[0].day.maxtemp_c}</div>
                <div className="min_temp">{placeData.forecast.forecastday[0].day.maxtemp_c}</div>
              </div>
              <div className="col-4 name_styling_bottom">
                <div>TOMMOROW</div>
                <img src={placeData.forecast.forecastday[1].day.condition.icon} alt="cloud" />
                <div className="max_temp">{placeData.forecast.forecastday[1].day.maxtemp_c}</div>
                <div className="min_temp">{placeData.forecast.forecastday[1].day.maxtemp_c}</div>
              </div>
              <div className="col-4 name_styling_bottom">
                <div>DAY AFTER TOM.</div>
                <img src={placeData.forecast.forecastday[2].day.condition.icon} alt="cloud" />
                <div className="max_temp">{placeData.forecast.forecastday[2].day.maxtemp_c}</div>
                <div className="min_temp">{placeData.forecast.forecastday[2].day.maxtemp_c}</div>
              </div>
            </div>
          </div>
          : <h2>No Place Found</h2>
        }
      </div>
    </div>
  );
}

export default Weather;