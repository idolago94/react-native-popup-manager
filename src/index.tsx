import React from "react";
import PopupComponent from "./PopupComponent";
import PopupManager from './PopupManager';
import { closeAction } from './generators'
import type { PopupOptions } from "./types";

interface ProviderProps {
  templates?: PopupOptions
}

const PopupProvider: React.FC<ProviderProps> = ({
  children,
  templates
}) => {

  React.useEffect(() => {
    templates && PopupManager.setTemplates(templates)
  }, [])

  return <>
    <PopupComponent ref={PopupManager.setRef} />
    {children}
  </>
}

export {
  PopupProvider,
  PopupManager,
  closeAction // TODO: import this function from 'react-native-popup-manager/@generators'
}