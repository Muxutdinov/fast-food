import React from 'react';
import { Container, Wrapper } from './style';
import ProductCard from '../../../components/Buyurtmalar/ProductCardH';
import { BuyurtmaContext } from '../../../components/context/Buyurtmalar/buyurtmalar';

export const Body = () => {
  const [card] = BuyurtmaContext();
  return (
    <Container>
      <Wrapper>
        {card.yangi.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.qabul.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.jonatilgan.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.yopilgan.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Body;
