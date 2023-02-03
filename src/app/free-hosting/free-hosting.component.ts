import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-hosting',
  templateUrl: './free-hosting.component.html',
  styleUrls: ['./free-hosting.component.less']
})
export class FreeHostingComponent implements OnInit {
  public faq = [
    {
      header: 'Какие ограничения на процессорное время?',
      body: 'Ограничения на процессорное время устанавливаются динамически для каждого сайта.'
    },
    {
      header: 'Что можно размещать на хостинге сайтов?',
      body: 'Вы можете размещать любой сайт, который не нарушает законодательство РФ и договор WebNodes.'
    },
    {
      header: 'Можно ли перейти на платный тариф?',
      body: 'Конечно, вы можете в любой момент перейти на платный тариф и получить все его преимущества.'
    },
  ];
  public open: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

}
