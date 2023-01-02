import { ButtonContainer } from './styles';

const ButtonS = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button">
       {label}
      </ButtonContainer>
    );
  }
  
  export default ButtonS;