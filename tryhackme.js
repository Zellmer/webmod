// Here You can type your custom JavaScript...
function CSSClass(){//nur einmal laden!
  $("head").append('<style type="text/css"></style>');
  var new_stylesheet = $("head").children(':last');
  let css = '.greenBorder{color:var(--hacker-green);border-left:5px solid var(--hacker-green);border-right:5px solid var(--hacker-green);margin-bottom:0px}';
  css += '.redBorder{border-left:5px solid var(--cool-red);border-right:5px solid var(--cool-red);opacity:1!important;margin-bottom:0px}';
  css += '.bg-danger{background-color:var(--cool-red)!important;}';
  //css += '.room-completed{background-color:#fff;padding:0.1em;border-radius:0.2em;}';
  css += '.room-F{background-color:navajowhite;opacity: 0.8;}';
  
  new_stylesheet.html(css);
}
function FancyTask(){
  $("div .card[id^=task]").removeClass('card')
  $(".hacker-green").closest('[id^=task]').children().addClass('greenBorder').removeClass('redBorder')
  $(".red").closest('[id^=task]').children().addClass('redBorder')
}
function FancyPractice(){
  $(".path-tasks-grid").addClass('redBorder')
  $(".hacker-green").closest('.path-tasks-grid').addClass('greenBorder').removeClass('redBorder')
}
function FancyRooms(){
  $(".room-completed").closest('.room-main').addClass('room-F')
}

function jload(){
  FancyTask()
  FancyPractice()
  FancyRooms()
}

CSSClass()//nur einmal laden!
jload()

 

setInterval(function() {

    // alle 3 Sekunden ausführen

    jload()

}, 3000);
