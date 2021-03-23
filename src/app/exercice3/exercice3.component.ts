import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice3",
  templateUrl: "./exercice3.component.html",
  styleUrls: ["./exercice3.component.css"],
})
export class Exercice3Component implements OnInit {
  public stateValue: boolean;
  constructor() {}

  ngOnInit(): void {
    this.stateValue = true;
  }

  public inverserEtat() {
    this.stateValue = !this.stateValue;
  }
}
