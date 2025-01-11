import { expect, test, describe } from "@jest/globals";
import { EvaForm } from "../evaFormativa";
import { Alumno } from "../alumno";
import { ListaEvaForm } from "../listaEvaForm";

describe("listEvaForm class tests", () => {
  test("Crear una lista vacía", () => {
    let listaEvaForm = new ListaEvaForm();
    let expectedLength = 0;
    expect(listaEvaForm.getEvas().length).toBe(expectedLength);
  });

  test("Agregar un elemento a la lista", () => {
    let listaEvaForm = new ListaEvaForm();
    let evaForm = new EvaForm("Evaluación para formar", "Evalucación");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    evaForm.setAlumno(alumno);
    listaEvaForm.add(evaForm);
    let expectedLength = 1;
    expect(listaEvaForm.getEvas().length).toBe(expectedLength);
  });

  test("Agregar un elemento repetido a la lista", () => {
    let listaEvaForm = new ListaEvaForm();
    let evaForm = new EvaForm("Evaluación para formar", "Evalucación");
    let alumno = new Alumno("Juan", "Perez");
    alumno.setGrupo("Primero");
    evaForm.setAlumno(alumno);
    listaEvaForm.add(evaForm);
    let expectedError =
      "No se pudo agregar. Esta meta ya está en la lista o es inválida.";
    expect(() => listaEvaForm.add(evaForm)).toThrow(expectedError);
  });

  test("Agregar un elemento inválido a la lista", () => {
    let listaEvaForm = new ListaEvaForm();
    let evaForm = new EvaForm("Evaluación para formar", "Evalucación");
    let expectedError = "Debe seleccionar un alumno";
    expect(() => listaEvaForm.add(evaForm)).toThrow(expectedError);
  });
});
