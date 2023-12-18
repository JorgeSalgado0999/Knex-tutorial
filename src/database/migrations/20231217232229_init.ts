import type {Knex} from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable("notes", (table) => {
		table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()")); // UUID como clave primaria
		table.string("title").notNullable(); // Título como cadena y obligatorio
		table.text("content"); // Contenido como texto, no obligatorio
		table.timestamps(true, true); // Crea automáticamente las columnas created_at y updated_at
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable("notes");
}
