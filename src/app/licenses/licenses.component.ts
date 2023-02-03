import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.less']
})
export class LicensesComponent implements OnInit {
  public faq = [
    {
      header: 'Почему так дешёво?',
      body: 'Это внутренние лицензии, их можно заказать только при наличии активной услуги хостинга или администрирования.'
    },
    {
      header: 'Есть ли возврат средств?',
      body: 'Средства за лицензии на ПО не возвращаются.'
    },
    {
      header: 'Есть ли администрирование?',
      body: 'В стоимость всех лицензий включены услуги базового администрирования, с возможностью установки и настройки ПО для вас.'
    },
    {
      header: 'Сколько активируется лицензия?',
      body: 'Обычная лицензия готова к использованию в течении 12-и часов, но бывают исключения.'
    },
  ];
  public open: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

}
