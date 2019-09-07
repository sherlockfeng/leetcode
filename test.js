
var obj = {
    value: 5,
    d: {
        value: 888,
        printThis: function() {
            console.log(this);
          }
    }

};
obj.d.printThis()