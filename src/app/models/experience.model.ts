import {Detail} from "./detail.model";

interface Experience extends Detail {
    from: String;
    to: String;
    position: String;
}

export {Experience}