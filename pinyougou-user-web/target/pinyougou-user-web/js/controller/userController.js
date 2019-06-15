var app = new Vue({
    el: "#app",
    data: {
<<<<<<< HEAD
        pages: 15,
        pageNo: 1,
        list: [],
        entity: {},
        smsCode: '',
        ids: [],
        searchEntity: {}
=======
        pages:15,
        pageNo:1,
        list:[],
        entity:{},
        smsCode:'',
        ids:[],
        searchEntity:{}
>>>>>>> remotes/origin/master
    },
    methods: {

        //该方法注册用户的
<<<<<<< HEAD
        add: function () {
            axios.post('/user/add/' + this.smsCode + '.shtml', this.entity).then(function (response) {
                console.log(response);
                if (response.data.success) {
=======
        add:function () {
            axios.post('/user/add/'+this.smsCode+'.shtml',this.entity).then(function (response) {
                console.log(response);
                if(response.data.success){
>>>>>>> remotes/origin/master
                    alert("要去登录");
                }
            }).catch(function (error) {
                console.log("1231312131321");
            });
        },
        //目的就是 当点击 发短信验证码的时候 调用
<<<<<<< HEAD
        sendSmsCode: function () {
            axios.get('/user/sendSmsCode.shtml?phone=' + this.entity.phone).then(
=======
        sendSmsCode:function () {
            axios.get('/user/sendSmsCode.shtml?phone='+this.entity.phone).then(
>>>>>>> remotes/origin/master
                function (response) {
                    alert(response.message);
                }
            )
<<<<<<< HEAD
        },
        //查出redis中对应用户的关注列表list[]
        searchList: function () {
            axios.get('/user/searchList.shtml').then(
                function (response) {
                    console.log(response)
                    app.list = response.data;
                }
            )
        },
        //添加购物车
        addGoodsToCartList:function (itemId,num) {
            axios.get('http://localhost:9107/cart/addGoodsToCartList.shtml',{
                params:{
                    itemId:itemId,
                    num:num
                },
                //客户端在AJax的时候携带cookie到服务器。
                withCredentials:true
            }).then(
                function (response) {//result
                    if(response.data.success){
                        window.location.href="http://localhost:9107/cart.html";
                    }else{
                        alert("失败");
                    }
                }
            )
=======
>>>>>>> remotes/origin/master
        }
    },
    //钩子函数 初始化了事件和
    created: function () {
<<<<<<< HEAD
        this.searchList();
=======
      
>>>>>>> remotes/origin/master


    }

})
