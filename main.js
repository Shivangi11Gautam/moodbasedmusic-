<!-----------loop------------------>
var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon

<!-----------end----------->
		<!------------------------------VARIABLES decleration ---------------------------------->

		//var songName1 = 'Badri Ki Dulhania (Title Track)';
		//var songName2 = 'Humma Song';
		//var songName3 = 'Nashe Si Chadh Gayi';
		//var songName4 = 'The Breakup Song';

		// or hum iske jagah ye use karege

		//var songName = ['Badri Ki Dulhania (Title Track)','Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];

		//var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];

		//var artistList = ['Artist #1', 'Artist #2', 'Artist #3', 'Artist #4']; 

		//var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
		//var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
		//var durationList = ['2:56','3:15','2:34','2:29'];
 
  var songs_pop = [{
        'name': 'Adventure of a Lifetime',
        'artist': 'Coldplay',
        'album': 'A Head Full Of Dreams',
        'duration': '4:23',
       'fileName': 'song1.mp3',
	   'image' : 'song1.jpg'
	   
    },
    {
        'name': 'Hymn for the weekend',
    'artist': 'Coldplay,Beyonce',
        'album': 'A Head Full Of Dreams',
        'duration': '4:18',
        'fileName': 'song2.mp3',
		'image' : 'song1.jpg'
    },
    { 'name': 'Lost in Paradise',
        'artist': 'Rihana',
        'album': 'Unapologetic',
        'duration': '3:35',
        'fileName': 'song3.mp3',
		'image' : 'song3.jpg'
    },
    {
        'name': 'Pillowtalk',
        'artist': 'Zayn Malik',
        'album': 'pillowtalk',
        'duration': '3:23',
        'fileName': 'song4.mp3',
		'image' : 'song4.jpg'
    }]

	
  var songs_romantic = [{
        'name': 'Zehnaseeb',
        'artist': 'chinmayi Sripaada,Shekhar',
        'album': 'Hasee toh fasee',
        'duration': '3:37',
       'fileName': 'song5.mp3',
	   'image' : 'song5.jpg'
	   
    },
    {
        'name': 'Ek Din',
        'artist': 'Javed Ali,Pritam',
        'album': 'Naqaab',
        'duration': '4:14',
        'fileName': 'song6.mp3',
		'image' : 'song6.jpg'
    },
    {
        'name': 'Rab ka shukrana(Reprise)',
        'artist': 'Anupam Amod',
        'album': 'Jannat 2',
        'duration': '4:37',
        'fileName': 'song7.mp3',
		'image' : 'song7.jpg'
    },
    {
        'name': 'Jag Ghoomeya',
        'artist': 'Salman Khan',
        'album': 'Sultan',
        'duration': '4:49',
        'fileName': 'song8.mp3',
		'image' : 'song8.jpg'
    }]
	
	 var songs_sad = [{
        'name': 'Sach keh Raha Hai Diwana',
        'artist': 'Bombay S Jayashri,KK,Pinky',
        'album': 'RHTDM',
        'duration': '5:27',
       'fileName': 'song9.mp3',
	   'image' : 'song9.jpg'
	   
    },
    {
        'name': 'Channa Mereya',
        'artist': 'Arijit Singh',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '4:49',
        'fileName': 'song10.mp3',
		'image' : 'song10.jpg'
    },
    {
        'name': 'Hamari Adhuri kahani',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '6:38',
        'fileName': 'song11.mp3',
		'image' : 'song11.jpg'
    },
    {
        'name': 'Tujhe Bhula Diya',
        'artist': 'Mohit Chauhan',
        'album': 'Anjana Anjani',
        'duration': '4:41',
        'fileName': 'song12.mp3',
		'image' : 'song12.jpg'
    }]
	 var songs_punjabi = [{
        'name': 'Na Ja',
        'artist': 'Paav Dharia',
        'album': 'NA JA',
        'duration': '3:26',
       'fileName': 'song13.mp3',
	   'image' : 'song13.jpg'
	   
    },
    {
        'name': 'Backbone',
        'artist': 'Hardy Sandhu',
        'album': 'BackBone',
        'duration': '2:55',
        'fileName': 'song14.mp3',
		'image' : 'song14.jpg'
    },
    {
        'name': 'Oscar',
        'artist': 'Gippy Grewal,Badshah',
        'album': 'Kaptaan',
        'duration': '3:35',
        'fileName': 'song15.mp3',
		'image' : 'song15.jpg'
    },
    {
        'name': 'Suit Suit',
        'artist': 'Guru Randhawa',
        'album': 'Hindi Medium',
        'duration': '3:10',
        'fileName': 'song16.mp3',
		'image' : 'song16.jpg'
    }]
		<!---------------------------------Welcome Screen--------------------------------->

		//$('.welcome-screen button').on('click', function() {
		//var name = $('#name-input').val();
		//if (name.length > 2) {
		//var message = "Welcome, " + name;
		//$('.main .user-name').text(message);
		//$('.welcome-screen').addClass('hidden');
		//$('.main').removeClass('hidden');
		//} else {
		//$('#name-input').addClass('error');
		//}
		//});
		//latest 
		
		$('.welcome-screen button').on('click', function() {
		var name = $('#name-input').val();
		if (name.length > 2) {
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.mood').removeClass('hidden');
		} else {
          } 
          $('#name-input').addClass('error');
		});
		//function creation for volume-------------------
		function setvolume(){
			var song =document.querySelector('audio');
			song.volume=slider.value/100;
		}
		
		<!--------------------------------2nd Screen Song wala part------------------->
				$('.mood img ').on('click', function() {
					$('.mood').addClass('hidden');
				$('.main').removeClass('hidden');
				});
		<!---------------------Function created for songs -------------->

		function toggleSong() {
		var song = document.querySelector('audio');
		if(song.paused == true) {
		console.log('Playing');
		$('.play-icon').removeClass('fa-play').addClass('fa-pause');
		song.play();
		}
		else {
		console.log('Pausing');
		$('.play-icon').removeClass('fa-pause').addClass('fa-play');
		song.pause();
		}
		}
		<!-----------------FUnction ended------------->
		
		//Function created for images change

		function changeCurrentSongDetails(songObj) {
		$('.current-song-image').attr('src','img/'+ songObj.image)
		$('.current-song-name').text(songObj.name)
		$('.current-song-album').text(songObj.album)
		}
		

		
		//Function end
		
		function fancyTimeFormat(time)
		{
		// Hours, minutes and seconds
		var hrs = ~~(time / 3600);
		var mins = ~~((time % 3600) / 60);
		var secs = time % 60;

		// Output like "1:01" or "4:03:59" or "123:03:59"
		var ret = "";

		if (hrs > 0) {
		ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
		}

		ret += "" + mins + ":" + (secs < 10 ? "0" : "");
		ret += "" + secs;
		return ret;
		}
		
		 function updateTimer(){
			 var song = document.querySelector('audio');
			 var ct = song.currentTime;
			 var td = song.duration;
			 var percentage = (ct/td)*100;
			 $('.progress-filled').css('width',percentage+ "%");
		 }

		<!----------------------function Time show--------------------->
		function updateCurrentTime() {
		var song = document.querySelector('audio');
		var currentTime = Math.floor(song.currentTime);
		currentTime = fancyTimeFormat(currentTime);
		var duration = Math.floor(song.duration);
		duration = fancyTimeFormat(duration)
		$('.time-elapsed').text(currentTime);
		$('.song-duration').text(duration);
		}

        <!-----------------------Function create addSongNameClickEvent------------->

		function addSongNameClickEvent(songObj,position) {
		var songName = songObj.fileName; // New Variable 
		var id = '#song' + position;
		$(id).click(function() {
		var audio = document.querySelector('audio');
		var currentSong = audio.src;
		if(currentSong.search(songName) != -1)
		{
		toggleSong();
		changeCurrentSongDetails(songObj);
		}
		else {
		audio.src = songName;
		toggleSong();
		changeCurrentSongDetails(songObj); // Function Call
		}
		});
		}

      <!--------------function ended----------------->
function playlistcondition(){ 

    if(pop == 1){

        songs = songs_pop;
    }
    else if(romantic == 1){
        
        songs = songs_romantic;
    }

    else if(sad == 1){
        
        songs = songs_sad ;
    }

    else if( punjabi== 1){

        songs = songs_punjabi;
    }

    return songs;
}
	  
    function updateSongList(){
    songs=playlistcondition();
    

    for(var i =0; i < songs.length;i++) {
       var obj = songs[i];
       var name = '#song' + (i+1);
       var song = $(name);


       song.find('.song-name').text(obj.name);
       song.find('.song-artist').text(obj.artist);
       song.find('.song-album').text(obj.album);
       song.find('.song-length').text(obj.duration);
       addSongNameClickEvent(obj,i+1)

     }

     		songs_table = $('#songs').DataTable(
            {
                paging: false
            }
          );



} 
		  
//function for volume-----
      $('#slider').on('click',function(){
		  setvolume();
	  });
	  
	  $('#slider').on('mousemove',function(){
		  setvolume();
	  });
	
	 
	 
	 
	 
	 
  //function for loop------------------
  $('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')
    willLoop = 1 - willLoop;
});

$('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});

$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if(currentSongNumber < 4) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
    else if(willLoop == 1) {
        var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
})

		function timeJump() {
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
}
		
  
  
  
$('#maa').on('click',function(){
   if(typeof songs_table != 'undefined' ){
      songs_table.destroy();
   }
    pop=1;
    sad=romantic=punjabi=0;
    updateSongList();
    $('.mood-sorting').addClass('hidden');
    $('.content').removeClass('hidden');

});


$('#paa').on('click',function(){
       if(typeof songs_table != 'undefined'){
        songs_table.destroy();
    }
    romantic=1;
    pop=sad=punjabi=0;
    updateSongList();
    $('.mood').addClass('hidden');
    $('.content').removeClass('hidden');

});


$('#caa').on('click',function(){
       if(typeof songs_table != 'undefined'){
        songs_table.destroy();
    }
    sad=1;
    pop=punjabi=romantic=0;
    updateSongList();
    $('.mood').addClass('hidden');
    $('.content').removeClass('hidden');

});
$('#daa').on('click',function(){
     if(typeof songs_table != 'undefined'){
       songs_table.destroy();
    }
    punjabi=1;
    pop=sad=romantic=0;
    updateSongList();
    $('.mood').addClass('hidden');
    $('.content').removeClass('hidden');

});



$('#hatt').on('click',function(){

    $('.content').addClass('hidden');
    $('.mood').removeClass('hidden');
    
$('.main').addClass('hidden');

    song = document.querySelector('audio');
          song.pause();

  })


	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
		window.onload = function() {
	     changeCurrentSongDetails(songs_pop[0]);
		 
		 
		
   
			
 

		//$('#song1 .song-name').text(songName[0]);
		//$('#song2 .song-name').text(songName[1]);
		//$('#song3 .song-name').text(songName[2]);
		//$('#song4 .song-name').text(songName[3]);

		<!--------------- Artist name---------->
		
		//$('#song1 .song-artist').text(artistList[0]);
        //$('#song2 .song-artist').text(artistList[1]);
		//$('#song3 .song-artist').text(artistList[2]);
		//$('#song4 .song-artist').text(artistList[3]);
		
		
		
		<!-----------Making click event on songs names---------->

		//1st
		//$('#song1').click(function() {
		//var audio = document.querySelector('audio');
		//var currentSong = audio.src;
		//if(currentSong.search(fileNames[0]) != -1)
		//{
		//toggleSong();
		//}
		//else {
		//audio.src = fileNames[0];
		//toggleSong();
		//}
		//});
		//2nd
		//$('#song2').click(function() {
		//var audio = document.querySelector('audio');
		//var currentSong = audio.src;
		//if(currentSong.search(fileNames[1]) != -1)
		//{
		//toggleSong();
		//}
		//else {
		//audio.src = fileNames[1];
		//toggleSong();
		//}
		//});
		//3rd
		//$('#song3').click(function() {
		//var audio = document.querySelector('audio');
		//var currentSong = audio.src;
		//if(currentSong.search(fileNames[2]) != -1)
		//{
		//toggleSong();
		//}
		//else {
		//audio.src = fileNames[2];
		//toggleSong();
		//}
		//});
		//4th
		//$('#song4').click(function() {
		//var audio = document.querySelector('audio');
		//var currentSong = audio.src;
		//if(currentSong.search(fileNames[3]) != -1)
		//{
		//toggleSong();
		//}
		//else {
		//audio.src = fileNames[3];
		//toggleSong();
		//}
		//});

		//addSongNameClickEvent(fileNames[0],1);
		//addSongNameClickEvent(fileNames[1],2);
		//addSongNameClickEvent(fileNames[2],3);
		//addSongNameClickEvent(fileNames[3],4);
		
		//for (var i = 0; i < fileNames.length ; i++) {
		//addSongNameClickEvent(fileNames[i],i)
		//}
		
		//for (var i = 0; i <= fileNames.length ; i++) {
		//addSongNameClickEvent(fileNames[i],i+1)
		//} 		

		updateCurrentTime();
		setInterval(function() {
		updateCurrentTime();
		updateTimer();
		},1000);
		
		  

}

		<!-------------------Ganne vagera ka code----------->

		$('.play-icon').on('click', function() {
		toggleSong();  <!--------------Function calling--------------->
		});

		//$('body').on('keypress',function(event) {
		//if (event.keyCode == 32)
		//{
		//toggleSong();  <!--------------Function calling--------------->
		//}
		//});
   $('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});
<!-----------------shuffle function------------->
function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}
<!----------ended-------------------->
 
<!--------------forward&backward---------------->

var Playingnumber = 0  ;
var shuffle=0;
var equal = 0;




function changeSong() 
{
var music =  songs[Playingnumber].fileName;
var song = document.querySelector("audio");
song.src = music;
toggleSong();
changeCurrentSongDetails(songs[Playingnumber])
}






$(".fa-step-forward").click(function(){

if(shuffle==1)
{
var audio = document.querySelector('audio');
var nextSongNumber = randomExcluded(0,3,Playingnumber); // Calling our function from Stackoverflow

var nextSongObj = songs[nextSongNumber];
audio.src = nextSongobj.fileName;
toggleSong();
changeCurrentSongDetails(nextSongobj);
Playingnumber = nextSongNumber;


}


else {

if(Playingnumber == songs.length-1){
Playingnumber = 0;
changeSong();
}

else {
console.log("two");
console.log(Playingnumber);
Playingnumber++;
changeSong();
}

}

})




$(".fa-step-backward").click(function(){

if(Playingnumber == 0){
console.log("one");
Playingnumber = (songs.length-1);
changeSong();




}

else {
console.log("two");
console.log(Playingnumber);
Playingnumber--;
changeSong();
}




})
<!------------end----------------------->