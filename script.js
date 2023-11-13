console.log("welcome to spotify");
let songIndex=0;

let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterkey=document.getElementsByClassName('songitemplay');
let myprogressBar = document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songItem'));
let mastername=document.getElementById('masterName');



let songs = [
    {songName: "salam-e-is",filePath: "song/1.mp3",coverPath: "covers/1.jpeg"},
    {songName: "svscbhcb",filePath: "song/2.mp3",coverPath: "covers/2.jpeg"},
    {songName: "hhcss",filePath: "song/3.mp3",coverPath: "covers/3.jpeg"},
    {songName: "jdvhdvsv",filePath: "song/4.mp3",coverPath: "covers/4.jpeg"},
    {songName: "djfbdbfhsdb",filePath: "song/5.mp3",coverPath: "covers/5.jpeg"},
    {songName: "kdghsagfh",filePath: "song/6.mp3",coverPath: "covers/6.jpeg"},
    {songName: "dhgfhdkf",filePath: "song/7.mp3",coverPath: "covers/7.jpeg"},
    {songName: "heueyfcscsc",filePath: "song/3.mp3",coverPath: "covers/8.jpeg"},
    {songName: "hgchadgfhc",filePath: "song/1.mp3",coverPath: "covers/9.jpeg"},
    {songName: "salam-e-ishq",filePath: "song/5.mp3",coverPath: "covers/10.jpeg"}
]    

songitem.forEach((element,i)=>{
    //console.log(element,i);
    //   element.getElementsByClassName('songlistplay')[0].src=songs[i].filePath;
      element.getElementsByTagName('img')[0].src=songs[i].coverPath;
      element.getElementsByClassName('songname')[0].innerText = src=songs[i].songName;
      //element.getElementsByClassName('timestamp')[0].innerText=;
      
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
    
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressBar.value=progress;
})

myprogressBar.addEventListener('click',()=>{
    audioElement.currentTime=myprogressBar.value * audioElement.duration/100;
})

const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}











Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            makeallplay();
            songIndex=parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src=`song/${songIndex+1}.mp3`;
            mastername.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            
           
            gif.style.opacity=1;
        }
        else{
        
                audioElement.pause();
                e.target.classList.remove('fa-pause-circle');
                e.target.classList.add('fa-play-circle');
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                
                gif.style.opacity=0;
                
            }

        
        
    })
})

 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>7){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    
    audioElement.src=`song/${songIndex+1}.mp3`;
     audioElement.currentTime=0;
     audioElement.play();
     mastername.innerText=songs[songIndex].songName;
     masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    // makeallplay();
   




 })

 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;

    mastername.innerText=songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     
     masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
   makeallplay();


 })