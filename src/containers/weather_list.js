import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humiditys = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;


    return(
      <tr key={name}>
        <td className="gmap"><GoogleMap lat={lat} lon={lon} /></td>
        <td>
          <Chart data={temps} color="orange" unit="K" />
        </td>
        <td>
          <Chart data={pressures} color="blue" unit="hPa" />
        </td>
        <td>
          <Chart data={humiditys} color="grey" unit="%" />
        </td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <td>City</td>
            <td>Temperature (K)</td>
            <td>Pressure (hPa)</td>
            <td>Humidity (%)</td>
          </tr>
        </thead>

        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
