import * as React from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider} from 'styled-components';
import Movies from './containers/Movies';
import ThemeSelector from './containers/ThemeSelector';
import { IRootState } from './store';
import { colors } from './styles/colors';

interface IProps {
  theme: string;
}

const Main = styled.main`
  background: ${props => props.theme.colors.siteBackground};
  color: ${props => props.theme.colors.textColor};
`;

const Nav = styled.nav`
  display: flex;
  padding: 20px;
  background-color: ${props => props.theme.colors.cardBackground};
`;

class App extends React.Component<IProps> {
  public render() {
    const { theme } = this.props;
    
    const themeConfig = {
      colors: colors[theme],
      name: theme,
    };

    return (
      <ThemeProvider theme={themeConfig}>
        <Main>
          <Nav>
            <h1 style={{ margin: 0 }}>The Movie Database - Latest Movies</h1>
            <div style={{ marginLeft: 'auto' }}>
              <ThemeSelector />
            </div>
          </Nav>
          <Movies />
        </Main>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (rootState: IRootState) => {
  return {
    theme: rootState.theme.selectedTheme,
  }
}

export default connect(
  mapStateToProps
)(App);
