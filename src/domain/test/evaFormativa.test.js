import { expect, test, describe } from "@jest/globals";
import { EvaForm } from "../evaFormativa";
import { Alumno } from "../alumno";

describe("EvaForm class tests", () => {
  test("Crear una evaFormativa y devolver la descripción", () => {
    let evaForm = new EvaForm("Evaluación para formar", "Evalucación");
    let expectedDesc = "Evaluación para formar";
    expect(evaForm.getDesc()).toBe(expectedDesc);
  });

  test("Crear una evaFormativa y devolver el titulo", () => {
    let evaForm = new EvaForm("Evaluación para formar", "Evalucación");
    let expectedTitulo = "Evalucación";
    expect(evaForm.getTitulo()).toBe(expectedTitulo);
  });

  test("Crear una evaFormativa y devolver el alumno", () => {
    let evaForm = new EvaForm("Evaluación para formar", "Evalucación");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    evaForm.setAlumno(alumno);
    expect(evaForm.getAlum()).toBe(alumno);
  });

  test("EvaFormativa toString", () => {
    let evaForm = new EvaForm("Evaluación para formar", "Evalucación");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    let stringAlumno = alumno.toString();
    evaForm.setAlumno(alumno);
    let expectedString =
      "Titulo: Evalucación - Descripcion: Evaluación para formar - Alumno: " +
      stringAlumno;
    expect(evaForm.toString()).toBe(expectedString);
  });

  test("Descripción vacía", () => {
    let evaForm = new EvaForm("", "Evalucación");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    evaForm.setAlumno(alumno);
    let expectedError = "La descripción no puede ser vacía";
    expect(() => evaForm.isValid()).toThrow(expectedError);
  });

  test("Descripción undefined", () => {
    let evaForm = new EvaForm(undefined, "Evalucación");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    evaForm.setAlumno(alumno);
    let expectedError = "La descripción no puede ser vacía";
    expect(() => evaForm.isValid()).toThrow(expectedError);
  });

  test("Descripción null", () => {
    let evaForm = new EvaForm(null, "Evalucación");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    evaForm.setAlumno(alumno);
    let expectedError = "La descripción no puede ser vacía";
    expect(() => evaForm.isValid()).toThrow(expectedError);
  });

  test("Título vacío", () => {
    let evaForm = new EvaForm("Evaluación para formar", "");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    evaForm.setAlumno(alumno);
    let expectedError = "Debe tener un titulo";
    expect(() => evaForm.isValid()).toThrow(expectedError);
  });

  test("Título null", () => {
    let evaForm = new EvaForm("Evaluación para formar", null);
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    evaForm.setAlumno(alumno);
    let expectedError = "Debe tener un titulo";
    expect(() => evaForm.isValid()).toThrow(expectedError);
  });

  test("Título undefined", () => {
    let evaForm = new EvaForm("Evaluación para formar", undefined);
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    evaForm.setAlumno(alumno);
    let expectedError = "Debe tener un titulo";
    expect(() => evaForm.isValid()).toThrow(expectedError);
  });

  test("No hay alumno", () => {
    let evaForm = new EvaForm("Evaluación para formar", "Evaluación");
    let expectedError = "Debe seleccionar un alumno";
    expect(() => evaForm.isValid()).toThrow(expectedError);
  });

  test("EvaFormativa válida", () => {
    let evaForm = new EvaForm("Evaluación para formar", "Evaluación");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    evaForm.setAlumno(alumno);
    expect(evaForm.isValid()).toBe(true);
  });
});
