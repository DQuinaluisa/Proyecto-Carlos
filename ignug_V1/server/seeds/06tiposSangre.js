
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogo.tiposSangre').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogo.tiposSangre').insert([
        {
          descripcion: 'A+',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'A-',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'B+',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'B-',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'AB+',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'AB-',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'O+',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        },
        {
          descripcion: 'O-',
          idEstadoRegistro: 2,
          idCredencialIngreso: 1
        }
      ]);
    });
};
