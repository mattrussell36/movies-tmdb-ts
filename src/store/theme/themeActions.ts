import { ThemeActionTypes } from './types';

export const setTheme = (theme: string) => ({
  theme,
  type: ThemeActionTypes.SetTheme,
});