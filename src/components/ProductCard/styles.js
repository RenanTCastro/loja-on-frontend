import styled from "styled-components/macro";

export const DivProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 33.333vw;
  padding: 2.778vw;
  box-shadow: 0 0 2vw 0.2vw rgba(0, 0, 0, 0.08);
  border-radius: 1.389vw;
  
  @media (min-width: 800px) {
    width: 14.641vw;
    padding: 1.098vw;
    border-radius: 0.366vw;
    box-shadow: 0 0 0.5vw 0.1vw rgba(0, 0, 0, 0.08);
  }
`;

export const ImageProduct = styled.img`
  width: 33.333vw;
  height: 33.333vw;

  @media (min-width: 800px) {
    width: 14.641vw;
    height: 14.641vw;
  }
`;

export const ProductName = styled.p`
  font-size: 3.333vw;
  text-align: center;
  padding: 0 2.778vw ;
  margin: 1.389vw 0;

  @media (min-width: 800px) {
    font-size: 1.171vw;
    margin: 0.732vw 0;
  }
`;

export const ProductPrice = styled.p`
  font-size: 3.889vw;
  font-weight: 600;
  text-align: center;
  margin: 1.389vw;

  @media (min-width: 800px) {
    font-size: 1.171vw;
    margin: 0.732vw;
  }
`;

export const AddSacolaButton = styled.button`
  width: 33.333vw;
  height: 6.944vw;
  font-size: 2.778vw;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;  text-align: center;
  background: ${props => props.theme.color};
  padding: 0 2.778vw;
  color: white;
  border: none;
  border-radius: 1.389vw;
  cursor: pointer; 

  @media (min-width: 800px) {
    width: 14.641vw;
    height: 2.928vw;
    border-radius: 0.366vw;
    font-size: 1.171vw;
  }
`;