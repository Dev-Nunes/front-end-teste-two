import styled from 'styled-components';

export const Container = styled.header`
  margin: 0 auto;

  width: 100%;
  max-width: 1280px;
  height: ${({theme}) => theme.spacings[4]};

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.section`
  display: flex;
  align-items: center;

  width: max-content;
  height: 4rem;

  span {
    display: inline-block;
    font-weight: 600;
    size: 1.5rem;

    line-height: 4rem;
  }
`

export const MenuActions = styled.section`
  display: flex;
  gap: .5rem;

  svg {
    cursor: pointer;
  }
`

export const FavoriteList = styled.section`
  display: flex;
  align-items: center;
  gap: .25rem;

  span {
    font-weight: 600;
  }
`