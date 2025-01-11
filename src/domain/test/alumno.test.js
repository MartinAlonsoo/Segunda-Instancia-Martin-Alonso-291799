import { expect, test, describe } from "@jest/globals";
import { Alumno } from "../alumno.js";
import { Metas } from "../Metas.js";

describe("Alumno class tests", () => {
  test("Crear un alumno", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    let nombreAlumno = alumno.getNombre();
    let expectedName = "Pedro";
    expect(nombreAlumno).toBe(expectedName);
  });

  test("Crear un alumno 2", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    let apellidoAlumno = alumno.getApellido();
    let expectedName = "Gonzalez";
    expect(apellidoAlumno).toBe(expectedName);
  });

  test("Darle grupo a un alumno", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    let grupoAlumno = alumno.getGrupo();
    let expectedGroup = "Primero";
    expect(grupoAlumno).toBe(expectedGroup);
  });

  test("Nombre alumno nulo", () => {
    let alumno = new Alumno(null, "Gonzalez");
    let expectedErrorMessage = "El nombre del alumno no puede ser vacío";
    expect(() => alumno.isValid()).toThrow(expectedErrorMessage);
  });

  test("Nombre alumno indefinido", () => {
    let alumno = new Alumno(undefined, "Gonzalez");
    let expectedErrorMessage = "El nombre del alumno no puede ser vacío";
    expect(() => alumno.isValid()).toThrow(expectedErrorMessage);
  });

  test("Nombre alumno vacío", () => {
    let alumno = new Alumno("", "Gonzalez");
    let expectedErrorMessage = "El nombre del alumno no puede ser vacío";
    expect(() => alumno.isValid()).toThrow(expectedErrorMessage);
  });

  test("Apellido alumno nulo", () => {
    let alumno = new Alumno("Pedro", null);
    let expectedErrorMessage = "El apellido del alumno no puede ser vacía";
    expect(() => alumno.isValid()).toThrow(expectedErrorMessage);
  });

  test("Apellido alumno indefinido", () => {
    let alumno = new Alumno("Pedro", undefined);
    let expectedErrorMessage = "El apellido del alumno no puede ser vacía";
    expect(() => alumno.isValid()).toThrow(expectedErrorMessage);
  });

  test("Apellido alumno vacío", () => {
    let alumno = new Alumno("Pedro", "");
    let expectedErrorMessage = "El apellido del alumno no puede ser vacía";
    expect(() => alumno.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grupo de alumno nulo", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo(null);
    let expectedErrorMessage = "El alumno debe estar en un grupo";
    expect(() => alumno.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grupo de alumno undefined", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo(undefined);
    let expectedErrorMessage = "El alumno debe estar en un grupo";
    expect(() => alumno.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grupo de alumno undefined", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("");
    let expectedErrorMessage = "El alumno debe estar en un grupo";
    expect(() => alumno.isValid()).toThrow(expectedErrorMessage);
  });

  test("Alumno valido", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    expect(alumno.isValid()).toBe(true);
  });

  test("ToString alumno", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    let expectedString = "Pedro Gonzalez";
    expect(alumno.toString()).toBe(expectedString);
  });

  test("Lista de discapacidades vacía al crear el alumno", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    let expectedLength = 0;
    expect(alumno.getDiscapaciades().length).toBe(expectedLength);
  });

  test("Agregar discapacidades a la lista de discapaciades del alumno", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    alumno.agregarDiscapacidad("dislexia");
    let expectedLength = 1;
    expect(alumno.getDiscapaciades().length).toBe(expectedLength);
  });

  test("Agregar discapacidad repetida a la lista de discapaciades del alumno", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    alumno.agregarDiscapacidad("dislexia");
    let expectedErrorMessage =
      "No se pudo agregar. Esta discapacidad ya está en la lista o es vacía";
    expect(() => alumno.agregarDiscapacidad("dislexia")).toThrow(
      expectedErrorMessage,
    );
  });

  test("Agregar campo vacío a la lista de discapaciades del alumno", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    let expectedErrorMessage =
      "No se pudo agregar. Esta discapacidad ya está en la lista o es vacía";
    expect(() => alumno.agregarDiscapacidad("")).toThrow(expectedErrorMessage);
  });

  test("Lista de metas cumplidas vacias al crear el alumno", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    let expectedLength = 0;
    expect(alumno.getMetasCumplidas().length).toBe(expectedLength);
  });

  test("Agregar meta cumplida a la lista", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    let meta = new Metas("saber sumar", "Primero");
    meta.cumplioMeta();
    alumno.metaCumplida(meta);
    let expectedLength = 1;
    expect(alumno.getMetasCumplidas().length).toBe(expectedLength);
  });

  test("Agregar meta cumplida repetida a la lista", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    let meta = new Metas("saber sumar", "Primero");
    meta.cumplioMeta();
    alumno.metaCumplida(meta);
    let expectedErrorMessage =
      "No se pudo agregar. Esta meta ya está en la lista, no se cumplió o no es válida.";
    expect(() => alumno.metaCumplida(meta)).toThrow(expectedErrorMessage);
  });

  test("Agregar meta no cumplida a la lista", () => {
    let alumno = new Alumno("Pedro", "Gonzalez");
    alumno.setGrupo("Primero");
    let meta = new Metas("saber sumar", "Primero");
    let expectedErrorMessage =
      "No se pudo agregar. Esta meta ya está en la lista, no se cumplió o no es válida.";
    expect(() => alumno.metaCumplida(meta)).toThrow(expectedErrorMessage);
  });
});
