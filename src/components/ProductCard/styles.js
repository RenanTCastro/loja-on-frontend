import styled from "styled-components/macro";

export const DivProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.333vw;
  min-height: 63.889vw; 
  padding: 2.778vw;
  box-shadow: 0 0 1.111vw 0.278vw rgba(0, 0, 0, 0.25);
  border-radius: 1.389vw;
`;

export const ImageProduct = styled.img`
  width: 33.333vw;
  height: 33.333vw;
`;

export const ProductName = styled.p`
  font-size: 3.333vw;
  text-align: center;
  padding: 0 2.778vw ;
  margin: 1.389vw 0;
`;

export const ProductPrice = styled.p`
  font-size: 3.889vw;
  font-weight: 600;
  text-align: center;
  margin: 1.389vw
`;

export const AddSacolaButton = styled.button`
  width: 33.333vw;
  height: 6.944vw;
  font-size: 2.778vw;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;  text-align: center;
  background: #019392;
  padding: 0 2.778vw ;
  color: white;
  border: none;
  border-radius: 1.389vw;
`;