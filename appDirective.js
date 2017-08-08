// directives are templates

app.directive("cardDirective",function(){
	return {
		template: "<p>{{employee.name}}</p>"
	}
})