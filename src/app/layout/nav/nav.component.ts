import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
constructor(){}
// import data from parent
@Input()navBoy:any
contnt:any;

ngOnInit(): void {
  this.contnt=this.navBoy
}
}
