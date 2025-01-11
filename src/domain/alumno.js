export class Alumno {
  #nombre;
  #apellido;
  #grupo;
  #discapacidades;
  #metasCumplidas;

  constructor(unNombre, unApellido) {
    this.#nombre = unNombre;
    this.#apellido = unApellido;
    this.#grupo = null;
    this.#discapacidades = [];
    this.#metasCumplidas = [];
  }

  getNombre() {
    return this.#nombre;
  }

  getApellido() {
    return this.#apellido;
  }

  getGrupo() {
    return this.#grupo;
  }

  getDiscapaciades() {
    return this.#discapacidades;
  }

  getMetasCumplidas() {
    return this.#metasCumplidas;
  }

  setGrupo(unGrupo) {
    this.#grupo = unGrupo;
  }

  toString() {
    return this.#nombre + " " + this.#apellido;
  }

  agregarDiscapacidad(discapacidad) {
    let discapacidadInList = this.#discapacidades.some(
      (m) => m == discapacidad,
    );
    if (!discapacidadInList && discapacidad !== "") {
      this.#discapacidades.push(discapacidad);
    } else {
      throw new Error(
        "No se pudo agregar. Esta discapacidad ya está en la lista o es vacía",
      );
    }
  }

  metaCumplida(meta) {
    let metaInList = this.#metasCumplidas.some(
      (m) => m.getDesc() == meta.getDesc(),
    );
    if (!metaInList && meta.getCumplio() && meta.getGrupo() === this.#grupo) {
      this.#metasCumplidas.push(meta);
    } else {
      throw new Error(
        "No se pudo agregar. Esta meta ya está en la lista, no se cumplió o no es válida.",
      );
    }
  }

  isValid() {
    if (
      this.#nombre === undefined ||
      this.#nombre === null ||
      this.#nombre === ""
    ) {
      throw new Error("El nombre del alumno no puede ser vacío");
    }
    if (
      this.#apellido === undefined ||
      this.#apellido === null ||
      this.#apellido === ""
    ) {
      throw new Error("El apellido del alumno no puede ser vacía");
    }
    if (
      this.#grupo === undefined ||
      this.#grupo === null ||
      this.#grupo === ""
    ) {
      throw new Error("El alumno debe estar en un grupo");
    }
    return true;
  }
}
