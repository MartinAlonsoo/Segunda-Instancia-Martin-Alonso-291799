export class Calendario {
  #mes;
  #semanas;

  constructor(unMes) {
    this.#mes = unMes;
    this.#semanas = [];
  }

  getMes() {
    return this.#mes;
  }

  getSemanas() {
    return this.#semanas;
  }

  agregarSemana(semana) {
    let semanaInList = this.#semanas.some(
      (m) => m.getNumero() == semana.getNumero(),
    );
    if (!semanaInList && semana.isValid()) {
      this.#semanas.push(semana);
    } else {
      throw new Error("No se pudo agregar. Esta semana ya está en la lista.");
    }
  }

  isValid() {
    if (
      this.#mes === null ||
      this.#mes === undefined ||
      typeof this.#mes !== "number"
    ) {
      throw new Error("El mes no es válido");
    }
    return true;
  }
}
