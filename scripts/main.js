require(["jquery", "jquery-ui-1.8.16.custom.min", "inspection"], function($) {
	// all scripts ready
    $(function() {
		MobileQuestions.loadForm();
		$('div.date > input').datepicker();
		$('#datepicker').datepicker();
    });
});
