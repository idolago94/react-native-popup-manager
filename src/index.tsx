import React from "react";
import PopupComponent from "./PopupComponent";
import popupManager from './PopupManager';

interface Props { }

const PopupProvider: React.FC<Props> = (props) => {
  return <>
    <PopupComponent ref={popupManager.setRef} />
    {props.children}
  </>
}

export {
  PopupProvider,
  popupManager
}