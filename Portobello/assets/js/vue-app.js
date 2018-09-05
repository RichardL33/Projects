var skillsets = [
	{ skill: 'html5', progress: 80 },
	{ skill: 'css3', progress: 80 },
	{ skill: 'sass/scss', progress: 90 },
	{ skill: 'javascript', progress: 90 },
	{ skill: 'jquery', progress: 90 },
	{ skill: 'grunt.js', progress: 90 },
	{ skill: 'gulp.js', progress: 90 },
	{ skill: 'react.js', progress: 10 },
	{ skill: 'angular.js', progress: 10 },
	{ skill: 'vue.js', progress: 40 },
	{ skill: 'bootstrap 3', progress: 80 },
	{ skill: 'wordpress', progress: 60 },
	{ skill: 'drupal', progress: 50 },
	{ skill: 'git', progress: 90 },
	{ skill: 'sketch', progress: 70 },
	{ skill: 'adobe photoshop', progress: 80 },
	{ skill: 'adobe illustrator', progress: 70 },
	{ skill: 'adobe after effects', progress: 60 }
];

$(document).ready(function(){
	new Vue({
	 el: '#resume',
	  data: {
	    progress: skillsets
	  },
	  mounted: function() {
	  		var postsArr = new Array(),
	  		    $postsList = $('div.col-md-5.mr-auto');

	  		//Create array of all posts in lists
	  		$postsList.find('.progress-list__skill').each(function(){
	  		    postsArr.push($(this).html());
	  		})

	  		//Split the array at this point. The original array is altered.
	  		var firstList = postsArr.splice(0, Math.round(postsArr.length / 2)),
	  		    secondList = postsArr,
	  		    ListHTML = '';

	  		function createHTML(list){
	  		    ListHTML = '';
	  		    for (var i = 0; i < list.length; i++) {
	  		        ListHTML += '<div class="progress-list__skill">' + list[i] + '</div>'
	  		    };
	  		}

	  		//Generate HTML for first column
	  		createHTML(firstList);
	  		$postsList.html(ListHTML);

	  		//Generate HTML for second column
	  		createHTML(secondList);
	  		//Create new column after original one
	  		$postsList.after('<div class="col-md-5 mr-auto"></div>').next().html(ListHTML);
	  	}
	});
})