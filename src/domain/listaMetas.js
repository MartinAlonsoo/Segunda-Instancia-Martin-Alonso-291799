export class ListaMeta {
  #metas;

  constructor() {
    this.#metas = [];
  }

  add(meta) {
    let metaInList = this.#metas.some((m) => m.getDesc() == meta.getDesc());
    if (!metaInList && meta.isValid()) {
      this.#metas.push(meta);
    } else {
      throw new Error(
        "No se pudo agregar. Esta meta ya está en la lista o es inválida.",
      );
    }
  }

  getMetas() {
    return this.#metas;
  }
}
