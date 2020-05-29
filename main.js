function getAllPagamenti(){
  $.ajax({
    url: 'getAllPagamenti.php',
    method: 'GET',
    success: function(data){
      i=1;
      for (var payment of data) {
        $('#list').append('<tr><td>' + i + '</td><td>' + payment + '</td></tr>')
        i++;
      }
    },
    error: function(err){

    }
  })
}

function init(){
  getAllPagamenti();
}

$(document).ready(init);
