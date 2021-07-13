import styled from "styled-components";

import Typography from "./Typography";
import COLOR from "../../styles/Color";

const StyledButton = styled.button`
  font-weight: bold;
  background-color: ${COLOR.PRIMARY};
  padding: 10px;
  align-items: center;
  border-radius: 4px;
  margin-top: 12px;
  height: 48px;
  cursor: pointer;
`;

type Props = {
  onClick: () => void;
  disabled?: boolean;
  title: string;
};

const MainButton = ({ onClick, disabled = false, title }: Props) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      <Typography>{title}</Typography>
    </StyledButton>
  );
};

export default MainButton;
