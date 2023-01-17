import styled from "styled-components/macro";

export const DivProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
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
  height: auto;

  @media (min-width: 800px) {
    width: 14.641vw;
    height: 14.641vw;
  }
`;

export const ProductName = styled.p`
  font-size: 12px;
  min-height: 30px;
  margin: 2px 0 8px 0;

  @media (min-width: 800px) {
    font-size: 1.171vw;
  }
`;

export const ProductCardBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PromotionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const OriginalProductPrice = styled.p`
  font-size: 11px;
  font-weight: 400;
  margin: 0;
  text-decoration-line: line-through;

  @media (min-width: 800px) {
    font-size: 1.171vw;
  }
`;

export const ProductPrice = styled.p`
  font-size: 3.889vw;
  font-weight: 600;
  margin: 0;

  @media (min-width: 800px) {
    font-size: 1.171vw;
  }
`;
