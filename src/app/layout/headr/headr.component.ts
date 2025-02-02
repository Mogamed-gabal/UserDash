import { ChangeDetectionStrategy, Component, Input, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';
import { TooltipModule } from 'primeng/tooltip';
import { gsap } from 'gsap'; // Import GSAP

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
    this.headertop=this.Data
    this.headerBody=this.body
    console.log(this.headerBody.data);
    

  }
}
