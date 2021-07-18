//===========Http Sunucu oluşturma başlangıcı==============
const http     = require('http');//http sunucusu
const server   = http.createServer((req, res) => {
    res.end('hey!');
});

server.listen(5000);//5000 portuna http server oluşturuyorup dinliyoruz
//=============Http Sunucu Bitişi===========================

const socketio = require('socket.io');//socket oluşturma
const io = socketio.listen(server);//server socket ile bağlantı oluşturacağımız yeri portu belirtiyoruz.

//Socket bağlantımızı kuruyoruz. connection ile kullanıcının girdiğini yakalıyoruz.
io.sockets.on('connection', (socket) => {
  console.log('sockete birileri bağlandı.');

  /*
  // new-post eventını dinliyoruz, backendden buraya data göndereceğiz
  socket.on('new-post', function(data){

      // bir data gelirse bunu client'a gönderiyoruz
      io.emit('posts', data);

  });
  */

  //data send-message eventına veri geldiğinde messages eventına datayı emit ile göndersin
  socket.on('send-message', function(data){
      console.log("Server Dinliyor: ");
      console.log(data);

      //emit ile client gelen datayı gonderiyoruz
      io.emit('messages', data);
  });

  // socket bağlantısı sonlandığında burası çalışır
  socket.on('disconnect', function(){
      console.log('birileri geldi ve gitti.');
  });
});
