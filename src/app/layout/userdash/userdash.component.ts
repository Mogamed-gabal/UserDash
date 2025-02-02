import { Component, OnInit } from '@angular/core';
import { HeadrComponent } from "../headr/headr.component";
import { TapleComponent } from "../taple/taple.component";
import { FooterComponent } from "../footer/footer.component";
import { ContentService } from '../../services/content.service';
import { TableService } from '../../services/table.service';
import { NavComponent } from '../nav/nav.component';
import { ChangeDetectorRef } from '@angular/core';

TableService
@Component({
  selector: 'app-userdash',
  imports: [HeadrComponent, TapleComponent, FooterComponent,NavComponent,],
  templateUrl: './userdash.component.html',
  styleUrl: './userdash.component.css'
})
export class UserdashComponent implements OnInit {
  Bodycontents:any;
  navData:any;
  HeaderData:any;
  HeaderBody:any;
  TableHeading:any
  TableContent:any
  TableBody:any
  footerData:any
  lang: string = 'ar'; // Default language
  dir: string = 'rtl'; // Default direction

constructor(private content:ContentService , private table:TableService, private cdr: ChangeDetectorRef){}
getArAllData()
{
// body data
this.dir = this.lang === 'ar' ? 'rtl' : 'ltr'; // Set direction based on language
    this.Bodycontents = this.content.getContent(this.lang); // Fetch content from ContentService
    this.navData = this.Bodycontents.nav; // Update nav data
    this.HeaderData = this.Bodycontents.headerTop; // Update header data
    this.HeaderBody = this.Bodycontents.headerBody; // Update header body data
    this.TableHeading = this.Bodycontents.table.headers; // Update table headers
    this.TableBody = this.table.getContent(this.lang).table.tableBody.rows; // Update table body
    this.footerData = this.Bodycontents.footer; // Update footer data

}

ngOnInit(): void {
  this.getArAllData()

}

}
