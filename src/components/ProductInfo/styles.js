import styled from "styled-components/macro";

export const DivProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7.5vw;
  width: 85vw;
`;

export const DivProductOptions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
`;

export const DivOption = styled.div`
  border: 1px solid #019392;
  border-radius: 5px;
  padding: 5px;
  min-width: 25px;
  text-align: center;
  cursor: pointer;
`;

export const TextOption = styled.p`
    font-size: 16px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
`;

export const DivProductQuantity = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const DivQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5;
  border: 1px solid #019392;
  width: 40px;
`;

export const DivChangeQuantity = styled.div`
  width: 20px;
  border: 1px solid #019392;
  border-width: 0px 1px 1px 0px;
`;

export const DivChangeQuantityText = styled.div`
  border: 1px solid #019392;
  border-width: 1px 0px 0px 0px;
  cursor: pointer;
`;

export const DivProductAdd = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddSacolaButton = styled.button`
    width: 100% ;
    font-size: 3.889vw;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;  
    text-align: center;
    background: ${props => props.theme.color};
    color: white;
    border: none;
    border-radius: 1.389vw;
    cursor: pointer;
    margin-left: 10px;
    @media (min-width: 800px) {
        width: 37.064vw;
        height: 3.660vw;
        border-radius: 0.366vw;
        font-size: 1.171vw;
        margin-bottom: 0;
        margin-left: 2.965vw;
    }
`;