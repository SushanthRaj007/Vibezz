  console.log("Welcome to vibezzz.... ");

  //intialize the variable
  let song_index=0;
  let audio= new Audio('on&on.mp3')
  let Master_Play = document.getElementById('Master_Play')
  let myprogressbar = document.getElementById('myprogressbar')
  let songitems =  Array.from(document.getElementsByClassName('songitem')) 

  let songs=[
    {songname: "on and on", filePath: "song/1.mp3", coverpath: "covers/Cover.jpeg"},
    {songname: "Sky full of stars", filePath: "song/2.mp3", coverpath: "covers/Sky full of stars cover.jpeg"},
    {songname: "Something Just Like this", filePath: "song/3.mp3" , coverpath: "covers/Something cover.jpeg"},
    {songname: "Superhero", filePath: "song/4.mp3", coverpath: "covers/wallpaperflare.com_wallpaper.jpg"},
    {songname: "Wavin' Flag", filePath: "song/5.mp3", coverpath: "covers/flag cover.jpeg"}, 
    ]
    songitems.forEach((element,i) => {
      element.getElementsByTagName("img")[0].src = songs[i].coverpath;
      element.getElementsByClassName("songname")[0].innerText = songs[i].songname;

       
    });
        
//   audio.play();

  //Play and Pause click
  Master_Play.addEventListener('click',()=>{
    if(audio.paused||audio.currentTime<=0){
        audio.play();
        Master_Play.classList.remove('fa-play-circle');
        Master_Play.classList.add('fa-pause-circle');
        }
    else{
        audio.pause();
        Master_Play.classList.remove('fa-pause-circle');
        Master_Play.classList.add('fa-play-circle');
        

    }
    }
    
  )


  //listen to events
  audio.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //seekbar
    progress = parseInt((audio.currentTime/audio.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;
     

   })
   myprogressbar.addEventListener('change',()=>{
    audio.currentTime = myprogressbar.value * audio.duration/100; 
   })

   const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');

    })

   }

   Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=> {
    element.addEventListener('click', (e)=>{
      console.log(e.target);
      songindex = parseInt(e.target.id)
      makeAllPlays()
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audio.src= `song/${songindex+1}.mp3`;
      mastersongname.innerText = songs[songindex].songname;
      audio.currentTime=0;
      audio.play();
      Master_Play.classList.remove('fa-play-circle');
      Master_Play.classList.add('fa-pause-circle');

    })
   })
   document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=4){
      songindex=0;
    }
    else{
      songindex +=1;
    }
    audio.src= `song/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audio.currentTime=0;
    audio.play();
    Master_Play.classList.remove('fa-play-circle');
    Master_Play.classList.add('fa-pause-circle');
  })
  document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
      songindex=0;
    }
    else{
      songindex -=1;
    }
    audio.src= `song/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audio.currentTime=0;
    audio.play();
    Master_Play.classList.remove('fa-play-circle');
    Master_Play.classList.add('fa-pause-circle');
  })
   