import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private url: string = "https://pokeapi.co/api/v2/pokemon/";
  private url2: string = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=50";

  constructor(private http: HttpClient) {

   }

   getNewReleases(name: string){

    return this.http.get(this.url + name)
    
   }

   getPokemon(index: any){

    return this.http.get(this.url + index)
    
   }

   getTodosPokemons(){

    return this.http.get(this.url2)
   }
 
  }

