var app = app || {};

(function() {
	'use strict';
	var LifeGroupApp = React.createClass({
		render: function () {
			var main = (
				<section className="main">
					<input
						className="toggle-all"
						type="checkbox"
						onChange={this.toggleAll}
						checked={activeTodoCount === 0}
					/>
					<ul className="todo-list">
						{todoItems}
					</ul>
				</section>
			);

			return (
				<div class="todoApplication">
					{main}
				</div>
			);
		}
	});
	function render() {
		React.render(
			<LifeGroupApp />,
			document.getElementById('lifeGroupApp'));
	}
	render();
})();