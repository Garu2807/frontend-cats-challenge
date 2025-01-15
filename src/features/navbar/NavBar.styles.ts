import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  width: 100%;
  height: 64px;
  background-color: #2196f3;
  padding-left: 50px;
`;

export const Container = styled.div`
  width: 293px;
  height: 100%; /* Убедитесь, что высота задана */
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none; /* Убираем подчеркивание */
  color: white;
  transition: background-color 0.3s ease; /* Добавляем плавный переход для фона */

  &:hover {
    background-color: #1e88e5;

    span {
      transform: scale(1.1); /* Увеличиваем текст при наведении */
      transition: transform 0.3s ease; /* Добавляем плавный переход для трансформации */
    }
  }
`;

// Используем span для текста внутри ссылки
export const LinkText = styled.span`
  display: inline-block;
  transition: transform 0.3s ease; /* Добавляем плавный переход для трансформации */
`;
