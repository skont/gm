'use strict'

const Schema = use('Schema')

class MessagesTableSchema extends Schema {

  up () {
    this.create('messages', (table) => {
      table.increments()
      table.string('extsystem')
      table.string('messageconts')
      table.date('IssueDate')
      table.date('ProcessDate')
      table.integer('msgstatus')
      table.string('msgreply')
      })
  }

  down () {
    this.drop('messages')
  }

}

module.exports = MessagesTableSchema
