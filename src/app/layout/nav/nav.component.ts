import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
constructor(){}
@Input()navBoy:any
contnt:any;

ngOnInit(): void {
  this.contnt=this.navBoy
}
}
