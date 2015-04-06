var app = app || {};

var TodoList = Backbone.Collection.extend({
	model: app.Todo,

	localStorage: new Backbone.LocalStorage('todos-backbone'),

	complited: function () {
		return this.filter(function(todo) {
			return todo.get('complited');
		})
	},

	remaining: function () {
		// apply send array this.complited() as paramerters
		// like _.without(this, this[0], this[1]... etc);
		return this.without.apply( this, this.complited() );
	},

	nextOrder: function() {
		if ( !this.length ) {
			return 1;
		}
		return this.last().get('order') + 1;
	},

	comparator: function ( todo ) {
		return todo.get('order');
	}
});

app.Todos = new TodoList();