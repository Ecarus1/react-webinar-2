import React from "react"
import {cn as bem} from "@bem-react/classname";
import propTypes from 'prop-types';

import BasketSimple from "../basket-simple";
import Menu from "../menu";

import "./style.css";

function Header({sum, amount, onOpen}) {
  const cn = bem('Header');

  return(
      <div className={cn()}>
        <Menu/>
        <BasketSimple sum={sum} amount={amount} onOpen={onOpen}/>
      </div>
  )
}

Header.propTypes = {
  sum: propTypes.number,
  amount: propTypes.number,
  onOpen: propTypes.func
}

export default React.memo(Header)