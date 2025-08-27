import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { evaluate, log, parse } from 'mathjs';
import { AuthService } from 'src/app/components/auth/service/auth.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  public visor: string;
  public expresion: string;
  public resultado: string;
  public guardado: string;
  public encendido: boolean;
  public mostrarCientifica: boolean;
  public memorias: { [clave: string]: string };
  public memoriaActiva: boolean

  constructor(
    private authService:AuthService,
    private router:Router
  ) {
    this.visor = ""
    this.expresion = "";
    this.resultado = "";
    this.guardado = "";
    this.encendido = false;
    this.mostrarCientifica = false;
    this.memorias = { A: '', B: '' };
    this.memoriaActiva = false;
  }

  agregar(valor: string): void {
    const ultChar = this.visor.slice(-1);
    const operadores = ['%']
    if ((operadores.includes(ultChar) && this.resultado === "") || this.resultado === "Error") {

      return;
    }
    switch (valor) {
      case '%':
        this.visor = this.expresion + '%'
        this.expresion += '/100';
        break;
      case 'π':
        this.visor = this.expresion + 'π'
        this.expresion += 'pi';
        break;
      case 'e':
        this.expresion += 'e';
        this.visor = this.expresion;
        break;
      case '√':
        this.visor = this.expresion + '√'
        this.expresion = 'sqrt(' + this.expresion + ')';
        break;
      case '^':
        this.expresion += '^';
        this.visor = this.expresion;
        break;
      case 'log':
        this.visor = 'log10(' + this.expresion + ')';
        this.expresion = 'log10(' + this.expresion + ')';
        break;
      case 'ln':
        this.visor = 'log(' + this.expresion + ')';
        this.expresion = 'log(' + this.expresion + ')';

        break;
      case 'sin':
      case 'cos':
      case 'tan':
        this.expresion += `${valor}(`;
        this.visor = this.expresion;
        break;
      case 'Rnd':
        this.expresion = Math.random().toString();
        this.visor = this.expresion;
        break;
      default:
        if (this.visor === '0') {
          this.visor = valor;
          this.expresion = valor;
        } else {
          this.visor += valor;
          this.expresion += valor;
        }
    }
  }

  calcular(): void {
    const expr = this.expresion.trim();
    const ultChar = expr.slice(-1);
    const operadores = ['+', '-', '*', '/', '^', '.'];


    if (!isNaN(Number(expr))) {
      return;
    }


    if (operadores.includes(ultChar)) {
      return;
    }

    try {
      this.resultado = evaluate(expr).toString();
    } catch (e) {
      this.resultado = 'Error';
    }
  }


  borrar(): void {
    if (this.visor === '0') {
      return
    }
    if (!isNaN(Number(this.visor))) {
      this.visor = '0';
    } else {
      this.visor = this.visor.slice(0, -1);
    }

    this.expresion = this.visor;
  }

  limpiar(): void {

    this.expresion = '';
    this.resultado = '';
    this.visor = '0'
  }

  encendidoApagado(event: any): void {
    if(this.authService.obtenerUsuario()?.rol === 'basico'){
      this.router.navigate(['acceso'])
    }
    this.encendido = event.target.checked;
    if (!this.encendido) {
      this.expresion = '';
      this.resultado = '';
      this.visor = '';
      this.mostrarCientifica = false;
    } else {
      this.visor = '0';
    }
  }

  verCientifica(): void {
    this.mostrarCientifica = !this.mostrarCientifica;
  }
  activarGuardado(): void {
    this.memoriaActiva = true;
  }
  usarMemoria(letra: string): void {
    if (this.memoriaActiva) {
      if (!isNaN(Number(this.expresion))) {
        this.memorias[letra] = this.expresion;
      } else {
        this.memorias[letra] = this.resultado;
      }
      this.memoriaActiva = false;

    } else {
      this.expresion += this.memorias[letra] || '';
      this.visor += this.memorias[letra] || '';

    }

  }
}
