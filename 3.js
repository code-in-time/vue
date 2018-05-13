https://www.youtube.com/watch?v=N198LSY_jTw&index=2&list=PL55RiY5tL51p-YU-Uw90qQH419BM4Iz07


<div id="app">
  {{title}}
  <button v-on:click="title='yo'">
    change title
  </button>
  <button v-on:click="changeTitle">
  change title again
  </button>
  <input type="text" v-on:input="cssClass = $event.target.value"/>
  <span v-bind:class="cssClass">{{cssClass}}</span>
</div>


new Vue({
  el: "#app",
  data: {
		title: 'hello',
    cssClass : ''
  },
  methods: {
  	changeTitle(){ this.title="hello"}
  }
});
