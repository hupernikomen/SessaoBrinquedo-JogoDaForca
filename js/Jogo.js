class Jogo {

   constructor() {
      this.form = document.querySelector("form");
      this.palavra = document.querySelector('#palavra');
      this.letra = document.querySelector('#chute');

      this.palavras = ["PAULINHA", "WILSON"];
      this.palavraSorteada = [];
      this.palavraMontada = [];
   }

   sorteiaPalavra() {
      this.palavraSorteada = this.palavras[Math.floor(Math.random() * this.palavras.length)].split('');
      
   }

   verificaLetra(event) {
      event.preventDefault();

      this.palavraSorteada.map((item, index) => {
         
         let indexDaLetra = item.indexOf(this.letra.value.toUpperCase());
         indexDaLetra >= 0 ? this.montaPalavra(index) : console.log();
      })

      this.limpa();
   }

   montaPalavra(index) {

      if (this.letra.value != '') {

         this.palavraMontada[index] = this.letra.value.toUpperCase();
         console.log(this.palavraMontada);
      }
   }

   limpa() {
      this.letra.value = '';
      this.letra.focus()
   }
}