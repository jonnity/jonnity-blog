import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Title from "../components/Title";

type Props = { res: string };
export const getStaticProps: GetStaticProps<Props> = async (_ctx) => {
  const res = await fetch("https://httpbin.org/get");
  const text = await res.text();
  return {
    props: { res: text }, // will be passed to the page component as props
  };
};
const TestPage: NextPage<Props> = ({ res }) => {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    setTimeout(() => setText("hogehoge"), 1000);
  });

  return <Title title={text ? text : res}></Title>;
};

export default TestPage;
