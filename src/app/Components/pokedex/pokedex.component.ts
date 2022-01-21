import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})


export class PokedexComponent implements OnInit {

  name!: string;
  urlImage!: string;
  namePokemon!: string;
  index!: any
  ability!: any;
  abilityDos!: any;
  moves!: any;
  arrayMov: any[] = new Array;
  editar: boolean = true
  miMov!: string;
  miHab: any[] = new Array;
  miMovNuevo: any[] = new Array;
  miHabNuevo: any[] = new Array;
  muestra: boolean = true;
  numeros: any[] = new Array;

  constructor( private pokedex: PokedexService, http: HttpClientModule) {
  }
    
    
search(){
    this.pokedex.getNewReleases(this.name)
    .subscribe((data: any) => {
      this.urlImage = data.sprites.front_default;
      this.namePokemon = data.name;
      this.ability = data.abilities[0].ability.name
      this.abilityDos = data.abilities[1].ability.name;

      for(let i = 0; i < 10; i++){
      this.moves = data.moves[i].move.name;
      console.log(this.moves)
      this.arrayMov.push(this.moves)
      
      }
      console.log(this.arrayMov)
      
    })
  
}

searchs(){

    this.pokedex.getPokemon(this.index).subscribe((data: any) => {
      this.urlImage = data.sprites.front_default;
      this.namePokemon = data.name;
      this.ability = data.abilities[0].ability.name
      this.abilityDos = data.abilities[1].ability.name;
      this.moves = data.moves;
      console.log(data);

      for(let i = 0; i < 10; i++){
        this.moves = data.moves[i].move.name;
        console.log(this.moves)
        this.arrayMov.push(this.moves)
        
        }
        console.log(this.arrayMov)
    })

    }

    anadirHab(){
      this.miHab.push(this.miMov)
      console.log(this.miHab)
    }
    
    borrarHab(index: number){
      this.miHab.splice(index)
      console.log(this.miHab)
    }

    anadirMov(){
      this.arrayMov.push(this.miMov)
    }

    borrarMov(index: number){

      this.arrayMov.splice(index, 1)
   }

   anadirMovNuevo(){
    this.miMovNuevo.push(this.miMov)
  }
  
  borrarMovNuevo(index: number){
    this.miMovNuevo.splice(index)
  }

  borrarHabNuevo(index: number){
    this.miHabNuevo.splice(index)
    console.log(this.miHabNuevo)
  }

  anadirHabNuevo(){
    this.miHabNuevo.push(this.miHab)
    console.log(this.miHabNuevo)
  }

    edit(){
      this.editar = false;
    }
    ok(){
      this.editar = true;
    }

    mostrar(){
       this.muestra = false
    }

    mostrarMenos(){
      this.muestra = true
    }


  ngOnInit(): void {
    this.searchs();
    this.search();
  }

}
