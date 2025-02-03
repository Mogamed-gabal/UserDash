import { Component, OnInit } from '@angular/core';
import { HeadrComponent } from "../headr/headr.component";
import { TapleComponent } from "../taple/taple.component";
import { FooterComponent } from "../footer/footer.component";
import { ContentService } from '../../services/content.service';
import { TableService } from '../../services/table.service';
import { NavComponent } from '../nav/nav.component';
import { ChangeDetectorRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
@Component({
  selector: 'app-userdash',
  imports: [HeadrComponent, TapleComponent, FooterComponent, NavComponent,SpeedDialModule],
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
  items: MenuItem[] = [];

  constructor(private content: ContentService, private table: TableService, private cdr: ChangeDetectorRef) {}


  getArAllData() {
    this.dir = this.lang === 'ar' ? 'rtl' : 'ltr'; // Set direction based on language
    this.Bodycontents = this.content.getContent(this.lang); // Fetch content from ContentService
    this.navData = this.Bodycontents.nav; // Update nav data
    this.HeaderData = this.Bodycontents.header // Update header data
    this.HeaderBody = this.Bodycontents.header // Update header body data
    this.TableHeading = this.Bodycontents.table; // Update table headers
    this.TableBody = this.table.getContent(this.lang).table.tableBody.rows; // Update table body
    this.footerData = this.Bodycontents.footer; // Update footer data
    this.cdr.detectChanges(); // Manually trigger change detection

  }
  ngOnInit(): void {
    this.getArAllData();
    // make a speedial Button For Lang
    this.items = [
      {
        label: 'Arabic',
        icon: 'pi pi-language',
        command: () => this.changeLanguage('ar')
      },
      {
        label: 'English',
        icon: 'pi pi-language',
        command: () => this.changeLanguage('en')
      }
    ];
  }
  // Change Page Lang
  changeLanguage(lang: string) {
    this.lang = lang;
    localStorage.setItem('lang', lang); // Save the selected language to localStorage
    this.getArAllData();
  }


}