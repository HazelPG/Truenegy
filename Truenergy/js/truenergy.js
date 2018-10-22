conectedToFirebase();

database = firebase.database();
var estrato = firebase.database().ref('estrato/');

$('#check').click(function() {
  var radioValue = $("input[name='check']:checked").val();
  if(radioValue=="on"){
      $('.in').attr("disabled", true);
  }else{
    $('.in').attr("disabled", false);
  }
});
function addestrato(){
  $('#myModal').modal("show")
}
