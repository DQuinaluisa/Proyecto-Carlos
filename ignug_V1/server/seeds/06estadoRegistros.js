
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.estadosRegistro').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.estadosRegistro').insert([
        {
          descripcion: 'Reiniciar',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Activo',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Inactivo',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        }
      ]);
    });
};
