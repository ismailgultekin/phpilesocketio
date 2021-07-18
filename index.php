<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Php Socket.io Kullanımı</title>
    <script src="socket.io.js"></script>
    <?php
    //echo __DIR__ ;

    require __DIR__ . '/vendor/autoload.php';

    use ElephantIO\Client;
    use ElephantIO\Engine\SocketIO\Version2X;

    //Php ile socket.io veri gonderdiyoruz
    $client = new Client(new Version2X('http://104.248.196.221:5000'));
    $client->initialize();
    $client->emit('send-message', [
      'name' => 'Akın',
      'surname' => 'Gültekin',
      'date' => date('Y-m-d'),
      'id' => 2
    ]);
    $client->close();

    ?>
  </head>
  <body style="text-align:center;padding-top:100px">
    <h1>Php ile socket.io kullanımı</h1>
    <p>Bunun için elephant.io adında bir paket kullanacağız.</p>





  </body>
</html>
