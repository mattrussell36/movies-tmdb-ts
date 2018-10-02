import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string,
  children: any
}

const CardDiv = styled.div`
  padding: 20px;
  min-height: 100%;
  background-color: ${props => props.theme.colors.cardBackground}; 
  box-shadow: 1px 2px 4px 0px rgba(80, 81, 82, 0.2);
`;

const Card: React.SFC<IProps> = ({ title, children}) => (
  <CardDiv>
    <h3 style={{ marginTop: 0 }}>{title}</h3>
    <div>
      {children}
    </div>
  </CardDiv>
);

export default Card;