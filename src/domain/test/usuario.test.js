import { expect, test, describe } from "@jest/globals";
import { Usuario } from "../Usuario.js";

describe("Usuario class tests", () => {
  test("Crear un usuario y dar nombre", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let nombreUsuario = usuario.getNombre();
    let expectedName = "Lucas";
    expect(nombreUsuario).toBe(expectedName);
  });

  test("Crear un usuario y dar apellido", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let apellidoUsuario = usuario.getApellido();
    let expectedApellido = "Perez";
    expect(apellidoUsuario).toBe(expectedApellido);
  });

  test("Crear un usuario y dar Email", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let emailUsuario = usuario.getEmail();
    let expectedEmail = "lp@gmail.com";
    expect(emailUsuario).toBe(expectedEmail);
  });

  test("Crear un usuario y dar cédula", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let cedulaUsuario = usuario.getCedula();
    let expectedCedula = "5.123.432-1";
    expect(cedulaUsuario).toBe(expectedCedula);
  });

  test("Crear un usuario y dar telefono", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let telefonoUsuario = usuario.getTelefono();
    let expectedTelefono = 91476810;
    expect(telefonoUsuario).toBe(expectedTelefono);
  });

  test("Crear un usuario y dar cargo", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let cargoUsuario = usuario.getCargo();
    let expectedCargo = "Maestro/a";
    expect(cargoUsuario).toBe(expectedCargo);
  });

  test("Darle un cargo nuevo a un usuario", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedCargo = "Director/a";
    usuario.setCargo("Director/a");
    expect(usuario.getCargo()).toBe(expectedCargo);
  });

  test("Nombre usuario nulo", () => {
    let usuario = new Usuario(
      null,
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "El nombre del usuario no puede ser vacío";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Nombre usuario undefined", () => {
    let usuario = new Usuario(
      undefined,
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "El nombre del usuario no puede ser vacío";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Nombre usuario vacío", () => {
    let usuario = new Usuario(
      "",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "El nombre del usuario no puede ser vacío";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Apellido usuario nulo", () => {
    let usuario = new Usuario(
      "Lucas",
      null,
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "El apellido del usuario no puede ser vacío";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Apellido usuario undefined", () => {
    let usuario = new Usuario(
      "Lucas",
      undefined,
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "El apellido del usuario no puede ser vacío";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Apellido usuario vacío", () => {
    let usuario = new Usuario(
      "Lucas",
      "",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "El apellido del usuario no puede ser vacío";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Email usuario nulo", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      null,
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "El usuario debe tener un email válido";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Email usuario undefined", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      undefined,
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "El usuario debe tener un email válido";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Email usuario vacío", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "El usuario debe tener un email válido";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Formato equivocado para el email", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lpgmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "El usuario debe tener un email válido";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Cédula usuario nulo", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      null,
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "La cédula del usuario no puede ser vacía";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Cédula usuario undefined", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      undefined,
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "La cédula del usuario no puede ser vacía";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Cédula usuario vacío", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "",
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "La cédula del usuario no puede ser vacía";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Telefono usuario nulo", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      null,
      "Maestro/a",
    );
    let expectedErrorMessage = "El telefono debe ser válido";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Telefono usuario undefined", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      undefined,
      "Maestro/a",
    );
    let expectedErrorMessage = "El telefono debe ser válido";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Telefono usuario vacío", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      "",
      "Maestro/a",
    );
    let expectedErrorMessage = "El telefono debe ser válido";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Telefono usuario no es un número", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      "abc",
      "Maestro/a",
    );
    let expectedErrorMessage = "El telefono debe ser válido";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Cargo del usuario nulo", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      null,
    );
    let expectedErrorMessage = "El cargo del usuario no puede ser vacío";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Cargo del usuario undefined", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      undefined,
    );
    let expectedErrorMessage = "El cargo del usuario no puede ser vacío";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Cargo del usuario nulo", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "",
    );
    let expectedErrorMessage = "El cargo del usuario no puede ser vacío";
    expect(() => usuario.isValid()).toThrow(expectedErrorMessage);
  });

  test("ToString usuario", () => {
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedString = "Lucas Perez";
    expect(usuario.toString()).toBe(expectedString);
  });
});
