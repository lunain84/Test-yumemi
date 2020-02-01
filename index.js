var checkboxs = new Vue({
    el: '#checkboxs',
    data () {
      return {
        info: null
      }
    },
    mounted () {
        axios
        .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "NNdLp1xdZ5PtMo0DwVYkZqUYHAHH7meoecAtqi6X"
            },
           data: {}
       })
       .then(response => (this.info = response));
    }
  })


