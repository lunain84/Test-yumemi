var checkboxs = new Vue({
    el: '#checkboxs',
    data: {
        datalists:[],
    },
    mounted () {
        axios
        .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "NNdLp1xdZ5PtMo0DwVYkZqUYHAHH7meoecAtqi6X"
            },
            data: {},
       })
            .then(response => {
                this.datalists = response.data.result;
            })
            .catch(error => {
                console.log(error);
            });
    },
  })


