import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';
import { interval, Observable, map, filter,tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('snapface');
  interval$!: Observable<string>;
  
 ngOnInit() {

    this.interval$ = interval(1000).pipe(
        filter(value => value % 3 === 0),
        map(value => value % 2 === 0 ?
            `Je suis ${value} et je suis pair` :
            `Je suis ${value} et je suis impair`
        ),
        tap(text => this.logger(text))
    );
  }

  logger(text: string): void {
    console.log(`Log: ${text}`);
}
 
}
