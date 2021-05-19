import { View } from "./View";

export class MessageView extends View<string> {


    template(model: string, alertColor: string): string {

        return `<p class="alert ${alertColor}">${model}</p>`;
    }
}

