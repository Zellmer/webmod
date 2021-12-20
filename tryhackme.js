// Here You can type your custom JavaScript...
function CSSClass(){//nur einmal laden!
  $("head").append('<style type="text/css"></style>');
  var new_stylesheet = $("head").children(':last');
  let css = '.greenBorder{color:var(--hacker-green);border-left:5px solid var(--hacker-green);border-right:5px solid var(--hacker-green)}';
  css += '.redBorder{border-left:5px solid var(--cool-red);border-right:5px solid var(--cool-red);opacity:1!important}';
  css += '.bg-danger{background-color:var(--cool-red)!important;}';
  new_stylesheet.html(css);
}
function FancyTask(){
  $("div .card[id^=task]").removeClass('card')
  $(".hacker-green").closest('[id^=task]').children().css('margin-bottom','0px').addClass('greenBorder').removeClass('redBorder')
  $(".red").closest('[id^=task]').children().addClass('redBorder')
}

function jload(){
  FancyTask()
}

CSSClass()//nur einmal laden!
jload()

 

setInterval(function() {

    // alle 3 Sekunden ausführen

    jload()

}, 3000);
