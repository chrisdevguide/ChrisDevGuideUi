import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cdg-input',
  templateUrl: './cdg-input.component.html',
  styleUrls: ['./cdg-input.component.css']
})
export class CdgInputComponent implements OnInit {

  @Input() type: string = "text";
  @Input() label: string;
  @Input() placeholder: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
