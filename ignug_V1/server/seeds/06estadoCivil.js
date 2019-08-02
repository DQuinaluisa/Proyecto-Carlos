
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.estadosCiviles').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.estadosCiviles').insert([
        {
          descripcion: 'Soltero/a',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Casado/a',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Divorciado/a',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Unión libre',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Viudo/a',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        }
      ]);
    });
};
