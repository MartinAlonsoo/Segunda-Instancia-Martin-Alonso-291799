export class ListaProgreso {
  #progresos;

  constructor() {
    this.#progresos = [];
  }

  add(progreso) {
    let progresoInList = this.#progresos.some(
      (m) => m.getGrupo() == progreso.getGrupo(),
    );
    if (!progresoInList && progreso.isValid()) {
      this.#progresos.push(progreso);
    } else {
      throw new Error(
        `No se pudo agregar. El progreso de este grupo ya está documentado o es inválido, pero puede actualizarlo.`,
      );
    }
  }

  getProgresos() {
    return this.#progresos;
  }
}
