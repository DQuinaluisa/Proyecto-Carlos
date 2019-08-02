
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.tiposDiscapacidades').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.tiposDiscapacidades').insert([
        {
          descripcion: 'Intelectual',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Física',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Visual',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Auditiva',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Mental',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Otra',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'No aplica',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        }
      ]);
    });
};
