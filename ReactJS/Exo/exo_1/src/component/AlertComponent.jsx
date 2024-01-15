import React from 'react'


export default function Alert(props) {
  const red ={
    backgroundColor: "red"
  }
  const blue ={
    backgroundColor: "blue"
  }
  const green ={
    backgroundColor: "green"
  }



  const text = props?.message ?? "Something went Wrong ! "
  const appearence = props?.appearence ?? red
  console.log(text);
  return (
    <p style={{appearence}}>{text}</p>
  )
}
