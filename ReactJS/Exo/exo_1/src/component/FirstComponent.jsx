import React from 'react'
import AlertComponent from './AlertComponent'

export default function FirstComponent() {
  return (
    <>
    <AlertComponent />
    <AlertComponent appearence = "red" message = "Attention ! "/>
    <AlertComponent appearence = "blue" message =  "Something went Wrong !"/>
    <AlertComponent appearence = "green" message = "Tout est bon !"/>
    </>
  )
}
