export class progresoGeneral {
  #grupo;
  #descProgreso;

  constructor(unGrupo, unProgreso) {
    this.#grupo = unGrupo;
    this.#descProgreso = unProgreso;
  }

  getGrupo() {
    return this.#grupo;
  }

  getDesc() {
    return this.#descProgreso;
  }

  setDesc(desc) {
    let descString = desc + ""; //Convertir a string
    this.#descProgreso = descString;
  }

  toString() {
    return `Grupo: ${this.#grupo} - Descripción: ${this.#descProgreso}`;
  }

  isValid() {
    if (
      this.#descProgreso === undefined ||
      this.#descProgreso === null ||
      this.#descProgreso === ""
    ) {
      throw new Error("La descripción no puede ser vacía");
    }
    if (
      this.#grupo === undefined ||
      this.#grupo === null ||
      this.#grupo === ""
    ) {
      throw new Error("El progreso debe estar asignado a un grupo");
    }
    return true;
  }
}
