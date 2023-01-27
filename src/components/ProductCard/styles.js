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

export const ModalInfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageProductModal = styled.img`
  width: 33.333vw;
  height: auto;
  margin-right: 15px;

  @media (min-width: 800px) {
    width: 14.641vw;
    height: 14.641vw;
  }
`;

export const ProductNameModal = styled.p`
  font-size: 14px;
  min-height: 30px;
  margin: 2px 0 8px 0;

  @media (min-width: 800px) {
    font-size: 1.171vw;
  }
`;

export const ProductPriceModal = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;

  @media (min-width: 800px) {
    font-size: 1.171vw;
  }
`;

export const ProductQuantityModal = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0;

  @media (min-width: 800px) {
    font-size: 1.171vw;
  }
`;

export const TextOption = styled.p`
    font-size: 14px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    margin: 5px;
`;

export const DivProductOptions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const DivOption = styled.div.attrs(props => ({
  quantity: props.quantity,
}))`
  border: 1px solid ${props => props.theme.color};
  border-radius: 5px;
  padding: 5px;
  min-width: 15px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
`;

export const ModalOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;