import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
  getContent(lang: string) {
    if (lang == 'ar') {
      return {
        table:{
          tableHeaders: {
            headers:[{tableUser: "العميل",
            FirstDate: "تاريخ التعيين",
            cancelingDay: "تاريخ الغاء التعيين",
            hr: "السينمات",
            localMinutes: "عدد الأشخاص",
            glopalMinutes: "عدد مرات الشراء",
            amount: "التذكرة"}]
          },
          tableBody: {
            rows:[
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
              {name:'الشركة الالمانية لابادة...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'عبدالرحيم اسماعيل ناصف',localMinutes:'1240',globalMinutes:'124',amount:'61890ج.م'},
            ]
          },

        }
      
      }
    } else {
      return {

        table:{
          tableHeaders: {
            headers:[{
              tableUser: "Client",
              FirstDate: "Appointment Date",
              cancellingDay: "Appointment Cancellation Date",
              hr: "Cinemas",
              localMinutes: "Number of People",
              glopalMinutes: "Number of Purchases",
              amount: "Ticket",
              }]
          },
          tableBody: {
            rows:[
              {name:'German Company for Extermination...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdel Rahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'}, 
              {name:'German Company for Exterminating...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company To exterminate...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company for Exterminating...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company To exterminate...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company for Exterminating...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company To exterminate...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company for Exterminating...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company To exterminate...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company for Exterminating...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company To exterminate...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company for Exterminating...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company To exterminate...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company for Exterminating...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company To exterminate...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company for Exterminating...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company To exterminate...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company for Exterminating...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company To exterminate...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company for Exterminating...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company To exterminate...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company for Exterminating...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company To exterminate...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company for Exterminating...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdelrahim Ismail Nasef',localMinutes:'1240',globalMinutes:'124',amount:'61890EGP'},
              {name:'German Company To eradicate...',startdate:'01/12/2024',enddate:'01/12/2024',manager:'Abdul Rahim Ismail Nasif',localMinutes:'1240',globalMinut:'124',amount:'61890EGP'}
            ]
            },
        }
      }
    }
  }
}
