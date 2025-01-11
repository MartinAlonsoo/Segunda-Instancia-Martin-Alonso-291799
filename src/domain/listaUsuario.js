export class ListaUsuario {
  #usuarios;

  constructor() {
    this.#usuarios = [];
  }

  add(usuario) {
    let usuarioInList = this.#usuarios.some(
      (m) => m.getNombre() == usuario.getNombre(),
    );
    if (!usuarioInList && usuario.isValid()) {
      this.#usuarios.push(usuario);
    } else {
      throw new Error(
        `No se pudo agregar. ${usuario.getNombre()}-${usuario.getApellido()} ya está en la lista.`,
      );
    }
  }

  getUsuarios() {
    return this.#usuarios;
  }
}
