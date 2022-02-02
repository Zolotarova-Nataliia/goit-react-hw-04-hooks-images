import styled from 'styled-components';

export const GalleryItem = styled.li`
  width: 24vw;
  height: 300px;
`;

export const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
