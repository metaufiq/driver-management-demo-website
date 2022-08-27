import { Component } from "../../index.types";

import { Props } from "./DriverCard.component.types";

const DriverCard:Component<Props> = ({user})=>{
  return(
  <div>
    <p>{user.firstName}, {user.lastName}</p>
    <p>{user.phone}</p>
    <p>{user.email}</p>
    <p>{user.dob}</p>
  </div>)
}

export default DriverCard;