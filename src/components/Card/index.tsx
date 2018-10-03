import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  img: string;
  children: any;
}

const CardDiv = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.cardBackground}; 
  box-shadow: 1px 2px 4px 0px rgba(80, 81, 82, 0.2);
`;

const CardImg = styled.img`
  display: block;
  width: 130px;
  height: auto;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Card: React.SFC<IProps> = ({ title, img, children}) => (
  <CardDiv>
    <CardImg src={img}  alt={title} />
    <CardContent>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
    </CardContent>
  </CardDiv>
);

export default Card;