export class Usuario {
  #nombre;
  #apellido;
  #email;
  #cedula;
  #telefono;
  #cargo;
  constructor(unNombre, unApellido, unEmail, unaCedula, unTelefono, unCargo) {
    this.#nombre = unNombre;
    this.#apellido = unApellido;
    this.#email = unEmail;
    this.#cedula = unaCedula;
    this.#telefono = unTelefono;
    this.#cargo = unCargo;
  }

  getNombre() {
    return this.#nombre;
  }

  getApellido() {
    return this.#apellido;
  }

  getEmail() {
    return this.#email;
  }

  getCedula() {
    return this.#cedula;
  }

  getTelefono() {
    return this.#telefono;
  }

  getCargo() {
    return this.#cargo;
  }

  setCargo(unCargo) {
    this.#cargo = unCargo;
  }

  toString() {
    return this.#nombre + " " + this.#apellido;
  }

  isValid() {
    if (
      this.#nombre === undefined ||
      this.#nombre === null ||
      this.#nombre === ""
    ) {
      throw new Error("El nombre del usuario no puede ser vacío");
    }
    if (
      this.#apellido === undefined ||
      this.#apellido === null ||
      this.#apellido === ""
    ) {
      throw new Error("El apellido del usuario no puede ser vacío");
    }
    if (
      this.#email === undefined ||
      this.#email === null ||
      this.#email === "" ||
      this.#email.indexOf("@") === -1
    ) {
      throw new Error("El usuario debe tener un email válido");
    }
    if (
      this.#cedula === undefined ||
      this.#cedula === null ||
      this.#cedula === ""
    ) {
      throw new Error("La cédula del usuario no puede ser vacía");
    }
    if (
      this.#telefono === undefined ||
      this.#telefono === null ||
      typeof this.#telefono !== "number"
    ) {
      throw new Error("El telefono debe ser válido");
    }
    if (
      this.#cargo === undefined ||
      this.#cargo === null ||
      this.#cargo === ""
    ) {
      throw new Error("El cargo del usuario no puede ser vacío");
    }
    return true;
  }
}
