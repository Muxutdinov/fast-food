import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Container,
  Left,
  Right,
  RightWrapper,
  Title,
  Text,
  Input,
  Saqlashbtn,
  SaqlashText,
} from "./NavbarqoshStyle";
import { Maxsulot } from "../MaxContext";
const Navbarqosh = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [narx, setNarx] = useState("");
  const [kategorya, setKategorya] = useState("");
  const [img, setImg] = useState("");
  const [data, setData] = useContext(Maxsulot);
  const onAdd = () => {
    if (name.length !== 0 && title.length !== 0 && narx.length !== 0) {
      setData((prev) => [
        ...prev,
        {
          id: data.length + 1,
          img:img,
          name: name,
          title: title,
          narx: narx,
          kategorya: kategorya,
        },
      ]);
      setName("")
      setTitle("")
      setNarx("")
      setKategorya("")
      setImg('')
      toast.success("Maxsulot muvaffaqiyatli qo'shildi!")
    }
  };
  return (
    <Container>
       <ToastContainer/>
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
          <Text>Maxsulot rasmini linkni joylang</Text>
          <Input value={img} onChange={(e) => setImg(e.target.value)} />
        </RightWrapper>
        <Saqlashbtn onClick={onAdd}>
          <SaqlashText>Saqlash</SaqlashText>
        </Saqlashbtn>
      </Right>
    </Container>
  );
};

export default Navbarqosh;
