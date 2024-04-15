import styled from 'styled-components'

const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 20%;
  height: 87vh;
  padding: 5px;

  @media (max-width: 450px) {
    width: 100%;
  }
`

const CheckoutBtn = styled.button`
  width: 100%;
  padding: 10px 0 10px 0;
  background-color: #F9E75E;
  color: #333366;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(0,0,0,0.59);
  margin-bottom: 5px;
  line-height: 1;
  cursor: pointer;
  &:hover {
    background-color: #DECE54;
  }
`

const ItemCart = styled.div`
  width: 95%;
  height: 80px;
  padding: 5px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #FFF;
  border: 2px solid #000;
  box-shadow: 4px 4px 5px rgba(0,0,0,0.59);
  border-radius: 5px;
`

const ItemInfo = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & h3 {
    font-size: 14px;
  }
`

const ItemActions = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    margin: 0 5px 0 5px;
    font-size: 28px;
    color: #406343;
    cursor: pointer;
    padding-top: 2px
  }
  & p {
    font-size: 28px;
  }
`

export {
  ContainerCart,
  CheckoutBtn,
  ItemCart,
  ItemInfo,
  ItemActions,
}