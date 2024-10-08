import { Component } from "@angular/core"

@Component({
    selector: "app-main-layout",
    templateUrl: "./main-layout.component.html",
    styleUrls: ["./main-layout.component.css"],
})
export class MainLayoutComponent {
    showMenu: boolean = false

    toggleMenu() {
        this.showMenu = !this.showMenu
    }

    closeMenu() {
        this.showMenu = false
    }
}
