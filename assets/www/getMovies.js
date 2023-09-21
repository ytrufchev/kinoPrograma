      var movienameslist = [];
       var movieIds = [];
       var backdrops = [];
       var overviews = [];
       var posters = [];
       var runtimes = [];
       var votes = [];
       var timestamps = [];
       var longnames = []; 
       var selectedprojections = [];
       var trailers = [];
       var longids = [];
       var moviecat = [];
       var castName = [];
       var castPhoto = [];
       var city = localStorage.getItem('city');
      var cinema = localStorage.getItem('cinema');
      function test(){
        //Get the movie names and projection times from the source by cinema ID
      var cinemaId = localStorage.getItem("cinema");
      var baseUrl = "https://programata.bg/json/?request=placeDetails&id="+encodeURI(cinemaId);
    $.ajax({
     url: baseUrl,
     async: false,
    "dataType": "json",
  "contentType": "application/json; charset=utf-8",
     type: 'GET' // this is default, but worth pointing out
      }).done(function(data){
      for(i in data.place.events){
        var name1 = JSON.stringify(data.place.events[i].name);
        var nameCorrent = name1.replace(/\s3d/gmi, "");
        movienameslist.push(nameCorrent);
           for(j in data.place.events[i].dates){
          var time = data.place.events[i].dates[j];
          var time1 = moment(time).format('x');
          var time2 = time1.replace(/\+(.*)/gmi, '');
          timestamps.push(time2);
          longnames.push(nameCorrent);
        }
      }
            });
            //Get Movie IDs from the movie data base to be able to get the other information by the movie ID
                        for (i in movienameslist){
  var settings = {
  "async": false,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query="+encodeURIComponent(movienameslist[i])+"&language=bg&api_key=e8a6a870421f5cc13e775873bfe1cad8&&sort_by=release_date.desc",
  "method": "GET",
  "headers": {},
  "data": "{}",
  "dataType": "json",
  "contentType": "application/json; charset=utf-8"
}

$.ajax(settings).done(function (response) {
  movieIds.push(response.results[0].id);
});
}
//Get other information from the movie database such as backgrop, poster and overwview
for (i in movieIds){
  var settings = {
  "async": false,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/"+movieIds[i]+"?language=bg&append_to_response=videos&api_key=e8a6a870421f5cc13e775873bfe1cad8",
  "method": "GET",
  "headers": {},
  "data": "{}",
  "dataType": "json",
  "contentType": "application/json; charset=utf-8"
}

$.ajax(settings).done(function (response) {
  runtimes.push(response.runtime);  
  //trailers.push(response.videos.results[0].key);
  backdrops.push(response.backdrop_path);
  overviews.push(response.overview);
  posters.push(response.poster_path);
});
}
//Doing all the math and styling for the "now playing" movie
for(i in movienameslist){

      
      for(j in timestamps){
         longids.push(movieIds[i]);
         
                    }
                    
}

    for (i in posters){
                                document.getElementById("Posters").innerHTML += "<div style='overflow: hidden;'><div id='js-flip-1' class='flip'><div class='card'><div class='face front'><img style='margin: auto;' class='posterImg' src='https://image.tmdb.org/t/p/w342/"+posters[i]+"'></br><div class='showtimes1'></div></br><div class='details1'>fsdfsdfsdffsdf</div></div><div class='face back'>Back</div></div></div></br><div id='text2' style='top:-10vh;'>"+(runtimes[i])+"мин.</div><br><button style='margin-left: 5vw; position: relative; top: 0vh;' class='buyticket' onclick='projections("+i+");'>Прожекции</button></br><button style='margin-left: 5vw; position: relative; ' class='info' id='movieinfo' onclick='info("+i+");'>Информация</button></div>";
                      document.getElementsByClassName("details1")[i].innerHTML = "<div style='overflow:auto !important; top: 0vh;'><img style='position: relative; width: 98%; top:0; left:0; margin:0; border-radius: 10px;' alt='Няма налично изображение' src='https://image.tmdb.org/t/p/w185/"+backdrops[i]+"'</div></br><div style='position: relative; white-space: normal; margin-bottom: 50vh; height: auto !important ; width:97%; margin-left: 1vw; margin-right: 1vw;'>"+overviews[i]+"</div>";
          //
}
function refreshData()
                                          {
                                        x = 60;  // 60 Seconds     
                     for(i in timestamps){
                       var b = Math.round(new Date().getTime()/1000)+"000";
                     var c= Math.max.apply( Math,$.grep(timestamps,function(n){return n<=b}));
                     var d= Math.min.apply( Math,$.grep(timestamps,function(n){return n>b}));
                     var timeElapsed = ((Math.round(new Date().getTime()/1000)+"000") - c);
                                    if(timestamps[i] == c){
                                      var index = movienameslist.indexOf(longnames[i]);
                                      var endtime = (timestamps[i]+((runtimes[index]*60)*1000));
                                      var timeinpercents = ((timeElapsed/60)/10 / (runtimes[index]));
                                      var timeleft = Math.round((runtimes[index]) -  (timeElapsed/1000)/60);
                                      if(c <= (Math.round(new Date().getTime()/1000)+"000") <= endtime){
                                        document.getElementById("nowPlaying"). innerHTML = "<img class='nowplayingposter' src='https://image.tmdb.org/t/p/w342/"+posters[index]+"'><text class='nowplayingtitle'>Сега</text><div class='nowpl'><text style='position: relative; top: -2vh;'>"+movienameslist[index]+"</text></div><div class='progress style='width:60vw;'><div class='progress-bar' id='pb' role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style='border-radius: 10px;'></div></div><text class='timel'>Остават "+timeleft+" минути</text>";
                                       document.getElementsByClassName("progress-bar")[0].style.width = timeinpercents+"%";
                                            document.getElementsByClassName("timel")[0].innerHTML = "Остават "+timeleft+" минути";

                                      }
                                      
                                    }
                                    if((Math.round(new Date().getTime()/1000)+"000") > endtime){
                                        var index = timestamps.indexOf(JSON.stringify(d));
                                        var name = longnames[index];
                                        var nameind = movienameslist.indexOf(name);
                                        moment.locale('bg');
                                        var proj = (moment(d).format('Do MMM HH:mm'));
                                        var proje = proj.toString();
                                        document.getElementById("nowPlaying"). innerHTML = "<img class='nowplayingposter' src='https://image.tmdb.org/t/p/w342/"+posters[nameind]+"'><text class='nowplayingtitle'>Следваща прожекция</text><div class='nowpl1'><text >"+movienameslist[nameind]+"</text></div><br><text class='timel1'>"+proje+"</text>";
                                      }
                                    }
                          setTimeout(refreshData, x*1000);
                        }
                      refreshData();
                      document.getElementById("lds-ripple").style.display = "none";
}

                            function projections(i){
                                 for(j in longnames){
     if(longnames[j] == movienameslist[i]){
       var date1 = JSON.stringify(timestamps[j]);
       var date = moment(date1, 'x').format('Do MMM </br> HH:mm');
       document.getElementsByClassName("showtimes1")[i].innerHTML += "<div id='"+timestamps[j]+"' onclick='notifyme("+timestamps[j]+")', 'showads();');' style='height: 22vw; width: 22vw; font-size: 10px !important; padding-top: 2vh; border-radius: 10px; margin-left: 0; overflow: hidden; border-left: 3px solid white; border-bottom: 3px solid white; border-right: 3px solid white;'>&#10025;</br>" +date +"</div>";
     }
   }
        //document.getElementsByClassName('posterImg')[i].style.display = "none";
        //document.getElementsByClassName('details1')[i].style.display = "none";
         //document.getElementsByClassName('showtimes1')[i].style.display = "grid";
         for(j in document.getElementsByClassName('posterImg')){
        if (j != i) { 
          document.getElementsByClassName("posterImg")[j].style.display = "block";
          document.getElementsByClassName('details1')[j].style.display = "none";
        document.getElementsByClassName('showtimes1')[j].style.display = "none";
        document.getElementsByClassName('buyticket')[j].innerHTML = "Прожекции";
        document.getElementsByClassName('info')[j].innerHTML = "Информация";
}
  else if(document.getElementsByClassName('buyticket')[j].innerHTML != "Прожекции"){
    document.getElementsByClassName("posterImg")[j].style.display = "block";
          document.getElementsByClassName('details1')[j].style.display = "none";
        document.getElementsByClassName('showtimes1')[j].style.display = "none";
        document.getElementsByClassName('buyticket')[j].innerHTML = "Прожекции";
        document.getElementsByClassName('info')[j].innerHTML = "Информация";
  }
      else{
//        if(( /(android|windows phone)/i.test(navigator.userAgent) )) {
//            if(AdMob) AdMob.showInterstitial();
//            document.addEventListener('onDismissInterstitialAd', function(){
//        	window.plugins.AdMob.createInterstitialView();			//REMOVE THESE 2 LINES IF USING AUTOSHOW
//            window.plugins.AdMob.requestInterstitialAd();			//get the next one ready only after the current one is closed
//        });
//}
        document.getElementsByClassName('posterImg')[i].style.display = "none";
        document.getElementsByClassName('details1')[i].style.display = "none";
        document.getElementsByClassName('showtimes1')[i].style.display = "grid";
        document.getElementsByClassName('buyticket')[i].innerHTML = "\u2190";
        document.getElementsByClassName('info')[j].innerHTML = "Информация";
      }
      }
      
      }
      function info(i){
          if(AdMob) AdMob.showInterstitial();
        for(j in document.getElementsByClassName('posterImg')){
        if (j != i) { 
          document.getElementsByClassName("posterImg")[j].style.display = "block";
          document.getElementsByClassName('details1')[j].style.display = "none";
        document.getElementsByClassName('showtimes1')[j].style.display = "none";
        document.getElementsByClassName('info')[j].innerHTML = "Информация";
        document.getElementsByClassName('buyticket')[j].innerHTML = "Прожекции";
}
else if(document.getElementsByClassName('info')[j].innerHTML != "Информация"){
    document.getElementsByClassName("posterImg")[j].style.display = "block";
          document.getElementsByClassName('details1')[j].style.display = "none";
        document.getElementsByClassName('showtimes1')[j].style.display = "none";
        document.getElementsByClassName('buyticket')[j].innerHTML = "Прожекции";
        document.getElementsByClassName('info')[j].innerHTML = "Информация";
  }
      else{
        document.getElementsByClassName('posterImg')[i].style.display = "none";
        document.getElementsByClassName('details1')[i].style.display = "inline-block";
        document.getElementsByClassName('showtimes1')[i].style.display = "none";
        document.getElementsByClassName('info')[i].innerHTML = "\u2190";
        document.getElementsByClassName('buyticket')[j].innerHTML = "Прожекции";
      }
      }
      }