
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.sexos').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.sexos').insert([
        {
          descripcion: 'Hombre',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Mujer',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        }
      ]);
    });
};
