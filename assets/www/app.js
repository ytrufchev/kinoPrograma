var city_names = ['sofia', 'plovdiv', 'varna', 'burgas', 'stara_zagora'];
var city_numbers = [1, 2, 3, 4, 14];
var sofia = ['Arena Deluxe Bulgaria Mall', 'Arena The Mall', 'Cine Grand Park Center', 'Cine Grand Sofia Ring Mall', 'Cinema City Paradise', 'Cinema City Paradise 4DX', 'Cinema City Sofia', 'Cinema City Sofia IMAX', 'Euro Cinema', 'G-8 Cinema', 'Kino Cabana', 'Влайкова', 'Гьоте-институт', 'Дом на киното', 'Институт Сервантес', 'Кино Култура', 'Кинозала НАТФИЗ', 'Люмиер Лидл', 'Одеон филмотечно кино', 'Фабрика за градско изкуство', 'Френски институт'];
var sofia_numbers = [6983, 5981, 3681, 7459, 7037, 7905, 3664, 3663, 6088, 7447, 7999, 3, 655, 29, 4015, 8016, 7439, 10, 18, 7432, 285];
var plovdiv = ['Arena Mall Markovo Tepe', 'Arena Mall Markovo Tepe IMAX', 'Cinema City Plovdiv', 'Cinema City Plovdiv 4DX', 'Eccoplexx', 'Faces', 'Lucky Дом на киното', 'Лятно кино Орфей'];
var plovdiv_numbers = [7831, 7832, 5548, 8002, 1816, 1859, 5599, 1857];
var varna = ['Arena Grand Mall Varna', 'Arena Grand Mall Varna IMAX', 'Arena Mall Varna', 'Cinema City Varna', 'Cinema City Varna 4DX', 'Лятно кино Варна', 'Театър Българан'];
var varna_numbers = [6048, 7676, 4968, 8067, 8068, 7751, 1397];
var burgas = ['Cinema City', 'Up Outdoor Cinema', 'Кинополис Ахтопол', 'Кинополис Приморско', 'Лятно кино Китен', 'Лятно кино Поморие', 'Лятно кино Царево', 'Общинско кино АБ'];
var burgas_numbers = [6753, 6847, 7904, 7995, 459, 456, 460, 6719];
var stara_zagora = ['Arena Park Mall', 'Cinema City', 'Лятно кино Септември', 'Различният Комсомол'];
var stara_zagora_numbers = [5344, 6263, 7364, 2067];
function selectCity(id){
  if(id == 'city'){
  var e = document.getElementById("city");
  var strUser = e.options[e.selectedIndex].value;
  localStorage.setItem("city", strUser);
  document.getElementById('city').innerHTML = '';
  document.getElementById('city').id = "cinema";
  document.getElementById('cinema').innerHTML = "<option value='salob'>Кино салон</option></br>";
  for(i in window[strUser]){
    
    document.getElementById('cinema').innerHTML += "<option value="+window[strUser][i]+">"+window[strUser][i]+"</option></br>";

  }
  }
  else if(id == "cinema"){
    var city = localStorage.getItem("city");
    var e = document.getElementById("cinema");
  var strUser = e.options[e.selectedIndex].text;
  var t = window[city].indexOf(strUser);
  var cinemaId = window[city+"_numbers"][t];
  localStorage.setItem("cinema", cinemaId);
  location.href="cinema.html";
  document.getElementById("lds-ripple").style.display = "block";
  }
 }