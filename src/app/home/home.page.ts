import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alt : number
  peso : number
  resultado: string
  inf: string
  gen: string
  imagem: any = "assets/icon/favicon.png"

  constructor() {}

  IMC(){

    var conta = this.peso / this.alt **2

    if (this.gen == 'F') {

      if (conta <= 19){
        this.inf = "Abaixo do Peso"
        this.imagem = "assets/icon/cintura.png"
      }
  
      else if (conta > 19 && conta <= 27.3){
        this.inf = "Peso Normal"
        this.imagem = "assets/icon/mulher.png"
      }    
  
      else {
        this.inf = "Acima do Peso"
        this.imagem = "assets/icon/cintura.png"
      }    
      
    }

    if (this.gen == 'M') {

      if (conta <= 20.7){
        this.inf = "Abaixo do Peso"
        this.imagem = "assets/icon/favicon.png"
      }
  
      else if (conta > 20.7 && conta <= 27.8){
        this.inf = "Peso Normal"
        this.imagem = "assets/icon/favicon.png"
      }    
  
      else {
        this.inf = "Acima do Peso"
        this.imagem = "assets/icon/homem.png"
      }    
      
    }

    this.resultado = conta.toFixed(2)
  }


}
