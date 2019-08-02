
exports.seed = function(knex, Promise) {
  return knex.schema.withSchema('sesion')
  .alterTable('credenciales', function(t) {
    t.foreign('idTipoIdentificacion')
     .references('id')
     .on('catalogo.tiposIdentificacion')
     .onDelete('RESTRICT')
     .onUpdate('CASCADE')
     t.foreign('idEstadoRegistro')
     .references('id')
     .on('catalogo.estadosRegistro')
     .onDelete('RESTRICT')
     .onUpdate('CASCADE')
     t.foreign('idCredencialIngreso')
     .references('id')
     .on('sesion.credenciales')
     .onDelete('RESTRICT')
     .onUpdate('RESTRICT')
  });
};
