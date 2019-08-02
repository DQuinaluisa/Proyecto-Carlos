
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.generos').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.generos').insert([
        {
          descripcion: 'Masculino',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Femenino',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        }
      ]);
    });
};
