
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.tiposIdentificacion').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.tiposIdentificacion').insert([
        {
          descripcion: 'Cédula',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Pasaporte',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Carné Refugiado',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Otro',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        }
      ]);
    });
};