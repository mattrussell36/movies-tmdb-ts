import * as React from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider} from 'styled-components';
import Movies from './containers/Movies';
import ThemeSelector from './containers/ThemeSelector';
import { IRootState } from './store';
import { colors } from './styles/colors';

// Blueprint
import { Navbar, Alignment } from '@blueprintjs/core';

interface IProps {
  theme: string;
}

const Main = styled.main`
  background: ${props => props.theme.colors.siteBackground};
  color: ${props => props.theme.colors.textColor};
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
          <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>The Movie Database - Latest Movies</Navbar.Heading>
              <Navbar.Divider />
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
              <ThemeSelector />
            </Navbar.Group>
          </Navbar>
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
