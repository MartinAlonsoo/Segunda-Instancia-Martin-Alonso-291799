export class ListaPruebaDiag {
  #pruebasDiag;

  constructor() {
    this.#pruebasDiag = [];
  }

  add(prueba) {
    let pruebaInList = this.#pruebasDiag.some(
      (m) => m.getAlum() == prueba.getAlum(),
    );
    if (!pruebaInList && prueba.isValid()) {
      this.#pruebasDiag.push(prueba);
    } else {
      throw new Error(
        "No se pudo agregar. Esta prueba ya está en la lista o es inválida.",
      );
    }
  }

  getPruebas() {
    return this.#pruebasDiag;
  }
}
