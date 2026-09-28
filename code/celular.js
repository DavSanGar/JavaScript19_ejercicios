class Celular {
  #contactos;
  #llamadas;

  constructor() {
    this.#contactos = [];
    this.#llamadas = [];
  }

  agregarContacto(contacto) {
    let existe = this.#contactos.some(
      (c) => c.nombre === contacto.nombre || c.numero === contacto.numero,
    );

    if (existe) {
      console.log(
        `Ya existe un contacto con el nombre ${contacto.nombre} o con el número ${contacto.numero}`,
      );
    } else {
      this.#contactos.push(contacto);
    }
  }

  buscarPorNombre(nombre) {
    return this.#contactos.find((c) => c.nombre === nombre);
  }

  buscarPorNumero(numero) {
    return this.#contactos.find((c) => c.numero === numero);
  }

  eliminarContacto(nombre) {
    let index = this.#contactos.find((c) => c.nombre === nombre);

    if (index !== -1) {
      this.#contactos.splice(index, 1);
    } else {
      console.log("No se encontró el contacto a eliminar.");
    }
  }

  llamar(nombre) {
    let contact = this.buscarPorNombre(nombre);

    if (contact) {
      this.#llamadas.push(
        `Llamada a ${contact.nombre} con número ${contact.numero} realizada`,
      );
    } else {
      console.log("No existe ese contacto. No se puede hacer la llamada.");
    }
  }

  verContactos() {
    if (this.#contactos.length === 0) {
      return "La lista de contactos está vacia.";
    } else {
      return this.#contactos
        .map((c, index) => `${index + 1}. Nombre: ${c.nombre} - ${c.numero}`)
        .join("\n");
    }
  }

  verHistorial() {
    if (this.#llamadas.length === 0) {
      return "No hay historial de llamadas";
    } else {
      return this.#llamadas.join("\n");
    }
  }
}

let movil = new Celular();
console.log(movil.verHistorial());
movil.agregarContacto({ nombre: "Laura", numero: "555-1234" });
console.log(movil.verContactos());
movil.agregarContacto({ nombre: "Pedro", numero: "557-1234" });
console.log(movil.verContactos());
movil.llamar("Laura");
console.log(movil.verHistorial());
