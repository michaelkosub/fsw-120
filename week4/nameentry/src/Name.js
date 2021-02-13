import React from "react";


function orderList(props) {
    return(
        <ol>{props.one.map(one => <li key = {one}>{one}</li>)}</ol>
    )
}











export default orderList