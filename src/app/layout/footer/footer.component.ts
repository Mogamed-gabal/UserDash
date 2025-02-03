import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class FooterComponent implements OnInit {
  private _content: any;

  @Input() 
  set content(value: any) {
    this._content = value;
    
  }
  get content(): any {
    return this._content;
  }

  ngOnInit(): void {
  
  }


}