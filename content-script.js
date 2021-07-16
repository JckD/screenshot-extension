



document.body.innerHTML += '<div><div id="ss" onmousedown="return false" onselectstart="return false">Take a screen shot bitch<div/><button class="xbutton" id=quitSS>x</button><div>'


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
     enabled = message
});

var div = document.getElementById('ss'),x1 = window.width / 4, y1 = window.height / 4, x2 = window.width / 1, y2 = window.height / 1;

div.style.border = '3px dotted #000';

div.style.position = 'absolute';
div.style.zIndex = 1;


 select = false



var quitSS_button = document.getElementById('quitSS');

quitSS_button.onclick = function(){
    
    div.hidden = 1
    select = false
    enabled = false
    x1 = window.width / 4;
    y1 = window.height / 4;
    x2 = window.width / 1;
    y2 = window.height / 1;
   
}

function reCalc() {
    var x3 = Math.min(x1,x2);
    var x4 = Math.max(x1,x2);
    var y3 = Math.min(y1,y2);
    var y4 = Math.max(y1,y2);
    div.style.left = x3 + 'px';
    div.style.top = y3 + 'px';
    div.style.width = x4 - x3 + 'px';
    div.style.height = y4 - y3 + 'px';
}
onmousedown = function(e) {


    if (!select && enabled) {
        document.onselectstart = () => {
            return false; // cancel selection
          };
        div.hidden = 0;
        x1 = e.clientX;
        y1 = e.clientY;
        reCalc();
    }
    document.onselectstart = () => {
        return true; // cancel selection
      };
    
   
};
onmousemove = function(e) {
    document.onselectstart = () => {
        return true; // cancel selection
      };

    if (!select) {
        document.onselectstart = () => {
            return false; // cancel selection
          };
        x2 = e.clientX;
        y2 = e.clientY;
   
        reCalc();
    }
   
    
    
};
onmouseup = function(e) {
    select = true

    if (!select && enabled) {
        div.hidden = 0;
    }
    
  
};

