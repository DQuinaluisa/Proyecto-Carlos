
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('generales')
    .createTable( 'telefonos', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.bigInteger('idCredencial').notNullable();
        t.integer('idOperadoraTelefono').notNullable();
        t.string('numero').notNullable().unique();
        t.string('extencion').notNullable();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    })
    .createTable( 'domicilios', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.bigInteger('idCredencial').notNullable();
        t.integer('idPais').notNullable();
        t.integer('idProvincia').notNullable();
        t.integer('idCanton').notNullable();
        t.integer('idParroquia').notNullable();
        t.string('callePrincipal').notNullable();
        t.string('calleSecundaria').notNullable();
        t.string('lote').notNullable();
        t.string('codigoPostal').notNullable();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    })
    .createTable( 'discapacidades', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.bigInteger('idCredencial').notNullable();
        t.integer('idTipoSangre').notNullable();
        t.integer('porcentaje').notNullable();
        t.string('identificacion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    })
};


exports.down = function(knex, Promise) {
    return knex.schema.withSchema('catalogo')
        .dropTableIfExists( 'generales' );
        
};
