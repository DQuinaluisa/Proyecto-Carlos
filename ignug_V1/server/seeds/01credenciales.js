
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('sesion.credenciales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sesion.credenciales').insert([
        {
          idTipoIdentificacion: 1,
          identificacion: 1717171717,
          primerNombre: 'admin',
          segundoNombre: 'admin',
          apellidoPaterno: 'admin',
          apellidoMaterno: 'admin',
          fechaNacimiento: '1999-02-02',
          idTipoSangre: 1,
          idPais: 56,
          idProvincia: 1,
          idCanton: 27,
          // email,
          // contraseña,
          semilla: '123456',
          fechaCaducidad: '9999-12-31',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          idTipoIdentificacion: 1,
          identificacion: 1713121810,
          primerNombre: 'Carlos',
          segundoNombre: 'Alberto',
          apellidoPaterno: 'Andocilla',
          apellidoMaterno: 'Andrade',
          fechaNacimiento: '1999-02-02',
          idTipoSangre: 1,
          idPais: 56,
          idProvincia: 1,
          idCanton: 27,
          // email,
          // contraseña,
          semilla: '123456',
          fechaCaducidad: '9999-12-31',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        }
      ]);
    });
};
