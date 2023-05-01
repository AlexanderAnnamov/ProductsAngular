import { Component, Input } from "@angular/core";
import { exampleIpProduct } from "src/app/models/exampleProduct";

@Component({
    selector: "example-component",
    templateUrl: "./example.component.html",
    styleUrls: ["./example.component.scss"],
})

export class exampleComponent{
    title = "Angular"
    @Input() product: exampleIpProduct
    details = false
}
