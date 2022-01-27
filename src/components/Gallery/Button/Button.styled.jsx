import styled from 'styled-components';

export const LoadBtn = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background: linear-gradient(
    45deg,
    #fcf4c9,
    #fee3e2,
    #fbcdf2,
    #e8befa,
    #abbfff,
    #bbf3c0
  );
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background: linear-gradient(
      45deg,
      #f0e8bb,
      #fcd6d5,
      #f8c2ed,
      #dfaef5,
      #9cb2fa,
      #b1f7b7
    );
  }
`;
