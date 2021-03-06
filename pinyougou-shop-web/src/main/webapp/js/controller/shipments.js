var app = new Vue({
    el: "#app",
    data: {
        pages: 15,
        pageNo: 1,
        list: [],
        entity: {},
        ids: [],
        searchEntity: {id: ''},
        status: ['','', '', '未发货','已发货']
    },
    methods: {

        findOrderCount: function () {
            axios.get('/order/findAll.shtml').then(function (response) {
                console.log(response);
                //注意：this 在axios中就不再是 vue实例了。
                app.list = response.data;

            }).catch(function (error) {

            })
        },
        updateStatus: function (status) {
            axios.post('/order/updateStatus.shtml?status=' + status, this.ids).then(
                function (response) {
                    if (response.data.success) {
                        app.ids = [];
                        app.findOrderCount();
                    }
                }
            )
        }

    },


    //钩子函数 初始化了事件和
    created: function () {
        this.findOrderCount();

    }

})
