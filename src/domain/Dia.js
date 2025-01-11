import { Semana } from "./semana.js";

export class Dias extends Semana {
  #dia;
  #mes;
  #listaMetas;

  constructor(unDia, unMes, unaSemana) {
    super(unaSemana);
    this.#dia = unDia;
    this.#mes = unMes;
    this.#listaMetas = [];
  }

  addMeta(meta) {
    let metaInList = this.#listaMetas.some(
      (m) => m.getDesc() == meta.getDesc(),
    );
    if (!metaInList) {
      this.#listaMetas.push(meta);
    } else {
      throw new Error(
        "No se pudo agregar. Esta meta ya está en la lista o es invalida.",
      );
    }
  }

  getDia() {
    return this.#dia;
  }

  getMes() {
    return this.#mes;
  }

  getSemana() {
    return this.getNumero(); //devuelve la semana del curso
  }

  getMetas() {
    return this.#listaMetas;
  }

  toString() {
    return this.#dia + "/" + this.#mes + " Semana " + this.getNumero();
  }

  isValid() {
    if (
      this.#dia === undefined ||
      this.#dia === null ||
      typeof this.#dia !== "number"
    ) {
      throw new Error("El día de la fecha es inválida");
    }
    if (
      this.#mes === undefined ||
      this.#mes === null ||
      typeof this.#mes !== "number"
    ) {
      throw new Error("El mes de la fecha es inválida");
    }
    return true;
  }
}
