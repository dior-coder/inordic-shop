import { Interface } from "readline";
import { type } from "os";

export type buttonsAndLinks = {
        text: string
        link: string
        icon?: string
    }
export interface iMenu{
        menu: {
            buttons: buttonsAndLinks []
            links:buttonsAndLinks []
        }
    }