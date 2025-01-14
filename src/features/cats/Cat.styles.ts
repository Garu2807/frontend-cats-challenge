import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  padding: 0 65px 0 65px;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 425px;
  height: 425px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const IMG = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
