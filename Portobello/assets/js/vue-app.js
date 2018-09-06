new Vue({
	el: '#personal-profile',
	data: {
		name: 'Richard Lee',
		title: 'frontend developer, creative engineer',
		email: 'rich.leeroy@gmail.com',
		phone: '17709124747',
		city: 'Atlanta, GA',
		social: {
			github: 'https://github.com/richardl33',
			linkedin: 'https://www.linkedin.com/in/richardl33/'
		}
	}
});

var skilltrack = [
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

var employment = [
	{
		title: 'Senior Front End Developer', 
		company: 'Digitas - North America', 
		date: 'Nov 2017 - present'
	},
	{
		title: 'Creative Engineer', 
		company: 'Digitas - North America', 
		date: 'June 2015 - Nov 2017'
	},
	{
		title: 'Creative Developer', 
		company: 'Vert', 
		date: 'Feb 2015 - June 2015'
	},
	{
		title: 'Front End Developer', 
		company: 'HeavyDuty Branding (Formally Hothead Studios)', 
		date: 'Feb 2015 - Mar 2015'
	}
];

var education = [
	{
		school: 'General Assembly',
		date: '2017',
		cert: 'Certification in Javascript'
	},
	{
		school: 'General Assembly',
		date: '2016',
		cert: 'Certification in Visual Design, UX/UI Design'
	},
	{
		school: 'The Creative Circus',
		date: '2013 - 2015',
		cert: 'Graduate in Interactive Development'
	}
];

var nonProfit = [
	{
		company: '48 in 48 (Atlanta, GA, USA)',
		date: 'Oct 2017'
	},
	{
		company: '48 in 48 (Atlanta, GA, USA)',
		date: 'Oct 2015'
	}
];

$(document).ready(function(){
	new Vue({
	 el: '#vue-resume',
	  data: {
	    progress: skilltrack,
	    experience: employment,
	    education: education,
	    extras: nonProfit
	  },
	  mounted() {
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