import { Component, OnInit } from '@angular/core';
import { HeadrComponent } from "../headr/headr.component";
import { TapleComponent } from "../taple/taple.component";
import { FooterComponent } from "../footer/footer.component";
import { ContentService } from '../../services/content.service';
import { TableService } from '../../services/table.service';
import { NavComponent } from '../nav/nav.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-userdash',
  imports: [HeadrComponent, TapleComponent, FooterComponent, NavComponent],
  templateUrl: './userdash.component.html',
  styleUrl: './userdash.component.css'
})
export class UserdashComponent implements OnInit {
  Bodycontents: any;
  navData: any;
  HeaderData: any;
  HeaderBody: any;
  TableHeading: any;
  TableContent: any;
  TableBody: any;
  footerData: any;
  lang: string = 'ar'; // Default language
  dir: string = 'rtl'; // Default direction

  constructor(private content: ContentService, private table: TableService, private cdr: ChangeDetectorRef) {}


  getArAllData() {
    this.dir = this.lang === 'ar' ? 'rtl' : 'ltr'; // Set direction based on language
    this.Bodycontents = this.content.getContent(localStorage.getItem(`lang`) ?? "ar"); // Fetch content from ContentService
    console.log(this.Bodycontents)
    this.navData = this.Bodycontents.nav; // Update nav data
    this.HeaderData = this.Bodycontents.header // Update header data
    this.HeaderBody = this.Bodycontents.header // Update header body data
    this.TableHeading = this.Bodycontents.table.headers; // Update table headers
    this.TableBody = this.table.getContent(this.lang).table.tableBody.rows; // Update table body
    this.footerData = this.Bodycontents.footer; // Update footer data
  }
  ngOnInit(): void {
    this.getArAllData();
  }


}