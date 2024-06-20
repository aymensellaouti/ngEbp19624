import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  ngOnInit(): void {
    this.color = this.defaultColor;
  }
  @Input()
  defaultColor = 'blue';
  color = this.defaultColor;
  bgc = 'gold';
}
