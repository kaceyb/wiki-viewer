
var app = new Vue({
  el: '#app',
  data: {
    search: '',
    results: '',
    pages: '',
    link: 'https://en.wikipedia.org/?curid='
  },
  watch: {
    search: function() {
      if(this.search.length != null) {
        this.getJson();
      }
    }
  },
  methods: {
    getJson: _.debounce(function() {
      var vm = this;
      vm.results = 'Searching...';

        axios.get(vm.search)
          .then(function(response) {
            vm.results = '';
            vm.pages = response.data.query.pages;
            console.log(vm.results);
          })
          .catch(function(error) {
            vm.results = 'Invalid!';
          })

    }, 500)

  }
});
