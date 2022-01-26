var app = new Vue({
  el: "#app",
  data: {
    toDoList: [
      {
        text: 'xxx',
        id: '1'
      },
      {
        text: 'tes',
        id: '4'
      },
      {
        text: 'ff',
        id: '5'
      }
    ],
    newword: "",
    cont: "",
    formToDo: {
      id: null,
      text: "",

    },
  },

  methods: {

    // this.toDoList.length({
    saveToDo() {
      if (!!this.formToDo.id) {
        /*
          https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
        */
        const toDoIndex = this.toDoList.findIndex(
          (toDo) => toDo.id === this.formToDo.id
        );

        this.toDoList[toDoIndex].text = this.formToDo.text;

        this.cleanFormToDo();
      } else {
        this.addToDo();

      }
    },

    addToDo() {
      this.toDoList.push({
        text: this.formToDo.text,
        id: this.toDoList + 1,

      });
      this.cleanFormToDo();

    },

    editToDoButtonClick(toDo) {
      this.formToDo.text = toDo.text;
      this.formToDo.id = toDo.id;
    },

    remove(index) {
      this.toDoList.splice(index, 1);
    },

    removeall() {
      this.toDoList = [];
    },

    cleanFormToDo() {
      this.formToDo.text = "";
      this.formToDo.id = null;
    },
  },
});
