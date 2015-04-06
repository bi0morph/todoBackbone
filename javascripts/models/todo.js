var app = app || {};

app.Todo = Backbone.Model.extend({
	default: {
		title: '',
		complited: false
	},

	toggle: function () {
		this.save({
			complited: !this.get('complited')
		});
	}
});