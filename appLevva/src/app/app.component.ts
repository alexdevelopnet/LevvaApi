import { Component, Input, OnInit } from '@angular/core';
import { PessoaComponent } from './components/pessoas/pessoa/pessoa.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appLevva';
 

  ngOnInit(): void {
  }
}


