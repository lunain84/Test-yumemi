const prefData = new Vue({
    el: "#checkBoxes",
    data: {
        prefdata: [],
        selected: [],
        trendData: [],
        prefTrend: [],
        data: [],
    },
    mounted() {
        axios
            .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": "**************************************"
                },
                data: {},
            })
            .then(response => {
                this.prefdata = response.data.result;
            })
            .catch(error => {
                console.log(error);
            });

        for (var i = 1; i < 48; i++) {
            axios
                .get("https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=" + String(i), {
                    headers: {
                        "Content-Type": "application/json",
                        "X-API-KEY": "**************************************"
                    },
                    data: {},
                })
                .then(response => {
                    this.trendData.push(response.data.result.data[0].data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    
    methods: {
        chreateChat: function () {
            const data = []
            for (var i = 0; i < this.selected.length; i++) {
                const prefTrend = []
                prefTrend.push(this.selected[i].prefName);
                for (var j = 0; j < 18; j++){
                    prefTrend.push(this.trendData[this.selected[i].prefCode - 1][j].value);
                }
                data.push(prefTrend)
            }

            var x_label = [1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025, 2030, 2035, 2040, 2045];
            c3.generate({
                bindto: "#chart",
                data: {
                  columns: data
                },
                axis: {
                    x: {
                        label: '年度',
                        tick: {
                            format: function (d) {
                                return x_label[d];
                            }
                        }
                    },
                    y: {
                        label: '人口数'
                    }
                }
            });
        }  
    },
});
