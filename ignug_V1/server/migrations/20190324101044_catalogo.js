
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('catalogo')
    .createTable( 'tiposIdentificacion', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    })
    .createTable( 'estadosRegistro', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    })
    .createTable( 'roles', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    } )
    .createTable( 'sexos', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    } )
    .createTable( 'generos', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    } )
    .createTable( 'estadosCiviles', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    } )
    .createTable( 'etnias', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    } )
    .createTable( 'nacionalidades', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    } )
    .createTable( 'tiposSangre', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    } )
    .createTable( 'tiposDiscapacidades', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    } )
    .createTable( 'operadorasTelefono', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    } )
    .createTable( 'paises', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('codigoInternacional').notNullable().unique();
        t.string('codigoNacional').notNullable().unique();
        t.string('descripcion').notNullable().unique();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    } )
    .createTable( 'ubicaciones', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('codigo').notNullable().unique();
        t.string('descripcion').notNullable();
        t.integer('idUbicacion').notNullable();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    } )
    .createTable( 'amie', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('codigo').notNullable().unique();
        t.string('descripcion').notNullable();
        t.string('codigoProvincia').notNullable();
        t.string('codigoCanton').notNullable();
        t.string('sostenimiento').notNullable();
        t.string('estado').notNullable();
        t.timestamp('fechaRegistro').notNullable().defaultTo(knex.fn.now());
        t.integer('idEstadoRegistro').notNullable();
        t.bigInteger('idCredencialIngreso').notNullable();
    } );
};

exports.down = function(knex, Promise) {
    return knex.schema.withSchema('catalogo')
        .dropTableIfExists( 'tiposIdentificacion' )
        .dropTableIfExists( 'estadosRegistro' )
        .dropTableIfExists( 'sexos' )
        .dropTableIfExists( 'generos' )
        .dropTableIfExists( 'estadosCiviles' )
        .dropTableIfExists( 'etnias' )
        .dropTableIfExists( 'nacionalidades' )
        .dropTableIfExists( 'tiposSangre' )
        .dropTableIfExists( 'tiposDiscapacidades' )
        .dropTableIfExists( 'operadorasTelefono' )
        .dropTableIfExists( 'paises' )
        .dropTableIfExists( 'ubicaciones' )
        .dropTableIfExists( 'amie' );
};
