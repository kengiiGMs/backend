'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentsSchema extends Schema {
  up() {
    this.create('students', (table) => {
      table.increments()
      table.string('name', 70).notNullable()
      table.string('address', 120).notNullable()
      table.string('phone', 20).notNullable()
      table.string('course', 50).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('students')
  }
}

module.exports = StudentsSchema
