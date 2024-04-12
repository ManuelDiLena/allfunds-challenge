import styled from 'styled-components'

const ContainerList = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  width: 75%;
  height: 87vh;
  padding: 5px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
`

export {
  ContainerList,
}