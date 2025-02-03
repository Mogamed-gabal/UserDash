import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }
  getContent(lang: string) {
    if (lang == 'ar') {
      console.log('Returning Arabic content');
      return {
        lang:"ar",
        nav:{
          probirty:"عرض الرقم"
        },
        header:{
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
                { title:"العميل الحالي",data:"الشركة الألمانية للإبادة...",img:"../../../assets/imgs/3127f2f250e6d45cdfddb2dc49464549 (1).webp"},
                { title:"عدد الإمتدادات",data:"9"},
                { title:"تاريخ آخر شحنة",data:"2024/12/29"},
                { title:"الرصيد الحالى",data:"5000م.ج"},
                { title:" الرصيد المستخدم للعميل الحالي",data:"5000م.ج"},
                { title:" الرصيد المستخدم للرقم ككل",data:"5000م.ج"}
  
              ]
          },
        },
       
        table: {
          paginatorCusStart:"عرض",
          paginatorCusend:"من اصل",
          headers:[{tableUser: "العميل",
          FirstDate: "تاريخ التعيين",
          cancelingDay: "تاريخ الغاء التعيين",
          hr: "المسؤوول عن التعيين",
          localMinutes: " الدقائق المحلية",
          glopalMinutes: "  الدقائق الدولية",
          amount: "المبلغ"}]
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
      console.log('Returning En content');
      return {
        lang:"en",
        nav:{
          probirty:" Show Number"
        }, header:{
          headerTop: {
            titleNumebr: "012345678910",
            button: "In Use",
            headerDropDwon:{
            editbtn:"Edit Number",
            deletBtn:"Delete Assignment"
            },
          },
            headerBody:{
              data:[
                {title:"Protocol Name",data:"Vodafone Egypt"},
                { title:"Country",data:"Hashemite Kingdom of Jordan",img:"../../../assets/imgs/sauid_converted.webp"},
                { title:"Current Customer",data:"German Extermination Company...",img:"../../../assets/imgs/3127f2f250e6d45cdfddb2dc49464549 (1).webp"},
                { title:"Number of Extensions",data:"9"},
                { title:"Date of Last Shipment",data:"2024/12/29"},
                { title:"Current Balance",data:"5000 EGP"},
                { title:"Customer's Used Balance current",data:"5000EGP"},
                { title:"The credit used for the whole number",data:"5000EGP"}
  
              ]
          },
        },

       
        table: {
          paginatorCusStart:"Show",
          paginatorCusend:"From",

          headers:[{tableUser: "Client",
            FirstDate: "Appointment Date",
            cancellingDay: "Appointment Cancellation Date",
            hr: "Appointer",
            localMinutes: "Local Minutes",
            glopalMinutes: "International Minutes",
            amount: "Amount"}]
        },
          footer:{
            rLable:"Created By",
            userName:"  Abd alrahim Esmail Nasf",
            lLaple:" Estaplished",
            date:"01/12/2024",
            time:"04:30 Pm"
          }
      }
    }
  }
}
