class Display{
    constructor(displayValorAnterior,displayValorActual){
        this.displayValorActual=displayValorActual;
        this.displayValorAnterior=displayValorAnterior;
        this.calculadora= new Calculadora();
        this.LaOperacion=undefined;
        this.valorActual= '';
        this.valorAnterior= '';
        this.signos={
            suma:'+',
            resta:'-', 
            multiplicacion:'*',
            division:'/' 
        }
    }

    borrar(){
        this.valorActual=this.valorActual.toString().slice(0, -1);
        this.mostrarvalores();
    }

    elBorrar(){
        this.valorActual='';
        this.valorAnterior='';
        this.LaOperacion=undefined;
        this.mostrarvalores();
    }

    computar(tipo){
        this.LaOperacion!== 'igual' && this.operar();
        this.LaOperacion=tipo;
        this.valorAnterior=this.valorActual || this.valorAnterior;
        this.valorActual='';
        this.mostrarvalores();
    }

    //el prop numero se le asigna el valor del boton que se clickea en el html
    agregarNumero(numero){
        if(numero==='.' && this.valorActual.includes('.')) return
        this.valorActual=this.valorActual.toString()+numero.toString();
        this.mostrarvalores();
    }
    mostrarvalores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.LaOperacion] || ''}`
    }
    operar(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior) ) return
        this.valorActual=this.calculadora[this.LaOperacion](valorAnterior, valorActual);

    }
}