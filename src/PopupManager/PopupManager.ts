import { generateHash } from "../utils";
import { Queue } from "../utils/Queue";
import type { PopupOptions } from "../types";
import { DefaultTemplate } from "../templates";

const PopupManager = (function () {
    let modalRef: any;
    const queue: Queue = new Queue();
    let templates: { [code: string]: any } = { default: DefaultTemplate }

    // private functions

    const elementAdapter = (el: PopupOptions): PopupOptions => {
        if (!el.id)
            el.id = generateHash();
        return el;
    }

    // public functions

    const setRef = (ref: any) => { // TODO: react native modal reference
        modalRef = ref
    }

    const setTemplates = (customTemplates: PopupOptions) => {
        templates = { default: DefaultTemplate, ...customTemplates }
    }

    const add = (popup: PopupOptions) => {
        queue.insert(elementAdapter(popup));
    }

    const addFirst = (popup: PopupOptions) => {
        queue.insertHead(elementAdapter(popup));
    }

    const clear = () => {
        queue.reset();
        next();
    }

    const next = () => {
        try {
            const popupConfig: PopupOptions = queue.dequeue();
            if (popupConfig) {
                let TemplateComp;
                if (popupConfig.type && templates[popupConfig.type]) {
                    TemplateComp = templates[popupConfig.type](popupConfig)
                } else {
                    TemplateComp = templates.default(popupConfig)
                }
                modalRef.show(TemplateComp)
                // modalRef?.show(popupConfig)
            } else if (modalRef.isShown()) modalRef?.hide()
        } catch (err) {
            console.log("PopupManager ~ next ~ err", err)
        }
    }

    return {
        setRef,
        setTemplates,
        add,
        addFirst,
        clear,
        next
    };
})();

export default PopupManager