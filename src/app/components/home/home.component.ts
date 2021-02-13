import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  
    <app-ng-style></app-ng-style>
    <br>

    <app-css></app-css>
    <br>

    <app-clases></app-clases>
    <br><br/>
    
    <p [appResaltado]="'red'">Hola Mundo</p>
    <br>

    <app-ng-switch></app-ng-switch>
    
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor"); 
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(): void {
    console.log("OnChanges");
  }

  ngDoCheck(): void {
    console.log("DoCheck");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy");
  }

}
