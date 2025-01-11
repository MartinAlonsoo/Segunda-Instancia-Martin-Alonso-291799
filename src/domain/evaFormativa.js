export class EvaForm {
  #desc;
  #titulo;
  #alum;

  constructor(unaDesc, untitulo) {
    this.#desc = unaDesc;
    this.#titulo = untitulo;
    this.#alum = null;
  }

  getDesc() {
    return this.#desc;
  }

  getAlum() {
    return this.#alum;
  }

  getTitulo() {
    return this.#titulo;
  }

  setAlumno(alum) {
    this.#alum = alum;
  }

  toString() {
    return `Titulo: ${this.#titulo} - Descripcion: ${this.#desc} - Alumno: ${this.#alum.toString()}`;
  }

  isValid() {
    if (this.#desc === undefined || this.#desc === null || this.#desc === "") {
      throw new Error("La descripción no puede ser vacía");
    }
    if (
      this.#titulo === undefined ||
      this.#titulo === null ||
      this.#titulo === ""
    ) {
      throw new Error("Debe tener un titulo");
    }
    if (!this.#alum) {
      throw new Error("Debe seleccionar un alumno");
    }
    return true;
  }
}
