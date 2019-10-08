import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import {Output, EventEmitter} from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; //get a product as input. The alert checks the product's price, and, if the price is greater than $700, displays a "Notify Me" button
  @Output () notify = new EventEmitter();  // allows the product alert component to emit an event when the value of the notify property changes.

  constructor() {}

  ngOnInit() {}
}
