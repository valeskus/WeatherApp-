import * as Redux from 'redux';

import {WeatherActions} from './weatherActions';
import {CityLocModel, CurrentWeather, WeatherForecastModel} from '../../models';

export interface Units {
  units: 'imperial' | 'metric';
}
export interface WeatherStoreState {
  currentWeather?: CurrentWeather;
  city?: CityLocModel;
  forecast?: WeatherForecastModel;
  units: 'imperial' | 'metric';
}

const initialState: WeatherStoreState = {
  units: 'metric',
};

export function weatherReducer(
  state = initialState,
  action: Redux.AnyAction,
): WeatherStoreState {
  switch (action.type) {
    case WeatherActions.GET_COORDINATS: {
      const city = action.payload as CityLocModel;

      return {
        ...state,
        city,
      };
    }

    case WeatherActions.GET_CURRENT_WEATHER: {
      const currentWeather = action.payload as CurrentWeather;

      return {
        ...state,
        currentWeather,
      };
    }

    case WeatherActions.GET_FORECAST: {
      const forecast = action.payload as WeatherForecastModel;

      return {
        ...state,
        forecast,
      };
    }

    case WeatherActions.SET_UNITS: {
      const {units} = action.payload as Units;

      return {
        ...state,
        units,
      };
    }

    default:
      return state;
  }
}
