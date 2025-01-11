import { expect, test, describe } from "@jest/globals";
import { Alumno } from "../alumno";
import { ListaAlumno } from "../listaAlumno";

describe("ListaAlumno class tests", () => {
  test("Crear una lista de alumnos vacío", () => {
    let listaAlumnos = new ListaAlumno();
    let expectedLength = 0;
    expect(listaAlumnos.getAlumnos().length).toBe(expectedLength);
  });

  test("Agregar alumno a la lista", () => {
    let listaAlumnos = new ListaAlumno();
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    listaAlumnos.add(alumno);
    let expectedLength = 1;
    expect(listaAlumnos.getAlumnos().length).toBe(expectedLength);
  });

  test("Agregar alumno repetido a la lista", () => {
    let listaAlumnos = new ListaAlumno();
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    listaAlumnos.add(alumno);
    let expectedErrorMessage =
      "No se pudo agregar. Este alumno ya está en la lista o es inválido.";
    expect(() => listaAlumnos.add(alumno)).toThrow(expectedErrorMessage);
  });

  test("Agregar un alumno invalido a la lista", () => {
    let listaAlumnos = new ListaAlumno();
    let alumno = new Alumno("", "Gonzalez");
    let expectedErrorMessage = "El nombre del alumno no puede ser vacío";
    expect(() => listaAlumnos.add(alumno)).toThrow(expectedErrorMessage);
  });
});
