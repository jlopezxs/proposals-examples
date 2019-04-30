const obj = {
    num: 2,
    objFunc(num = 1) {
        console.log(this.num * num);
    }
};

function func(num = 1) {
    console.log(this.num * num);
}


const funcWithObjBind = obj::func
// is equivalent to:
// func.bind(obj)
funcWithObjBind(1);

const objFuncObjBind = ::obj.objFunc
// is equivalent to:
// obj.objFunc.bind(obj)
objFuncObjBind(2);

obj::func(3)
// is equivalent to:
// func.call(obj, value)