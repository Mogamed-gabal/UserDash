import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TooltipModule } from 'primeng/tooltip';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PaginatorModule } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taple',
  imports: [
    FormsModule,
    TableModule,
    SelectModule,
    MatPaginatorModule,
    ButtonModule,
    PaginatorModule,
    MatTableModule,
    TooltipModule,
    AutoCompleteModule,
  ],
  templateUrl: './taple.component.html',
  styleUrls: ['./taple.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TapleComponent implements OnInit {
  bodyData: any[] = []; 
  headerData: any[] = []; 
  custumPagi:any
  @Input() 
  set head(value: any) {
    this.headerData = value.headers;
    this.custumPagi=value
    console.log(this.custumPagi)
   
  }
  get head(): any {
    return this.headerData;
  }

  @Input() 
  set body(value: any) {
    this.bodyData = value;
   
  }
  get body(): any {
    return this.bodyData;
  }
  companyImage: string = '../../../assets/imgs/3127f2f250e6d45cdfddb2dc49464549 (1).webp';
  // data containers


  // Paginator settings
  first = 0;
  rows = 5;
  totalRecords = 0; // Total number of records
  rowsOptions = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
  ];

  constructor() {}

  ngOnInit(): void {
    this.totalRecords = this.bodyData.length; 
  }
  
  // Handle rows per page change
  onRowsChange(event: any): void {
    this.rows = event.value; 
    console.log('Selected rows:', this.rows);
  }
}