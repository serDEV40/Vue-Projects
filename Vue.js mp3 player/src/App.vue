<style scoped>
  .conts{
    width: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>

<template>
  <div class="card conts border-0">
    <img :src="img_src" class="card-img-top w-100">
    <div class="card-body text-group w-100 bg-dark">
      <div class="text-group">
        <div class="items text-group d-flex align-items-center justify-content-between text-dark">
          <span class="card-text text-light" >
            {{ currentTime }}
          </span>
          <span class="card-text text-light">
            {{ durationTime }}
          </span>
        </div>
        <div class="item">
          <input type="range" class="form-range" :max="maxValue" @input="setPart" v-model="currentValue">
        </div>
        <div class="items text-group text-dark d-flex align-items-center justify-content-between">
            <span class="card-text text-light">{{ name }}</span>
            <span class="card-text text-light">{{ artist }}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="items d-flex align-items-center justify-content-center">
          <button class="btn btn-primary rounded-circle" @click="prevMusic">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1rem" style="margin:0.25rem;fill:#fff;">
              <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"/>
            </svg>
          </button>
          <button class="btn btn-primary rounded-circle mx-3" @click="playStop()">
            <svg v-if="boolean" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="1rem" style="margin:0.25rem;fill:#fff;">
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
            </svg>
            <svg v-else width="1rem" style="margin:0.25rem;fill:#fff;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
            </svg>
          </button>
          <button class="btn btn-primary rounded-circle" @click="nextMusic">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1rem" style="margin:0.25rem;fill:#fff;">
              <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="card-footer w-100 bg-dark">
      <div class="items d-flex align-items-center col-md-12 col-12">
        <div class="items d-flex align-items-center col-9 justify-conetent-between">
          <button class="btn btn-primary" @click="shutVolume">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" v-if="volBool" width="1rem" style="fill:#fff;margin-bottom:0.25rem">
              <path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/>
            </svg>
            <svg width="1rem" fill="#ffff" style="margin:0 0 0.25rem 0;" v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
            </svg>
          </button>
          <input type="range" class="form-range mx-3" @input="slideVolume" v-model="volumeVol">
        </div>
        <div class="items col-md-3 col-3 d-flex align-items-center justify-content-end">
          <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#musicItemList">
            <svg width="1rem" fill="#ffff" style="margin:0 0 0.25rem 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
          </button>
        </div>
      </div>
      <div id="musicItemList" class="collapse">
        <ul class="list-group-flush ps-0">
          <li class="list-group-item justify-content-between my-3 d-flex align-items" 
              v-for="item,init of musicList" @click="choosePlay(item,init)">
            <div class="d-flex w-100 justify-content-between">
              <span class="text text-white">
                {{ item.name }}
              </span>
              <span class="text text-white me-3">
                {{ item.artist }}
              </span>
            </div>
            <div>
              <img :src="item.cover" class="img" width="24">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { musics } from './sounds'
  export default{
    data(){
      return{
        'audio' : new Audio(),
        'currentTime' : "00:00",
        'img_src' : null, 
        'durationTime' : null,
        'currentValue' : null,
        'volumeVol' : 50,
        'volatileVolume' : 50,
        'maxValue' : null,
        'indexNumber' : 0,
        'musicList' : musics,
        'artist' : null,
        'name' : null,
        'volBool' : true,
        'boolean' : true
      }
    },
    
    methods : {
      prevMusic : function(){
        if(this.indexNumber <= 0){
          this.indexNumber = this.musicList.length - 1;
        }else{
          this.indexNumber--;
        }
        this.useSong();
        return(this.indexNumber);
      },
      
      playStop : function(){
        if(this.audio.paused){
          this.audio.play();
        }else{
          this.audio.pause();
        }
        return(this.boolean = !this.boolean);
      },

      nextMusic : function(){
        if(this.indexNumber >= this.musicList.length - 1){
          this.indexNumber = 0;
        }else {
          this.indexNumber++;
        }
        this.useSong();
        return(this.indexNumber);
      },

      useSong(){
        this.audio.src = this.musicList[this.indexNumber].source;
        this.img_src = this.musicList[this.indexNumber].cover;
        this.artist = this.musicList[this.indexNumber].artist;
        this.name = this.musicList[this.indexNumber].name;
      },

      calculateTime : function(){
        let duration = this.audio.duration;
        let current = this.audio.currentTime;
        this.currentValue = current;

        let dm = Math.floor(duration / 60);
        let ds = Math.floor(duration % 60);
        let cm = Math.floor(current / 60);
        let cs = Math.floor(current % 60);

        if(dm < 10){
          dm = "0" + dm;
        } 
        if(ds < 10){
          ds = "0" + ds;
        }
        if(cm < 10){
          cm = "0" + cm;
        }
        if(cs < 10){
          cs = "0" + cs;
        }
        this.currentTime = (cm + ":" + cs);
        this.durationTime = (dm + ":" + ds);
      },

      setPart : function(event){
        this.currentValue = this.audio.currentTime = event.target.value;
      },

      slideVolume(){
        let volume = this.volumeVol / 100;
        this.audio.volume = volume; 
        this.volatileVolume = this.volumeVol;

        if(volume == 0){
          this.volBool = false;
        }else if(volume > 0){
          this.volBool = true;
        }
        return(this.volBool);
      },

      shutVolume(){
        if(this.audio.muted == false){
          this.audio.muted = true;
          this.audio.volume = this.volumeVol = 0;

          if(this.volumeVol == 0){
            this.volBool = !this.volBool;
          }
        }else if(this.audio.muted == true){
          this.audio.muted = false;
          this.audio.volume = this.volatileVolume / 100;
          this.volumeVol = this.volatileVolume;

          if(this.volumeVol > 0){
            this.volBool = !this.volBool;
          }
        }

        return this.volBool;
      },

      choosePlay : function(item,index){
        this.audio.src = item.source;
        this.img_src = item.cover;
        this.artist = item.artist;
        this.name = item.name;
      
        this.indexNumber = index;
      },

      play : function(){
        if(this.audio.onplaying){
          console.log(ture);
        }
      }

    },

    watch : {
      audio : function(){
        let vm = this;
        if(this.audio.played){
          console.log("tre")
        }
      }
    },

    created(){
      let vm = this;
      this.audio.preload = "metadata";
      this.audio.addEventListener('timeupdate',this.calculateTime);
      this.useSong();
      this.audio.onloadedmetadata = function(){
        vm.maxValue = vm.audio.duration;
        vm.calculateTime();
      }
    }

  }
</script>