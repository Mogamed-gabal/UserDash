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
export class HeadrComponent implements OnInit  {
  tooltipText='الشركة الالمانية لابادة الحشرات'
  headertop:any
  headerBody:any
  @Input() 
  set Data(value: any) {
    this.headertop = value.headerTop;
   
  }
  get Data(): any {
    return this.headertop;
  }
  @Input() 
  set Body(value: any) {
    this.headerBody = value.headerBody.data;
   
  }
  get body(): any {
    return this.headerBody;
  }
  


  
  ngOnInit(): void {
  }

}
