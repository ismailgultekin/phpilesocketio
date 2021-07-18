
//const io = require("socket.io")(5000, { wsEngine: "eiows" });
var socket = io.connect('104.248.196.221:5000');
//var socket = io.connect('https://104.248.196.221:5000', {secure: true});

//Socket on ile () eventını dinleyeceğiz
socket.on('messages', function(data){
  console.log("client dinleniyor");
  console.log(data);
  //alert(data.name);

});

//emit ile () veri gonderiyoruz
socket.emit('send-message', {"name":"ismail","surname":"gültekin"});


/*
// socket'te ki posts event'ını dinliyoruz, gelirse konsola yazdırıp bakacağız
socket.on('posts', function (data) {
    console.log(data);
});

// eğer client tarafından socket'in posts event'ına daha göndermek isteseydik yine emit'i kullanacaktık
socket.emit('posts', {
    'id': 5,
    'title': 'Test',
    'content': 'bu bir tesstir',
    'date': '2019-08-11 12:00:00'
});
*/
