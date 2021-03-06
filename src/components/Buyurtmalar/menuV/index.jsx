import React from "react";
import { Container, Wrapper } from "./style";
import ProductCard from "../../../components/Buyurtmalar/ProductCardV";
import { BuyurtmaContext } from "../../../components/context/Buyurtmalar/buyurtmalar";

export const Body = (props) => {
  const [card] = BuyurtmaContext();
  const { active } = props;
  return (
    <Container>
      {active === "Yangi" ? (
        <Wrapper>
          {card.yangi.map((value) => (
            <ProductCard key={value.id} value={value} />
          ))}
        </Wrapper>
      ) : active === "Qabul" ? (
        <Wrapper>
          {card.qabul.map((value) => (
            <ProductCard key={value.id} value={value} />
          ))}
        </Wrapper>
      ) : active === "Jo'natilgan" ? (
        <Wrapper>
          {card.jonatilgan.map((value) => (
            <ProductCard key={value.id} value={value} />
          ))}
        </Wrapper>
      ) : (
        <Wrapper>
          {card.yopilgan.map((value) => (
            <ProductCard key={value.id} value={value} />
          ))}
        </Wrapper>
      )}
    </Container>
  );
};

export default Body;
