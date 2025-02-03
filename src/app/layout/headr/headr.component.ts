import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-headr',
  imports: [SpeedDialModule,TooltipModule,FormsModule],
  templateUrl: './headr.component.html',
  styleUrl: './headr.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadrComponent implements OnInit {
@Input()Data:any
@Input()body:any
  headertop:any
  headerBody:any
  tooltipText='الشركة الالمانية لابادة الحشرات'


  ngOnInit(): void {
    this.headertop=this.Data.headerTop
    this.headerBody=this.body.headerBody
    console.log(this.headerBody.data);
    

  }
}
