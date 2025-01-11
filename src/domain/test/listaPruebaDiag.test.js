import { expect, test, describe } from "@jest/globals";
import { ListaPruebaDiag } from "../listaPruebaDiag";
import { pruebDiagnostic } from "../pruebasDiagnosticas";
import { Alumno } from "../alumno";

describe("ListaPruebaDiagnostic class tests", () => {
  test("Crear una lista vacía", () => {
    let listaPruebas = new ListaPruebaDiag();
    expect(listaPruebas.getPruebas().length).toBe(0);
  });

  test("Agregar una prueba a la lista", () => {
    let listaPruebas = new ListaPruebaDiag();
    let pruebaD = new pruebDiagnostic(
      "Prueba diagnóstica",
      "Titulo",
      "aceptable",
    );
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    listaPruebas.add(pruebaD);
    expect(listaPruebas.getPruebas().length).toBe(1);
  });

  test("Agregar una prueba repetida a la lista", () => {
    let listaPruebas = new ListaPruebaDiag();
    let pruebaD = new pruebDiagnostic(
      "Prueba diagnóstica",
      "Titulo",
      "aceptable",
    );
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    listaPruebas.add(pruebaD);
    let expectedErrorMessage =
      "No se pudo agregar. Esta prueba ya está en la lista o es inválida.";
    expect(() => listaPruebas.add(pruebaD)).toThrow(expectedErrorMessage);
  });

  test("Agregar una prueba inválida a la lista", () => {
    let listaPruebas = new ListaPruebaDiag();
    let pruebaD = new pruebDiagnostic(null, "Titulo", "aceptable");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedErrorMessage = "La descripción de la meta no puede ser vacío";
    expect(() => listaPruebas.add(pruebaD)).toThrow(expectedErrorMessage);
  });
});
