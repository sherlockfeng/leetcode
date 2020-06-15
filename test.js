Function.prototype.myBind = function (that, ...arg) {
    if (typeof this !== 'function') {
        return;
    }
    const fn = this;
    const finalFun = function (...args) {
        if (this instanceof finalFun) {
            return fn.apply(this, [...arg, ...args]);
        }
        return fn.apply(that, [...arg, ...args]);
    };
    return finalFun;
};

function foo(name) {
    this.name = name;
}

const obj = {};

// 上下文 功能  done
const bar = foo.myBind(obj);
// const bar = foo.myBind(obj);
bar('jack');
console.log(obj.name); // 'jack'

// // 参数 功能   done
const tar = foo.myBind(obj, 'rose');
tar();
console.log(obj.name); // 'rose'
// new 功能   error
const alice = new bar('alice');
console.log(obj.name); // alice   obj name should be 'jack'
console.log(alice.name); // undefined, alice name should be 'alice'
