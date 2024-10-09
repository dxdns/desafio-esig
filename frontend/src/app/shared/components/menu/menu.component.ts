import { Component, EventEmitter, Output } from "@angular/core"

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.css"],
})
export class MenuComponent {
    @Output() menuClick = new EventEmitter<void>()
    items = [
        {
            label: "Home",
            icon: "home",
            path: "/",
        },
        {
            label: "Logout",
            icon: "logout",
            path: "/auth",
        },
    ]

    onClickItem() {
        this.menuClick.emit()
    }
}
