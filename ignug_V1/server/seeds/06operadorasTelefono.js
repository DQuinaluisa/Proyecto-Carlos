
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.operadorasTelefono').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.operadorasTelefono').insert([
        {
          descripcion: 'CNT',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Claro',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        }
        ,
        {
          descripcion: 'MoviStart',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'Twenty',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        }
      ]);
    });
};
