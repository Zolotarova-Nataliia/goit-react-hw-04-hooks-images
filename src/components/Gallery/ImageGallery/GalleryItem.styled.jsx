import styled from 'styled-components';

export const GalleryItem = styled.li`
  height: 300px;
  width: 450px;
`;

export const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
