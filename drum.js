const audiotom = new Audio('tom.wav');
const audiosnare = new Audio('snare.wav');
const audioopenhat = new Audio('openhat.wav');
const audioclap = new Audio('clap.wav');
const audiokick = new Audio('kick.wav');
const audiohihat = new Audio('hihat.wav');
const audiotink = new Audio('tink.wav');
const audioboom = new Audio('boom.wav');

const tom = document.getElementById('tom').addEventListener('click',()=>{
  audiotom.play();
})
const snare = document.getElementById('snare').addEventListener('click',()=>{
    audiosnare.play();
  })
  const openhat = document.getElementById('openhat').addEventListener('click',()=>{
    audioopenhat.play();
  })
  const clap = document.getElementById('clap').addEventListener('click',()=>{
    audioclap.play();
  })
  const kick = document.getElementById('kick').addEventListener('click',()=>{
    audiokick.play();
  })
  const hihat = document.getElementById('hihat').addEventListener('click',()=>{
    audiohihat.play();
  })
  const tink = document.getElementById('tink').addEventListener('click',()=>{
    audiotink.play();
  })
  const boom = document.getElementById('boom').addEventListener('click',()=>{
    audioboom.play();
  })