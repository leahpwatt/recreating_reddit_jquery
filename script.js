$(function(){
	$.get('https://www.reddit.com/r/aww/.json', function(response){

	response.data.children.forEach(function(parameter){

			var author = parameter.data.author
			var title = parameter.data.title
			var url = parameter.data.url
			var thumb = parameter.data.thumbnail
			var numComments = parameter.data.num_comments
			console.log(author, title, url, thumb, numComments);

			var container = $("<div class='container'>")
			var makeTitle = $("<h3 class='inline'>").text(title);
			var makeURL = $("<a target='_blank'>").attr("href", url);
			var makeImage = $("<img class='thumbnail'>").attr("src", thumb);
			var makeAuthor = $("<p class='inline'>").text("Submitted by: " + author);
			var makeComments = $("<p class='inline'>").text("Number of comments: " + numComments);

			$("#reddit").append(container);
			container.append(makeImage, makeTitle, makeAuthor, makeComments);
			makeTitle.wrap(makeURL);

		});

	});

});