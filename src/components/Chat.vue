<template lang="html">
  
  
  <div class="chat container">
    <div class = "players">
      <p>MindMelders<p/>

    </div>


    <div class="center">
      <router-link to="/" class="btn green">Return to Home</router-link>
    </div><br>
    <div class="card">
      <div class="card-content">
        <div>

            <!--v-chat is an extra that was installed to allow for autoscrolling to bottom of window-->
          <ul class="messages" v-chat-scroll>
              <!--v-for loops through all the messages retrieved from firestore-->
            <li class="chat-message" v-for="message in messages" :key="message.id">
              <div class="right-bubble" v-if="message.name === name">
                <span class="green-text">{{ message.name }}&nbsp;</span>
                <span class="grey-text text-darken-3">{{ message.content }}</span>
                <!--<span class="grey-text time">{{ message.timestamp }}</span>-->
              </div>
              <div class="left-bubble right-align" v-if="message.name !== name">
                <span class="green-text">{{ message.name }}&nbsp;</span>
                <span class="grey-text text-darken-3">{{ message.content }}</span>
                <!--<span class="grey-text time">{{ message.timestamp }}</span>-->
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-action" id="chatInput" display="block">
        <div class="new-message">
          <form @submit.prevent="addMessage">
            <label for="new-message">New Message from {{ name }} (enter to add):</label>
            <input type="text" name="new-message" v-model="newMessage"/>
            <p class="red-text" v-if="feedback">{{ feedback }}</p>
          </form>
          <button type="button" class="btn green" v-on:click="addMessage">Send</button>
        </div>
      </div>
    </div>

    <div class="center" id="gameReadyButton" display="block">
      <button type="button" class="btn red" v-on:click="readyGame">Press When Ready To Start Game!</button>
    </div><br>

    
    <div class="hidden" id= "gameInput" display="none">
      
        <label >What combines the two?:</label>
        <input type="text" name="game-message"  id= "gameInputField" v-model="gameMessage" />
       
          
    </div>
    

    <div id="countDown" style="font-size:100px;  position: fixed; top: 0%; left: 0%; z-index: 2" >
      <p>{{countDown}}</p>

    </div>


     <div class="hidden" id="resetButton" display="none">
      <button type="button" class="btn red"  v-on:click="resetEverything">Press to go back to chat</button>
    </div><br>


  </div>
</template>

<script>
//chat component instance
//imports firebase "db"
import { db } from '@/main'
import moment from 'moment'
export default {
  name: 'Chat',
  //name is a prop for the home page
  props: ['name'],
  data(){
    return {
      messages: [],
      newMessage: null,
      gameMessage: null,
      feedback: null,
      countDown:"",
      lastResponse:"nope",
      secondToLastResponse: "dude",
      iterations:0,
      gameStarted:0,
      gameWon:0,
      readyCount:0,
      ready:0
    }
  },

  //mounted lifecycle hook?
  mounted() {
    this.getMessage();
    //this.snapshotRetrieveLatest()
    //this.readyCheck();
  },

  created() {
    //this.interval = setInterval(() => this.getMessage(), 5000);
    //this.getMessage();
    //this.snapshotRetrieveLatest()
},
  methods: {
    async getMessageOG () {
        //collects messages stored in firebase and orders them by timestamp
      let snapshot = await db.collection('messages').orderBy('timestamp').get()
      
      snapshot.forEach(doc => {
        let appData = doc.data()
        appData.id = doc.id
        appData.secret = doc.secret
        //passes doc.timestamp into moment() to apply moment.js formatting to each time stamp
        appData.timestamp = moment(doc.timestamp).format('lll')
        this.messages.push(appData)
      })
      //this.messages = messages;

      

      
    },

    async getMessage () {
        //collects messages stored in firebase and orders them by timestamp
      let ref = await db.collection('messages').orderBy('timestamp');
      console.log("recieving a message");
      ref.onSnapshot(snapshot=> {
        snapshot.docChanges().forEach(change => {
          if (change.type = 'added') {
            let doc = change.doc;
            //console.log(doc);
            this.messages.push({
              id: doc.id,
              content:doc.data().content,
              name:doc.data().name,
              timestamp:moment(doc.data().timestamp).format('LTS'),
              secret: doc.data().secret
              
            })
            console.log("added message from firebase to client messages")
            if(this.gameStarted == 0){
              this.readyCheck();
            }
            
            //goes through messages and deletes the duplicates (something in getMessage is causing duplicates (was actually addMessage calling getMessage that was causing the problem))
            //this.messages = Array.from(new Set(this.messages.map(a => a.id)))
            //.map(id => {
            //  return this.messages.find(a => a.id === id)
            //})
            

          }
        })
      })

      
      //this.messages = messages;

      

      
    },



    async addMessage () {
        //checks to make sure there was content entered (this.newMessage will be true if there is content)
      if(this.newMessage){
        await db.collection('messages').add({
          content: this.newMessage,
          name: this.name,
          timestamp: Date.now(),
          //timestamp:db.ServerValue.TIMESTAMP,
          secret:""
        })
        //resets everything to blank once sent
        this.newMessage = null
        this.feedback = null
        //this.getMessage()
      } else {
        this.feedback = "you must enter a message"
      }
    },


    async addGameMessage () {
        //checks to make sure there was content entered (this.newMessage will be true if there is content)
      if(this.gameMessage){
        await db.collection('messages').add({
          content: this.gameMessage,
          name: this.name,
          timestamp: Date.now(),
          //timestamp:db.ServerValue.TIMESTAMP,
          secret:""
        })
        //resets everything to blank once sent
        this.gameMessage = null
        
        //this.getMessage()
      } 
      else {
        await db.collection('messages').add({
          content: "I fucked up",
          name: this.name,
          timestamp: Date.now(),
          //timestamp:db.ServerValue.TIMESTAMP,
          secret:""
        })
      
      }
       console.log("send game answer to firebase")
    },

   




    

    

    setGameAnswer(){
      this.gameMessage =  document.getElementById("gameInputField").value;
      console.log("setting game answer to "+this.gameMessage);

    },

    setLastResponse(){
      this.lastResponse = this.messages.slice(-1)[0].content;
       console.log("setting last response to "+ this.lastResponse);
    },

    setSecondToLastResponse(){
      this.secondToLastResponse = this.messages.slice(-2)[0].content;
       console.log("setting second to last response to "+this.secondToLastResponse);
    },

    checkGameWon(){
      console.log("checking winning condition");
      if((this.lastResponse == this.secondToLastResponse) && (this.lastResponse != "I fucked up")){
        this.gameWon = 1;
    
      }

    },



    game(){
     
      if(this.gameStarted ==1){
        console.log("starting game!!!");
        this.countDown = "Starting Game";
      

        console.log(this.lastResponse);
        console.log(this.secondToLastResponse);
      
        this.gameLoop();
      
        setInterval(this.gameLoop, 11000);

      }
        


      
        

      
      

      
      
      
      
      
      
     




    },


    gameLoop(){
      if(this.gameWon == 0){
      setTimeout(() => this.countDown = "3", 1000);

      setTimeout(() => this.countDown = "2", 2500);

      setTimeout(() => this.countDown = "1", 4000);

      setTimeout(() => this.countDown = "0", 5500);
      
      setTimeout(this.setGameAnswer, 6500);

      setTimeout(this.addGameMessage, 7000);


      setTimeout(this.setLastResponse, 9000);

      setTimeout(this.setSecondToLastResponse, 9000);
      this.iterations = this.iterations+1;

      setTimeout(this.checkGameWon, 9500);


      
      }
      else{
        this.countDown = "YOU WON in "+this.iterations+" attempts!!!";
        document.getElementById("resetButton").style.display = "block";
        document.getElementById("chatInput").style.display = "block";
        document.getElementById("gameInput").style.display = "none";
      }

    },

    async readyGame(){
      await db.collection('messages').add({
          content: " is ready to start the game.",
          name: this.name,
          timestamp: Date.now(),
          secret: "Ready!!!"
        })
        this.ready =1;
        document.getElementById("gameReadyButton").style.display = "none";
        
     

    },
    //not the most efficient way.
    readyCheck(){
      console.log("running ready check")
      if (this.messages.slice(-1)[0].secret == "Ready!!!"){
        this.readyCount = this.readyCount+1;
        console.log(this.readyCount);
      }
      //console.log(this.i);
      if (this.readyCount >1){
        this.gameStarted =1;
        this.setupGame();
      }
      
    },



    setupGame(){
      //either want to repurpose current entry field or hide that one and create a new one
      //entry field for this accepts input on a timer rather than when enter is pressed
      document.getElementById("chatInput").style.display = "none";
      document.getElementById("gameInput").style.display = "block";
      
      document.getElementById("gameInputField").focus();
      this.game();


    },


    resetEverything(){
      this.messages =[];
      this.newMessage= null;
      this.gameMessage= null;
      this.feedback= null;
      this.countDown="";
      this.lastResponse="nope";
      this.secondToLastResponse= "dude";
      this.iterations=0;
      this.gameStarted=0;
      this.gameWon=0;
      this.readyCount=0;
      this.ready=0;
      document.getElementById("chatInput").style.display = "block";
      document.getElementById("gameInput").style.display = "none";
      document.getElementById("chatInput").focus();
      document.getElementById("gameReadyButton").style.display = "block";
      document.getElementById("resetButton").style.display = "none";



    },

    //can't get to work
    async deleteAll(){
      await db.collection('messages').orderBy('timestamp').delete()
    },



     

   

  }
}
</script>

<style>
.container {
  border-radius: 5px;
}
.chat h2{
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 0.8em;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
.chat-message {
  width: 80%;
  min-height: 40px;
}
.chat-message .right-bubble {
  position: relative;
  background: #dcf8c6;
  border-top-left-radius: .4em;
  border-bottom-left-radius: .4em;
  border-bottom-right-radius: .4em;
  padding: 5px 10px 10px;
  margin-bottom: 10px;
  left: 50%;
  width: 70%
}
.chat-message .right-bubble:after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  border: 27px solid transparent;
  border-left-color: #dcf8c6;
  border-right: 0;
  border-top: 0;
  margin-top: -0.5px;
  margin-right: -27px;
}
.chat-message .left-bubble {
  position: relative;
  background: #efefef;
  border-top-right-radius: .4em;
  border-bottom-left-radius: .4em;
  border-bottom-right-radius: .4em;
  padding: 5px 10px 10px;
  margin-bottom: 10px;
  left: 5%;
  width: 70%;
}
.chat-message .left-bubble:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border: 27px solid transparent;
  border-right-color: #efefef;
  border-left: 0;
  border-top: 0;
  margin-top: -0.5px;
  margin-left: -27px;
}


.hidden {

display:none;


}
</style>