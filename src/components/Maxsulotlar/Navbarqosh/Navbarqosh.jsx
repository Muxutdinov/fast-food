import React, { useContext, useState } from "react";
import {
  Container,
  Left,
  Right,
  RightWrapper,
  Title,
  Text,
  Input,
  RightLast,
  Saqlash,
  Saqlashbtn,
  SaqlashText,
} from "./NavbarqoshStyle";
import { Maxsulot } from "../MaxContext";
const Navbarqosh = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [narx, setNarx] = useState("");
  const [kategorya, setKategorya] = useState("");
  const [data, setData] = useContext(Maxsulot);
  const onAdd = () => {
    setData((prev) => [
      ...prev,
      {
        id: data.length + 1,
        name: name,
        title: title,
        narx: narx,
        kategorya: kategorya,
      },
    ]);
  };
  return (
    <Container>
      <Left></Left>
      <Right>
        <RightWrapper>
          <Title>Yangi maxsulot qo'shish</Title>
        </RightWrapper>
        <RightWrapper>
          <Text>Maxsulot nomi</Text>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </RightWrapper>
        <RightWrapper>
          <Text>Kategorya</Text>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </RightWrapper>
        <RightWrapper>
          <Text>Narxi</Text>
          <Input value={narx} onChange={(e) => setNarx(e.target.value)} />
        </RightWrapper>
        <RightWrapper>
          <Text>Qo'shimcha malumot</Text>
          <Input
            value={kategorya}
            onChange={(e) => setKategorya(e.target.value)}
          />
        </RightWrapper>
        <RightWrapper>
          <Text>Maxsulot rasmini yuklash</Text>
          {/* <Input value={narx} onChange={(e) => setNarx(e.target.value)} /> */}
        </RightWrapper>
        <Saqlashbtn onClick={onAdd}>
          <SaqlashText>Saqlash</SaqlashText>
        </Saqlashbtn>
      </Right>
    </Container>
  );
};

export default Navbarqosh;