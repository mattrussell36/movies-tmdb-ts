import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  img: string;
  children: any;
}

const CardWrapper = styled.div`
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
  flex-grow: 1;
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin-top: 0;
`;

const Card: React.SFC<IProps> = ({ title, img, children}) => (
  <CardWrapper>
    <CardImg src={img} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      {children}
    </CardContent>
  </CardWrapper>
);

export default Card;