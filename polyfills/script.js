Object.prototype.myCreate = function (prototype) {
    function Constructor() {
    }

    Constructor.prototype = prototype;
    return new Constructor();
}

Object.prototype.myKeys = function (obj) {
    let props = [];
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            props.push(key)
        }
    }
    return props;
}

Object.prototype.myFreeze = function (obj) {

    Object.preventExtensions(obj);
    for (let key in obj) {
        Object.defineProperty(obj, key, {
            configurable: false,
            writable: false
        })
    }
    
    return obj;
}

Array.prototype.myPush = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
}

Array.prototype.myUnshift = function () {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + arguments.length] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
}

Array.prototype.myPop = function () {
    let last = this[length - 1];
    this.length--;
    return last;
}

Array.prototype.myShift = function () {
    let item = this[0];
    for (let i = 1; i < this.length - 1; i++) {
        this[i - 1] = this[i];
    }
    this.length--;
    return item;
}

Array.prototype.myJoin = function (splitter) {
    let str = '';
    for (let i = 0; i < this.length - 1; i++) {
        str += this[i] + splitter;
    }
    return str;
}

Array.prototype.mySort = function (comparator) {
    if (comparator) {
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = 0; j < this.length - 2; j++) {
                if (comparator(this[j], this[j + 1]) > 0) {
                    let temp = this[j];
                    this[j] = this[j + 1];
                    this[j + 1] = temp;
                    console.log(this);
                }
            }
        }
    } else {
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = 0; j < this.length - 2; j++) {
                if ((this[j] + '') > (this[j + 1] + '')) {
                    let temp = this[j];
                    this[j] = this[j + 1];
                    this[j + 1] = temp;
                }
            }
        }
    }
}

Array.prototype.myReverse = function () {
    let a = this.length % 2 == 0 ? this.length / 2 : this.length.toFixed() - 1;
    for (let i = 0; i < a; i++) {
        let temp = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = temp;
    }
}

Array.prototype.myMap = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this))
    }
    return arr;
}

Array.prototype.myFilter = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            arr.push(this[i]);
        }
    }
    return arr;
}

Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)){
            return false;
        }
    }
    return true;
}

Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            return true;
        }
    }
    return false;
}

Array.prototype.myReduce = function (callback, init) {
    let i = 0;
    let result;
    if(init){
        result = init;
    } else {
        result = this[0];
        i++;
    }
    for (i; i < this.length; i++){
        result = callback(result, this[i], i, this);
    }
    return result;
}



