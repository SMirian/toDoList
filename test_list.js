var app = new Vue({
    el: '#app',
    data: {
       arraywords: [],
       newword: ''
    },
 
   
    methods:{
      save(){
      this.arraywords.push({
        add: this.newword
      })
         
      },
      edit(index){
        this.arrayword[index].estado = true

        // console.log("edit",index)
      },
    
      remove(index){
      this.arraywords.splice(index,1)
       },

      removeall(index){
        this.arraywords.splice(index)
         }
    }
  })