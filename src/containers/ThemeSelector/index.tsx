import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IRootState } from '../../store';
import { setTheme } from '../../store/theme/themeActions';
import { IThemeActions } from '../../store/theme/types';

import { HTMLSelect } from '@blueprintjs/core';

interface IProps {
  setTheme: any,
  themes: any;
}

class ThemeSelector extends React.Component<IProps> {
  public render() {
    const { themes, setTheme } = this.props;

    return (
      <div>
        <HTMLSelect
          onChange={(e: React.FormEvent<HTMLSelectElement>) =>
            setTheme(e.currentTarget.value)} 
          options={themes}
        />
      </div>
    )
  }
}

const mapStateToProps = (rootState: IRootState) => {
  return {
    themes: rootState.theme.themes,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<IThemeActions>) => bindActionCreators({
  setTheme,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSelector);