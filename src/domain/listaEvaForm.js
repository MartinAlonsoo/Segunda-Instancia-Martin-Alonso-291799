export class ListaEvaForm {
  #evas;

  constructor() {
    this.#evas = [];
  }

  add(eva) {
    let evaInList = this.#evas.some(
      (m) => m.getTitulo() == eva.getTitulo() && m.getAlum() == eva.getAlum(),
    );
    if (!evaInList && eva.isValid()) {
      this.#evas.push(eva);
    } else {
      throw new Error(
        "No se pudo agregar. Esta meta ya está en la lista o es inválida.",
      );
    }
  }

  getEvas() {
    return this.#evas;
  }
}
