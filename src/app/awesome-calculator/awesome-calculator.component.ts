import { Component, OnInit } from '@angular/core';
import {formatNumber} from '@angular/common';

@Component({
  selector: 'app-awesome-calculator',
  templateUrl: './awesome-calculator.component.html',
  styleUrls: ['./awesome-calculator.component.css']
})
export class AwesomeCalculatorComponent implements OnInit {

  result = 0;
  inp1 = null;
  inp2 = null;
  inp3 = null;

  constructor() {}

  onInp(): void{
    // @ts-ignore
    this.inp1 = document.getElementById('inp1');
    // @ts-ignore
    this.inp2 = document.getElementById('inp2');
    // @ts-ignore
    this.inp3 = document.getElementById('inp3');
    this.calc();
  }

  calc(): void {
    // @ts-ignore
    switch (this.inp2.value) {
      case '+':
        // @ts-ignore
        // tslint:disable-next-line:radix
        this.result = parseInt(this.inp1.value) + parseInt(this.inp3.value);
        break;
      case '-':
        // @ts-ignore
        // tslint:disable-next-line:radix
        this.result = parseInt(this.inp1.value) - parseInt(this.inp3.value);
        break;
      case '*':
        // @ts-ignore
        // tslint:disable-next-line:radix
        this.result = parseInt(this.inp1.value) * parseInt(this.inp3.value);
        break;
      case '/':
        // @ts-ignore
        // tslint:disable-next-line:radix
        this.result = parseInt(this.inp1.value) / parseInt(this.inp3.value);
    }
  }

  ngOnInit(): void { }

}
