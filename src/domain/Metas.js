export class Metas {
  #desc;
  #grupo;
  #cumplio;

  constructor(unaDesc, unGrupo) {
    this.#desc = unaDesc;
    this.#grupo = unGrupo;
    this.#cumplio = false;
  }

  getDesc() {
    return this.#desc;
  }

  getGrupo() {
    return this.#grupo;
  }

  getCumplio() {
    return this.#cumplio;
  }

  cumplioMeta() {
    this.#cumplio = true;
  }

  isValid() {
    if (this.#desc === undefined || this.#desc === null || this.#desc === "") {
      throw new Error("La descripción de la meta no puede ser vacío");
    }
    if (
      this.#grupo === undefined ||
      this.#grupo === null ||
      this.#grupo === ""
    ) {
      throw new Error("La meta debe estar asignada a un grupo");
    }
    return true;
  }
}
