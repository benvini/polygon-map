import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const StyledText = styled.label`
  font-size: 20px;
`;

const Typography = ({ children }: Props) => {
  return (
    <StyledText>{children}</StyledText>
  );
};

export default Typography;
