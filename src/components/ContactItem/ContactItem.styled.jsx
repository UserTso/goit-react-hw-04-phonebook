import styled from '@emotion/styled';

export const Item = styled.li`
display: flex;
list-style: none;
margin-bottom: 10px;
justify-content: space-between;
&:last-child {margin-bootom: 0};

border-bottom: 1px solid rgba(128 128 128 / 10%);
`;

export const Span = styled.span`
color: grey;

`;

export const Button = styled.button`
width: 60px;
height: 20px;
color: grey;
background-color: #ffffff;
border-radius: 4px;
border: 1px solid transparent;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);

`;
