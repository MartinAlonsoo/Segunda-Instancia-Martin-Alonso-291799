export class pruebDiagnostic {
  #desc;
  #titulo;
  #alum;
  #gradoAvance;

  constructor(unaDesc, untitulo, ungradoAvance) {
    this.#desc = unaDesc;
    this.#titulo = untitulo;
    this.#alum = null;
    this.#gradoAvance = ungradoAvance;
  }

  getDesc() {
    return this.#desc;
  }

  getAlum() {
    return this.#alum;
  }

  getGradoAvance() {
    return this.#gradoAvance;
  }

  getTitulo() {
    return this.#titulo;
  }

  setAlumno(alum) {
    this.#alum = alum;
  }

  toString() {
    return `EvaForm: ${this.#titulo} - ${this.#desc} - Alumno: ${this.#alum.toString()} - gradoAvance: ${this.#gradoAvance}`;
  }

  isValid() {
    if (this.#desc === undefined || this.#desc === null || this.#desc === "") {
      throw new Error("La descripción de la meta no puede ser vacío");
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
    if (
      (this.#gradoAvance !== "satisfactorio" &&
        this.#gradoAvance !== "insatisfactorio" &&
        this.#gradoAvance !== "acceptable") ||
      this.#gradoAvance === "" ||
      this.#titulo === undefined ||
      this.#titulo === null
    ) {
      throw new Error("Debe tener un grado avance valido");
    }
    return true;
  }
}
