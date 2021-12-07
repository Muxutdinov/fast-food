import React, { useContext } from "react";
import { KategoryaCon } from "../KategoryaContext";
import { DeleteOutline } from "@material-ui/icons";

import {
  Container,
  WrapperCon,
  Icon,
  Wraptext,
  Iconswrap,
  Icones,
  Icontwo,
  Iconone,
} from "./style";

export const Card = (props) => {
  const [data, setData] = useContext(KategoryaCon);
  const onDelete = (e) => {
    setData((prev) => prev.filter((value) => value.id !== e));
  };
  return (
    <>
      <Container>
        <WrapperCon>
          {/* <Icon src={props.data.img} /> */}
          <Wraptext>{props.data.nameuz}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>{props.data.nameru}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>{props.data.text}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>{props.data.karegorya}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Iconswrap onClick={() => onDelete(props.data.id)}>
            <Icones>
              <DeleteOutline className="maxsulotDelete"/>
            </Icones>
          </Iconswrap>
        </WrapperCon>
      </Container>
    </>
  );
};
export default Card;