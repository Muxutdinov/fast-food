import React from "react";
import Done from "../../Generic/Dane";
import Cancel from "../../Generic/Cancel";
import {
  Container,
  MinWrapbir,
  MinWrapuch,
  Wrapper,
  MinWrapikki,
  MinWraptort,
  Wrapbir,
  Num,
  IconWrap,
  Save,
  Soat,
  Time,
  Border,
  Last,
} from "./style";
import { BuyurtmaContext } from "../../context/Buyurtmalar/buyurtmalar";

export const ProductCard = ({ value }) => {
  const [dispatch] = BuyurtmaContext();

  const onCancel = (value) => {
    dispatch({ type: "delete", payload: value });
  };
  const onDone = (value) => {
    console.log(value, "done");
  };
  return (
    <Container>
      <Wrapper>
        <MinWrapbir>
          <Wrapbir align>
            <Num>{value.orderId}</Num>
            <Border/>
            <IconWrap><Save/></IconWrap>
          </Wrapbir>
          <Wrapbir>
            <Soat/>
            <Time>00:34</Time>
          </Wrapbir>
        </MinWrapbir>
        <Last/>
        <MinWrapikki>2</MinWrapikki>
        <MinWrapuch>3</MinWrapuch>
        <MinWraptort>4</MinWraptort>
      </Wrapper>
    </Container>
  );
};

export default ProductCard;

{
  /* <Info.OrderID>{value.orderId}</Info.OrderID>
<IconWrapper>
  <Info.Save />
</IconWrapper>
<Timer>
  <Info.Clock />
  <Info.Text>{`${value.time.getHours()}: ${value.time.getMinutes()}`}</Info.Text>
</Timer>
</Wrapper>
<Wrapper flex>
<Info>
  <Info.User />
  <div>
    <Info.Name>{value.user.name}</Info.Name>
    <Info.Nuber>{value.user.phone}</Info.Nuber>
  </div>
</Info>
<Info center>
  <div>
    <Info.Total top>Umumiy Summa</Info.Total>
    <Info.Price>{value.total} UZS</Info.Price>
  </div>
  <Info end={'true'}>
    <Info.PaymeIcon />
    <Info.Payme>Payme</Info.Payme>
  </Info>
</Info>
</Wrapper>
<Wrapper flex last>
<Footer>
  <div>
    <Info.Total>Operator</Info.Total>
    <Info.Name>{value.operator.name}</Info.Name>
  </div>
  <div onClick={() => onCancel(value)}>
    <Cancel />
  </div>
</Footer>
<Footer>
  <div>
    <Info.Total>Filiall</Info.Total>
    <Info.Name>
      {value.filial.title} <br /> {value.filial.location}
    </Info.Name>
  </div>
  <div onClick={() => onDone(value)}>
    <Done />
  </div>
</Footer> */
}