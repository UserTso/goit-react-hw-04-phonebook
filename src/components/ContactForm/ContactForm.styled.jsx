import styled from '@emotion/styled';
import { Form, Field } from 'formik';



export const Wrapper = styled.div`
display: flex;
justify-content: center;
`;

export const Forma = styled(Form)`
display: flex;
flex-direction: column;
`;

export const LabelForm = styled.label`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
margin-bottom: 10px;

&:last-child {margin-bottom: 0}
`;

export const ErrorText = styled.p`
color: red;
`;

export const Span = styled.span`
color: grey;
`;

export const InputForm = styled(Field)`
border: 1px solid transparent;
margin-left: 5px;
`;

export const Button = styled.button`
width: 100px;
height: 30px;
color: grey;
background-color: #ffeb3ba6;
border-radius: 4px;
border: 1px solid transparent;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
margin-top: 10px;
margin-left: auto;
margin-right: auto;
`;
