import { View } from "./View";

export class MessageView extends View<string> {


    template(model: string, alertColor: string): string {

        alert(alertColor);
        return `<p class="alert ${alertColor}">${model}</p>`;
    }
}

