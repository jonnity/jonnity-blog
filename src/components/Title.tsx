import { FC } from "react";
import styled from "styled-components";

const Headline = styled.h1`
  color: #50ba13;
`;

type Props = { title: string };
const Title: FC<Props> = ({ title }) => {
  return <Headline>{title}</Headline>;
};

export default Title;
