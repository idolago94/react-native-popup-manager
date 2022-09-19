import { generateHash } from "../utils";
import { Queue } from "../utils/Queue";
import type { PopupOptions } from "./types";

const PopupManager = (function () {
    const queue: Queue = new Queue();
    let modalRef: any;

    const elementAdapter = (el: PopupOptions): PopupOptions => {
        if (!el.id)
            el.id = generateHash();
        return el;
    }

    return {
        setRef: (ref: any) => { // TODO: react native modal reference
            modalRef = ref
        },
        add: (popup: PopupOptions) => {
            queue.insert(elementAdapter(popup));
        },
        addFirst: (popup: PopupOptions) => {
            queue.insertHead(elementAdapter(popup));
        },
        next: () => {
            try {
                const popup: PopupOptions = queue.dequeue();
                if (popup) {
                    modalRef?.show(popup)
                } else modalRef?.hide()
            } catch (err) {
                console.log("PopupManager ~ next ~ err", err)
            }
        }
    };
})();

export default PopupManager