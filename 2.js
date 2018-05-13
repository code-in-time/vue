https://www.youtube.com/watch?v=8gkT_yWvP3c&list=PL55RiY5tL51p-YU-Uw90qQH419BM4Iz07&index=1


<div id="app">
  {{title}}
  <button v-on:click="title='yo'">
    change title
  </button>
  <button v-on:click="changeTitle">
  change title again
  </button>
</div>


new Vue({
  el: "#app",
  data: {
		title: 'hello'
  },
  methods: {
  	changeTitle(){ this.title="hello"}
  }
});
