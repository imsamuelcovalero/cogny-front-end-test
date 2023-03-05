import styled from 'styled-components';

export const ProductsDivS = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 16px;
`;

export const ProductsCardS = styled.div`
  border: 1px solid red;
  background-color: var(--main);
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  gap: 6px;
  padding: 4px;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  #productPrice {
    font-weight: bold;
    margin: 3px;
  }
  #productImage {
    height: 180px;
    width: 198px;
    margin-bottom: 4px;
    border-radius: 3px 3px 0 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  #productName {
    margin-bottom: 4px;
    font-size: 14px;
  }
  #quantityDiv {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    width: 100px;
    margin: 0 auto;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance:textfield; /* Firefox */
    }
    button {
      width: 30px;
      height: 30px;
      border: 1px solid var(--buttonBorder);
      background-color: var(--buttonBackground);
      cursor: pointer;
      border-radius: 10%;
      font-size: 20px;
      font-weight: bold;
    }
    input {
      width: 40px;
      height: 30px;
      border: 1px solid var(--buttonBorder);
      border-radius: 10%;
      background-color: white;
      text-align: center;
    }
  }
`;
