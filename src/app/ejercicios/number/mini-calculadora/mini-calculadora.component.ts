import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-calculadora',
  templateUrl: './mini-calculadora.component.html',
  styleUrls: ['./mini-calculadora.component.css']
})
export class MiniCalculadoraComponent {
  public texto: string
  public resultado: string
  public op1: string;
  public op2: string;
  constructor() {
    this.texto = '';
    this.resultado = '';
    this.op1 = '';
    this.op2 = '';
  }


  esNumero(n: string) {
    return /^-?\d+(\.\d+)?$/.test(n.trim());
  }

  validarOperandos() {
    const valor1 = this.op1.trim();
    const valor2 = this.op2.trim();

    if (!this.esNumero(valor1) || !this.esNumero(valor2)) {
      this.texto = "⚠️ Introduce dos números válidos.";
      this.resultado = "";
      return false;
    }

    return true;
  };

  validarResultado() {
    if (this.resultado.trim() === "") {
      this.texto = "❌ No hay resultado anterior para aplicar la función.";
      return false;
    }
    return true;
  };

  validarLogN() {
    if (!this.validarOperandos()) return false;

    const n = parseFloat(this.op1.trim());
    const base = parseFloat(this.op2.trim());

    if (n <= 0 || base <= 0 || base === 1) {
      this.texto = "⚠️ Valores no válidos. El número y la base deben ser > 0 y la base ≠ 1.";
      this.resultado = "";
      return false;
    }

    return true;
  };

  validarRango() {
    if (!this.validarOperandos()) return false;

    const min = parseFloat(this.op1.trim());
    const max = parseFloat(this.op2.trim());

    if (min >= max) {
      this.texto = "⚠️ Rango no válido. El mínimo debe ser menor que el máximo.";
      this.resultado = "";
      return false;
    }

    return true;
  };
  operar(operacion: string) {
    const a = parseFloat(this.op1.trim());
    const b = parseFloat(this.op2.trim());
    const r = parseFloat(this.resultado.trim());

    switch (operacion) {
      case '+':
        if (!this.validarOperandos()) return;
        this.resultado = (a + b).toString();
        this.texto = `${a} + ${b} =`;
        break;

      case '-':
        if (!this.validarOperandos()) return;
        this.resultado = (a - b).toString();
        this.texto = `${a} - ${b} =`;
        break;

      case '*':
        if (!this.validarOperandos()) return;
        this.resultado = (a * b).toString();
        this.texto = `${a} × ${b} =`;
        break;

      case '/':
        if (!this.validarOperandos()) return;
        if (b === 0) {
          this.texto = "❌ No se puede dividir por cero.";
          this.resultado = "";
          return;
        }
        this.resultado = (a / b).toString();
        this.texto = `${a} ÷ ${b} =`;
        break;

      case 'entera':
        if (!this.validarOperandos()) return;
        this.op1 = Math.floor(r).toString();
        this.texto = `Parte entera de ${a} ÷ ${b} =`;
        break;

      case 'decimal':
        if (!this.validarOperandos()) return;
        const decimal = r - Math.floor(r);
        this.op2 = decimal.toFixed(6);
        this.texto = `Parte decimal de ${a} ÷ ${b} =`;
        break;

      case 'raiz':
        if (!this.validarOperandos()) return;
        if (r < 0) {
          this.texto = "⚠️ No se puede hacer la raíz cuadrada de un número negativo.";
          this.resultado = "";
          return;
        }
        this.resultado = Math.sqrt(r).toString();
        this.texto = `√${r} =`;
        break;

      case 'log10':
        if (!this.validarOperandos()) return;
        if (r <= 0) {
          this.texto = "⚠️ El número debe ser mayor que cero.";
          this.resultado = "";
          return;
        }
        this.resultado = Math.log10(r).toString();
        this.texto = `log₁₀(${r}) =`;
        break;

      case 'loge':
        if (!this.validarOperandos()) return;
        if (r <= 0) {
          this.texto = "⚠️ El número debe ser mayor que cero.";
          this.resultado = "";
          return;
        }
        this.resultado = Math.log(r).toString();
        this.texto = `ln(${r}) =`;
        break;

      case 'logn':
        if (!this.validarLogN()) return;
        const n = parseFloat(this.op1.trim());
        const base = parseFloat(this.op2.trim());
        this.resultado = (Math.log(n) / Math.log(base)).toString();
        this.texto = `log base ${base} de ${n} =`;
        break;

      case 'aleatorio':
        this.resultado = (Math.random()).toString();
        this.texto = `🎲 Aleatorio [0, 1)`;
        break;

      case 'aleatorio_rango':
        if (!this.validarRango()) return;
        const min = Math.ceil(a);
        const max = Math.floor(b);
        this.resultado = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
        this.texto = `🎲 Aleatorio entre ${min} y ${max}`;
        break;

      case 'intercambiar':
        const temp = this.op1;
        this.op1 = this.op2;
        this.op2 = temp;
        this.texto = `🔁 Intercambiados`;
        this.resultado = "";
        break;

      case 'aleatorio_letraM':
        const letraM = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        this.resultado = letraM;
        this.texto = `Letra mayúscula aleatoria:`;
        break;

      case 'aleatorio_letram':
        const letram = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        this.resultado = letram;
        this.texto = `Letra minúscula aleatoria:`;
        break;

      default:
        this.texto = "⚠️ Operación no reconocida.";
        this.resultado = "";
    }
  }
borrar(){
  this.op1 = "";
  this.op2 = "";
  this.texto = "";
  this.resultado = "";
}


}
