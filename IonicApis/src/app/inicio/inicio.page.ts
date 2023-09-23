import { Component, OnInit } from '@angular/core';
import { StateService } from '../home/state/state.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor( private rmService: StateService) { }

  ngOnInit(): void{

    this.rmService.getCharacters().subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('characters', JSON.stringify(data.result));

      }
    )

  }
  
  getCharacters(){
    const data = localStorage.getItem('characters');
    const result = JSON.parse(data);
    return result;
  }

}
