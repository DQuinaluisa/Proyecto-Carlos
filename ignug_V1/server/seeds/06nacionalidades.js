
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.nacionalidades').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.nacionalidades').insert([
        {
          descripcion: 'Indigena',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Afroecuatoriano',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Negro',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Mulato',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Montuvio',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Mestizo',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Blanco',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Otro',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'No registra',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        }
      ]);
    });
};
