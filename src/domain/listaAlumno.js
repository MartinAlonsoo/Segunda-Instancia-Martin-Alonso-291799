export class ListaAlumno {
  #alumnos;

  constructor() {
    this.#alumnos = [];
  }

  add(alumno) {
    let AlumnoInList = this.#alumnos.some(
      (m) =>
        m.getNombre() == alumno.getNombre() &&
        m.getApellido() == alumno.getApellido() &&
        m.getGrupo() == alumno.getGrupo(),
    );
    if (!AlumnoInList && alumno.isValid()) {
      this.#alumnos.push(alumno);
    } else {
      throw new Error(
        "No se pudo agregar. Este alumno ya está en la lista o es inválido.",
      );
    }
  }

  getAlumnos() {
    return this.#alumnos;
  }
}
