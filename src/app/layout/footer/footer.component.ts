import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class FooterComponent implements OnInit {
  @Input() content: any;
  footerContent: any; 

  constructor() {}


  ngOnInit(): void {
    this.footerContent = this.content; 
  }
}