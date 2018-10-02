import { Reducer } from 'redux';
import { 
  IThemeActions,
  IThemeState,
  ThemeActionTypes,
  Themes,
} from './types';

const initialState: IThemeState = {
  selectedTheme: Themes.Light,
  themes: [
    Themes.Light,
    Themes.Dark,
  ],
};

const themeReducer: Reducer<IThemeState, IThemeActions> = (
  state: IThemeState = initialState,
  action: IThemeActions
) => {
  switch(action.type) {
    case ThemeActionTypes.SetTheme:
      return {
        ...state,
        selectedTheme: action.theme,
      }
    default:
      return state;
  }
}

export default themeReducer;