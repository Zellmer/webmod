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

function fancyAnswerFormat(){
  $(".room-answer-field:not(.z3f):not(:disabled)").each(function(index,value){
    if(value.placeholder != 'No answer needed'){
      let place = value.placeholder.split('Answer format: ')[1]
      console.log(value.placeholder)
      console.log(getFormat(value.placeholder))
      value.placeholder = 'Answer format: '+getFormat(place)+'   ('+place+')'
      $(value).addClass('z3f')
    }
  })
  
}

function getFormat(value){
    let f = ''
    let ret = []
    let last = {b:'',c:0}
    for(v of value){
        if(v == last.b){
            last.c ++
        }else{
            if(last.c != 0){
                ret.push({b:last.b,c:last.c})
            }
            last.b = v
            last.c = 1
        }
    }
    ret.push({b:last.b,c:last.c})
    for(r of ret){
        if(r.c == 1){
          f += r.b
        }else if(r.c <= 4){
          for(let i = 0;i<r.c;i++){
            f += r.b
          }
        }else{
            f += r.b+'{'+r.c+'}'
        }
    }
    return f
}

function jload(){
  FancyTask()
  FancyPractice()
  FancyRooms()
  fancyAnswerFormat()
}

CSSClass()//nur einmal laden!
jload()

 

setInterval(function() {

    // alle 3 Sekunden ausführen

    jload()

}, 3000);
