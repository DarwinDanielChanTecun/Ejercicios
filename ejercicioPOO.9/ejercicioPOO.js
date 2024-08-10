class cuenta {
  saldo;
  monto;
  dinero;

  constructor(saldo){
    this.saldo = saldo
  }

  abonar (dinero){
    this.saldo += dinero;
  
  }
  debitar(monto) {
      this.saldo -= monto;
    
  }
  muestraSaldo(){
      console.log("Tu saldo es de: ",this.saldo)
  }
}

let cuenta1 = new cuenta(500);
let cuenta2 = new cuenta(300);
console.log("Tu salgo abonado es: ")
cuenta1.muestraSaldo();
cuenta1.abonar(750);
cuenta1.muestraSaldo();
console.log("Tu salgo debitado es: ")
cuenta2.muestraSaldo();
cuenta2.debitar(200);
cuenta2.muestraSaldo();

