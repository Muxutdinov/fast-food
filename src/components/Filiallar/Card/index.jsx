import React, { useContext } from "react";
import { FiliallarContext } from "../FiliallarCon";
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
  const [data, setData] = useContext(FiliallarContext);
  const onDelete = (e) => {
    setData((prev) => prev.filter((value) => value.id !== e));
  };
  return (
    <>
      <Container>
        <WrapperCon>
          <Wraptext>{props.data.name}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>{props.data.title}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>{props.data.narx}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>{props.data.kategorya}</Wraptext>
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