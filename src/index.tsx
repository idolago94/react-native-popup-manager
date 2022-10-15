import React from "react";
import PopupComponent from "./PopupComponent";
import PopupManager from './PopupManager';
import { closeAction, clearPopupsAction } from './generators'
import type { PopupOptions } from "./types";
import type { ModalProps } from "react-native";

interface ProviderProps {
  templates?: PopupOptions
}

const PopupProvider: React.FC<ProviderProps & ModalProps> = (props) => {
  const {
    children,
    templates
  } = props;

  React.useEffect(() => {
    templates && PopupManager.setTemplates(templates)
  }, [])

  return <>
    <PopupComponent ref={PopupManager.setRef} {...props} />
    {children}
  </>
}

export {
  PopupProvider,
  PopupManager,
  // TODO: import this functions from 'react-native-popup-manager/@generators'
  closeAction,
  clearPopupsAction
}