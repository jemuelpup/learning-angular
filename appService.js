

app.service('stringLib', function() {
    this.count = function (x) {
       return x + x.length;
    }
});