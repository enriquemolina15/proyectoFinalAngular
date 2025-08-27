import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PersonajeDetalle } from '../interfaces/personaje-detalle';
import { PlanetaDetalle } from '../interfaces/planeta-detalle';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  private urlPersonaje = 'https://dragonball-api.com/api/characters';
  private urlPlanetas = 'https://dragonball-api.com/api/planets'
  constructor(private http: HttpClient) { }

  obtenerListadoPersonajes(): Observable<PersonajeDetalle[]> {
    return this.http.get<any>(this.urlPersonaje + '?limit=60').pipe(
      map(respuesta =>
        respuesta.items.map((p: any) => ({
          id: p.id ?? 0,
          nombre: p.name ?? 'Desconocido',
          imagen: p.image || '/assets/img/default.jpg',
          ki: p.ki ?? 0,
          maxKi: p.maxKi ?? 'Desconocido',

        }))
      )
    );
  }


  obtenerListadoPlanetas(): Observable<PlanetaDetalle[]> {
    return this.http.get<any>(this.urlPlanetas + '?limit=25').pipe(
      map(planetas =>
        planetas.items.map((p: any) => ({
          idPlaneta: p.id ,
          nombre: p.name ?? 'Desconocido',
          imagen: p.image || '/assets/img/default.jpg',
        }))
        
      )
    );
   
  }

  obtenerPersonaje(id: number): Observable<PersonajeDetalle> {
    return this.http.get<any>(this.urlPersonaje + '/' + id).pipe(
      map(p => ({
        id: p.id,
        nombre: p.name ?? 'Desconocido',
        imagen: p.image || '/assets/img/default.jpg',
        raza: p.race ?? 'Desconocida',
        genero: p.gender ?? 'Desconocido',
        ki: p.ki ?? "0",
        maxKi: this.parseKi(p.maxKi) ?? 0,
        descripcion: p.description ?? 'Sin descripción',
        afiliacion: p.affiliation ?? 'Sin afiliación',
        planetaOrigen: p.originPlanet?.name ?? 'Desconocido',
        IdPlanetaOrigen: p.originPlanet?.id ?? 0,
        planetaEsDestruido: p.originPlanet?.isDestroyed ?? 'Desconocido',
        transformaciones: p.transformations?.length ?? 0
      }))

    );
  }
  obtenerPlaneta(id: number): Observable<PlanetaDetalle> {
    return this.http.get<any>(this.urlPlanetas + "/" + id).pipe(
      map((p => ({
        idPlaneta: p.id ?? 0,
        nombre: p.name ?? 'Desconocido',
        imagen: p.image || '/assets/img/default.jpg',
        descripcion: p.description ?? 'Sin descripción',
        esDestruido: p.isDestroyed ?? 'Desconocido',
        tieneNativos: p.characters?.length > 0
      }))
      )
    );
  }

  parseKi(kiStr: string): number {
    if (!kiStr) return 0;

    const unidades: { [key: string]: number } = {
      thousand: 1e3,
      million: 1e6,
      billion: 1e9,
      trillion: 1e12,
      quadrillion: 1e15,
      quintillion: 1e18,
      sextillion: 1e21,
      septillion: 1e24,
    };


    kiStr = kiStr.toLowerCase().replace(/[.,]/g, '').trim();

    const regex = /^(\d+)\s*(\w+)?$/;
    const match = kiStr.match(regex);

    if (!match) return 0;

    const valor = parseInt(match[1], 10);
    const unidad = unidades[match[2]] ?? 1;

    return valor * unidad;
  }



  obtenerTransformaciones(idPersonaje: string): Observable<PersonajeDetalle[]> {
    return this.http.get<any>(this.urlPersonaje + '/' + idPersonaje).pipe(
      map(personaje => {
        const transformaciones = personaje.transformations ?? [];
        return transformaciones.map((t: any) => ({
          id: t.id,
          nombre: t.name,
          imagen: t.image,
          ki: t.ki,
        }));
      })
    );
  }
  obtenerNativos(idPlaneta: string): Observable<PersonajeDetalle[]> {
    return this.http.get<any>(this.urlPlanetas + '/' + idPlaneta).pipe(
      map(planeta => {
        const nativos = planeta.characters ?? [];
        return nativos.map((t: any) => ({
          id: t.id,
          nombre: t.name,
          imagen: t.image,
          ki: t.ki,
        }));
      })
    );
  }



}
