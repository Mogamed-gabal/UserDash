import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }
  getContent(lang: string) {
    if (lang == 'ar') {
      return {
        nav:{
          probirty:"عرض الرقم"
        },
        headerTop: {
          titleNumebr: "012345678910",
          button: "قيد الاستخدام",
          headerDropDwon:{
            editbtn:"تعديل الرقم",
            deletBtn:"الغاء التعيين" 
          },
        },
          headerBody:{
            data:[
              { title:"اسم البروتوكول",data:"فودافون مصر"},
              { title:"الدولة",data:"المملكة الأردنية الهاشمية",img:"../../../assets/imgs/sauid_converted.webp"},
              { title:"العميل الحالي",data:"الشركة الألمانية للإبادة...",img:"../../../assets/imgs/Logo_converted.webp"},
              { title:"عدد الإمتدادات",data:"9"},
              { title:"تاريخ آخر شحنة",data:"2024/12/29"},
              { title:"الرصيد الحالى",data:"5000م.ج"},
              { title:" الرصيد المستخدم للعميل الحالي",data:"5000م.ج"},
              { title:" الرصيد المستخدم للرقم ككل",data:"5000م.ج"}

            ]
        },
        table: {
          headers:[{tableUser: "العميل",
          FirstDate: "تاريخ التعيين",
          cancelingDay: "تاريخ الغاء التعيين",
          hr: "السينمات",
          localMinutes: "عدد الأشخاص",
          glopalMinutes: "عدد مرات الشراء",
          amount: "التذكرة"}]
        },
        footer:{
          rLable:"تم الانشاء بواسطة",
          userName:"عبدالرحيم اسماعيل ناصف",
          lLaple:"تاريخ الانشاء",
          date:"01/12/2024",
          time:"04:30 م"
        }
      }
    } else {
      return {
        nav:{
          probirty:" Show Number"
        },
        headerTop: {
          titleNumebr: "012345678910",
          button: " In Using",
          headerDropDwon:{
            editbtn:" Edit Number",
            deletBtn:" Delet Employment " 
          },
        },
        headerBody:{
          dtat:[
            { title:"Protocol Name ",data:" Vodafon Egypt"},
            { title:"Country",data:"Hashemite Kingdom of Jordan"},
            { title:"Current Client", data:"German Extermination Company..."},
            { title:"Number of extensions",data:"9"},
            { title:"Last shipment date",data:"2024/12/29"},
            { title:"Current balance",data:"5000 EGP"},
            { title:"Used balance for current customer",data:"5000 EGP"},
            { title:"Used balance for the number as a whole",data:"5000 EGP"}

          ]
         },
        table: {
          tableUser: "Client",
          FirstDate: "Appointment Date",
          cancellingDay: "Appointment Cancellation Date",
          hr: "Cinemas",
          localMinutes: "Number of People",
          glopalMinutes: "Number of Purchases",
          amount: "Ticket",
          },
          footer:{
            rLable:"Created By",
            userName:"  Abd alrahim Esmail Nasf",
            lLaple:" Estaplished",
            date:"01/12/2024",
            time:"04:30 م"
          }
      }
    }
  }
}
