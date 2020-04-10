class Jogo {

   constructor() {
      this.form = document.querySelector("form");
      this.palavra = document.querySelector('#palavra')

      this.letra = document.querySelector('#chute');
      this.palavras = ["PAULINHA", "WILSON"];
      this.palavraMontada = [];
   }

   sorteiaPalavra() {

      return this.palavras[Math.floor(Math.random() * this.palavras.length)].split('');
   }


   verificaLetra(event) {
      event.preventDefault()

      this.sorteiaPalavra().map((item, index) => {
         let indexDaLetra = item.indexOf(this.letra.value.toUpperCase());
         indexDaLetra >= 0 ? this.montaPalavra(index) : console.log('sorteia ' + this.sorteiaPalavra().length);
      })
   }

   montaPalavra(indexDaLetra) {

      this.palavraMontada[indexDaLetra] = this.letra.value.toUpperCase();
      console.log(this.palavraMontada)
      
   }

}