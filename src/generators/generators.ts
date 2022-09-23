import PopupManager from "../PopupManager";

export const closeAction = (func?: CallableFunction) => () => {
    func && func();
    PopupManager.next();
}