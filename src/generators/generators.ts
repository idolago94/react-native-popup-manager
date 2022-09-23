import PopupManager from "../PopupManager";

export const closeAction = (func?: CallableFunction) => () => {
    func && func();
    PopupManager.next();
}

export const clearPopupsAction = (func?: CallableFunction) => () => {
    func && func();
    PopupManager.clear();
}