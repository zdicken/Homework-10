Vue.component("comp",{
  props: ["name","codename"],
  data:function() {
    return {
      flipped: false
    }
  },
  template: "<div v-on:click='flip'><p v-bind:class='{toggle:flipped}'>{{name}}</p> <p v-bind:class='{toggle:!flipped}'>{{codename}}</p></div>",
  methods: {
    flip:function() {
        this.flipped=!this.flipped;
      }
    }
})

var app = new Vue({
  el:"#app",
  data:{message:"",
        name:"",
        email:""},
  methods: {
    checkForm: function() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.message = "";
      if(this.name.length < 2) {
       this.message += "The input needs to have at least 2 characters.\n";
     }
      if(!(re.test(this.email.toLowerCase()))) {
        this.message += "The input needs to be a valid email address.\n";
      }
      if(this.message.length <= 0) {
        this.message += "Submitted";
      } else {
        this.message += "Not Submitted";
      }
    }
  },
  watch: {
   name: function() {
     this.checkForm();
   },
    email: function() {
      this.checkForm();
    }
 }
});

var app2 = new Vue({
  el:"#app2",
  data:{
    names:[{name:"Protagonist",codename:"Joker"},
           {name:"Anne",codename:"Panther"},
           {name:"Ryuji",codename:"Skull"}]}
})