import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public chapters = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'Chapter 1 | The Beginning',
      url: '/chapter1'
    },
    {
      title: 'Chapter 2 | The Middle',
      url: '/chapter2'
    },
    {
      title: 'Chapter 3 | The End',
      url: '/chapter3'
    },
    {
      title: 'The End',
      url: '/end'
    }
  ];
  constructor() {
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
