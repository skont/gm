'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {

  up () {
    this.table('posts', (table) => {
      table.string('user')
    })
  }

  down () {
    this.table('posts', (table) => {
      table.dropColumn('user')
    })
  }

}

module.exports = PostsTableSchema
