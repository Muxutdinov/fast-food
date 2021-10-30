import React from "react";
import {
  Container,
  Wrapper,
  Plus,
  Title,
  Wrapinput,
  Wrapput,
  Mintext,
  Search,
  Filtered,
  Filter,
  Filtericon,
  Border,
  Lastcontainer,
  Wrapperlasticons,
  LastIcon,
  Chart,
  NotChart,
  Borders,
} from "./style";

export const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Plus />
          <Title>
            Yangi maxsulot <br /> qo'shish
          </Title>
          <Border />
          <Wrapinput>
            <Wrapput>
              <div className="input">
                <Mintext>Qidirish</Mintext>
                <Search />
              </div>
            </Wrapput>
          </Wrapinput>
          <Filtered>
            <Filter>
              <Filtericon />
            </Filter>
          </Filtered>
          <Borders />
          <Lastcontainer>
            <Wrapperlasticons>
              <LastIcon>
                <Chart />
              </LastIcon>
              <LastIcon>
                <NotChart />
              </LastIcon>
            </Wrapperlasticons>
          </Lastcontainer>
        </Wrapper>
      </Container>
    </>
  );
};
export default Navbar;