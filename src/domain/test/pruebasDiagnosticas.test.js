import { expect, test, describe } from "@jest/globals";
import { pruebDiagnostic } from "../pruebasDiagnosticas";
import { Alumno } from "../alumno";

describe("pruebaDiagnostic class tests", () => {
  test("Crear una prueba y devolver la descripción", () => {
    let pruebaD = new pruebDiagnostic(
      "Prueba diagnóstica",
      "Titulo",
      "aceptable",
    );
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedDesc = "Prueba diagnóstica";
    expect(pruebaD.getDesc()).toBe(expectedDesc);
  });

  test("Crear una prueba y devolver el alumno", () => {
    let pruebaD = new pruebDiagnostic(
      "Prueba diagnóstica",
      "Titulo",
      "aceptable",
    );
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedAlumno = alumno;
    expect(pruebaD.getAlum()).toBe(expectedAlumno);
  });

  test("Crear una prueba y devolver el grado de avance", () => {
    let pruebaD = new pruebDiagnostic(
      "Prueba diagnóstica",
      "Titulo",
      "aceptable",
    );
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedGradoAvance = "aceptable";
    expect(pruebaD.getGradoAvance()).toBe(expectedGradoAvance);
  });

  test("Crear una prueba y devolver el título", () => {
    let pruebaD = new pruebDiagnostic(
      "Prueba diagnóstica",
      "Titulo",
      "aceptable",
    );
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedTitulo = "Titulo";
    expect(pruebaD.getTitulo()).toBe(expectedTitulo);
  });

  test("toString Prueba diagnóstica", () => {
    let pruebaD = new pruebDiagnostic(
      "Prueba diagnóstica",
      "Titulo",
      "aceptable",
    );
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedString =
      "EvaForm: Titulo - Prueba diagnóstica - Alumno: " +
      alumno.toString() +
      " - gradoAvance: aceptable";
    expect(pruebaD.toString()).toBe(expectedString);
  });

  test("Prueba diagnóstica válida", () => {
    let pruebaD = new pruebDiagnostic(
      "Prueba diagnóstica",
      "Titulo",
      "aceptable",
    );
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    expect(pruebaD.isValid()).toBe(true);
  });

  test("Descripción de prueba null", () => {
    let pruebaD = new pruebDiagnostic(null, "Titulo", "aceptable");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedErrorMessage = "La descripción de la meta no puede ser vacío";
    expect(() => pruebaD.isValid()).toThrow(expectedErrorMessage);
  });

  test("Descripción de prueba undefined", () => {
    let pruebaD = new pruebDiagnostic(undefined, "Titulo", "aceptable");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedErrorMessage = "La descripción de la meta no puede ser vacío";
    expect(() => pruebaD.isValid()).toThrow(expectedErrorMessage);
  });

  test("Descripción de prueba vacío", () => {
    let pruebaD = new pruebDiagnostic("", "Titulo", "aceptable");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedErrorMessage = "La descripción de la meta no puede ser vacío";
    expect(() => pruebaD.isValid()).toThrow(expectedErrorMessage);
  });

  test("Título de prueba null", () => {
    let pruebaD = new pruebDiagnostic("Prueba diagnóstica", null, "aceptable");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedErrorMessage = "Debe tener un titulo";
    expect(() => pruebaD.isValid()).toThrow(expectedErrorMessage);
  });

  test("Título de prueba undefined", () => {
    let pruebaD = new pruebDiagnostic(
      "Prueba diagnóstica",
      undefined,
      "aceptable",
    );
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedErrorMessage = "Debe tener un titulo";
    expect(() => pruebaD.isValid()).toThrow(expectedErrorMessage);
  });

  test("Título de prueba vacío", () => {
    let pruebaD = new pruebDiagnostic("Prueba diagnóstica", "", "aceptable");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedErrorMessage = "Debe tener un titulo";
    expect(() => pruebaD.isValid()).toThrow(expectedErrorMessage);
  });

  test("Prueba sin alumno", () => {
    let pruebaD = new pruebDiagnostic(
      "Prueba diagnóstica",
      "Titulo",
      "aceptable",
    );
    let expectedErrorMessage = "Debe seleccionar un alumno";
    expect(() => pruebaD.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grado avance inválido", () => {
    let pruebaD = new pruebDiagnostic("Prueba diagnóstica", "Titulo", "hola");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedErrorMessage = "Debe tener un grado avance valido";
    expect(() => pruebaD.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grado avance null", () => {
    let pruebaD = new pruebDiagnostic("Prueba diagnóstica", "Titulo", null);
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedErrorMessage = "Debe tener un grado avance valido";
    expect(() => pruebaD.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grado avance undefined", () => {
    let pruebaD = new pruebDiagnostic(
      "Prueba diagnóstica",
      "Titulo",
      undefined,
    );
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedErrorMessage = "Debe tener un grado avance valido";
    expect(() => pruebaD.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grado avance vacío", () => {
    let pruebaD = new pruebDiagnostic("Prueba diagnóstica", "Titulo", "");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    pruebaD.setAlumno(alumno);
    let expectedErrorMessage = "Debe tener un grado avance valido";
    expect(() => pruebaD.isValid()).toThrow(expectedErrorMessage);
  });
});
