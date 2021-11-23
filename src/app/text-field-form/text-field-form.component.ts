import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-field-form',
  templateUrl: './text-field-form.component.html',
  styleUrls: ['./text-field-form.component.scss'],
})
export class TextFieldFormComponent implements OnInit {
  control = new FormControl('');

  constructor() {}

  ngOnInit() {}
}
