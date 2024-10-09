import { Component, Input } from "@angular/core"

@Component({
    selector: "app-avatar",
    templateUrl: "./avatar.component.html",
    styleUrls: ["./avatar.component.css"],
})
export class AvatarComponent {
    @Input() imageSrc?: string
    @Input() label: string = ""

    constructor() {
        this.label = this.label.substring(0, 1).toUpperCase()
    }
}
