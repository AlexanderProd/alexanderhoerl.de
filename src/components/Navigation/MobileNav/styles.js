import styled from '@emotion/styled'

export const Wrapper = styled.div`
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  z-index: 3;
  position: fixed; 
  width: ${({ visible }) => visible ? '100%' : '0'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  height: 100vh;
  background-color: black;
  color: white;
  white-space: nowrap;
  overflow-x: hidden;
  transition: opacity 0.5s ease;
`

export const ItemsList = styled.ul`
  list-style-type: none;
  margin-top: 5rem;
  padding: 0;
`

export const PrimaryNavItem = styled.li`
  font-weight: 400;
  line-height: 1.6;
  font-size: 1.5rem;
  margin-bottom: 0;
  padding: 15px 2rem 15px;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 2rem;
    right: 2rem;
  }
`

export const SecondaryNavItem = styled.li`
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 0;
  padding: 15px 1.45rem 15px;
  position: relative;
  cursor: pointer;
`