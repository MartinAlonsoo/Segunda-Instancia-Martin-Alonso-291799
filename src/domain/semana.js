export class Semana {
  #numero;
  #dias;

  constructor(unNumero) {
    this.#numero = unNumero; //un numero para identificar la semana
    this.#dias = [];
  }

  getNumero() {
    return this.#numero;
  }

  getDias() {
    return this.#dias;
  }

  agregarDia(dia) {
    let diaInList = this.#dias.some(
      (m) => m.getDia() == dia.getDia() && m.getMes() == m.getMes(),
    );
    if (
      !diaInList &&
      (dia.getSemana() === this.#numero || this.#dias.length === 0)
    ) {
      this.#dias.push(dia);
    } else {
      throw new Error(
        "No se pudo agregar. Este día ya está en la lista o no es válida.",
      );
    }
  }

  isValid() {
    if (
      this.#numero === null ||
      this.#numero === undefined ||
      typeof this.#numero !== "number"
    ) {
      throw new Error("La semana es inválida");
    } else {
      return true;
    }
  }
}
