import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px auto;
    max-width: 700px;
    background-color: white;
    padding: 0.7rem;
    box-shadow: 0 0 3px #aaa;
`
export const ContainerTitle = styled.div`
color: #4c75a3;
font-size: 1.5rem;
text-align: left;
padding: 10px;
border-bottom: solid 1px #4c75a3;
margin-bottom: 10px;
`

export const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: .5rem;
`
export const FormLabel = styled.label`
    padding: .5rem 1em .5rem 0;
    width: 25%;
`
export const FormInput = styled.input`
    width: 24%;
`
export const FormInfo = styled.label`
text-align: center;
padding: .3rem .6rem 0 .6rem;
`
export const ConditionalFormLabel = styled.label`
margin: .4rem 0 0 .5rem;
    width: 30%;
`
export const FormTextArea = styled.textarea`
    height: 5rem;
    width: 24%;
`
export const FormSelect = styled.select`
    color: #444;
    border: solid 1px #000;
    width: 25%;
`
export const FormInputRadio = styled.input`
margin-top: 11px;
`
export const FormLabelRadio = styled.label`
margin-top: 8px;
padding-left: 7px;
`
export const SubmitInput = styled.input`
background-color: orange;
color: white;
padding: .5rem .3rem;
text-transform: uppercase;
border: none;
`

export const SubmitContainer = styled.div`
text-align: center;
height: 5rem;
`

export const ModalContainer = styled.div`
margin: 30px auto;
max-width: 700px;
min-height: 100px;
background-color: #D4F6E5;
box-shadow: 0 0 3px #aaa;
`

export const ModalTitle = styled.div`
padding: 1rem;
color: #0CEC7C;
font-size: 1rem;
font-weight: bold;
`

export const ModalInfo = styled.div`
padding: .5rem 1rem;
color: #444;
font-size: .7rem;
`

export const Counter = styled.div`
    width: 25%;
`

export const CounterLabel = styled.div`
    padding-left: 1rem;
    color: #444;
    font-size: .8rem;
    font-weight: 400;
`
export const ErrorLabel = styled.div`
color: #fe8484;
padding: 0px 20px;
width: 25%;
`
export const Main = styled.div`
background-color: whitesmoke;
min-height: 100vh;
`
export const HeadLine = styled.div`
min-height: 10px;
background-color: #23395d;
`
export const Header = styled.div`
background-color: #4c75a3;
color: #fff;
font-size: 2rem;
padding-left: 10rem;
@media (max-width: 500px) {
  padding: 10px;
}
`