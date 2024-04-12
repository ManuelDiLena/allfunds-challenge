import styled from 'styled-components'

const CardProduct = styled.div`
  background-color: #FFF;
  width: 230px;
  height: 300px;
  border: 2px solid #000;
  box-shadow: 4px 4px 5px rgba(0,0,0,0.59);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  gap: 10px;
`

const ImageProduct = styled.img`
  width: 100%;
  height: 40%;
`

const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40%;
`

const InfoSection = styled.div`
  height: 100%;
  width: 80%;
  font-size: 14px;
  padding-top: 2px;
`

const PriceSection = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  color: #FF5F5F;
`

const FooterSection = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`

const BtnSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  font-size: 30px;
  color: #406343;
`

const Btn = styled.span`
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #32502E;
    transform: scale(1.15);
  }
`

export {
  CardProduct,
  ImageProduct,
  MainSection,
  InfoSection,
  PriceSection,
  FooterSection,
  BtnSection,
  Btn,
}