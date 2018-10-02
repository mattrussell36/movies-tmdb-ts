export enum Themes {
  Light = 'light',
  Dark = 'dark',
}

export interface IThemeState {
  themes: string[],
  selectedTheme: string,
}

export enum ThemeActionTypes {
  SetTheme = '@theme/SET_THEME'
}

export type IThemeActions = 
  ISetThemeActionType<ThemeActionTypes.SetTheme>;

export interface ISetThemeActionType<Type> {
  type: Type,
  theme: string,
}