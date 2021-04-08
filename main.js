var app = new Vue({
    el: "#app",
    data: {
      message: "Hello World Vue!",
      counter: 0
    }
  });

  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
  });

  var app3 = new Vue({
    el: '#app3',
    data: {
      seen: true,
    }
  });

  new Vue({
    el: '#demo',
    data: {
      show: true
    }
  });

  const app4 = new Vue({
    el: '#app4',
    data: {
      items: [
        {text: 'Vue'},
        {text: 'Javascript'},
        {text: '.NET'}
      ]
    }
  });

  var app5 = new Vue({
    el: '#app5',
    data:{
      message: 'Mensagem 1'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('');
      }
    },
  });

  var app6 = new Vue({
    el: '#app6',
    data: {
      message: ''
    }
  })