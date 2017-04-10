var chars = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789',' !"#$%&()*+,-./:;?@[]^_`{|~}'],
    base,
    vCount,
    pass= '',
    letter,
    passLength,
    p = document.getElementById('passw');

document.getElementById('minus').addEventListener('click', function(){
    event.preventDefault();
    changeAmount(event.target.id);
});

document.getElementById('plus').addEventListener('click', function(){
    event.preventDefault();
    changeAmount(event.target.id);
});

function changeAmount(){
  if(event.target.id == "minus"){
    if(document.getElementById('length').value >= 3){
      document.getElementById('length').value--;
    }
    else{
      alert('Podaj długość hasła w przedziale od 2 do 64 znaków');
    }
  }
  else{
    if(document.getElementById('length').value <= 63){
      document.getElementById('length').value++;
    }
    else{
      alert('Podaj długość hasła w przedziale od 2 do 64 znaków');
    }
  }
}

document.getElementById('gen').addEventListener('click', function(event){
  passLength = document.getElementById('length').value;
  event.preventDefault();
  validLength();
});

function validLength(){
  if(passLength <= 1 || passLength >= 65){
    alert('Podaj długość hasła w przedziale od 2 do 64 znaków');
  }
  else {
    merge();
  }
}


function merge(){
  base = "";
  vCount = 0;
  var checkedValue = null;
  var inputElements = document.getElementsByClassName('chars');
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
         base = base.concat(chars[parseInt(inputElements[i].value)]);
         vCount++;
      }
    }
  if(vCount==0){
    alert('Podaj co najmniej jedną składową hasła');
  }
  else{
    getRandom(base);
  }
}

function getRandom(base){
  pass = "";
  for(i=1; i<=passLength; i++){
    var pos = Math.floor((Math.random() * base.length));
    letter = base.charAt(pos);
    joinLetters(letter);
  }
  p.innerHTML = pass;
  console.log(pass);
}

function joinLetters(letter){
  pass = pass.concat(letter);
}
