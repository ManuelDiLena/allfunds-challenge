import styled from 'styled-components'

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #333366;
  color: #F9E75E;
  z-index: 1;
`

const Title = styled.h1`
  margin-left: 80px;
  text-shadow: 4px 4px 5px rgba(0,0,0,0.59);
  letter-spacing: 3px;
  line-height: 1;
  text-transform: upppercase;

  @media (max-width: 450px) {
    margin-left: 20px;
    font-size: 20px;
  }
`

const BtnsMenu = styled.div`
  margin-right: 80px;

  @media (max-width: 450px) {
    margin-right: 50px;
  }
`

const Btn = styled.span`
  margin-right: 10px;
  font-size: 30px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: #ECE7B4;
  &:hover {
    transform: scale(1.15);
  }
`

export {
  Navbar,
  Title,
  BtnsMenu,
  Btn,
}