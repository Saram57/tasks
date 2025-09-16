var _a, _b, _c, _d, _e, _f;
(function x() {
    var m = 5;
    console.log(m);
});
// let arr: number | boolean=[1,2];
// function calc(x: number, y: number): number {
//   return x + y;
// }
// console.log(calc(20, 60)); 
// function filter(arr: string[]): string[] {
//   return arr.splice(0, 2);
// }
// تعريف object عادي
var person = {
    name: "ali",
    age: 20,
    say: function () {
        console.log("object");
    }
};
person.say(); // object
// مصفوفة من الـ users
var users = [
    {
        name: "sara",
        age: 22,
        company: "GLB",
        say: function (msg) { return console.log("Hello " + msg); }
    },
    {
        name: "ahmed",
        age: 25,
        company: "OpenAI"
    },
    {
        name: "laila",
        age: 30,
        company: "Google",
        say: function (msg) { return console.log("Welcome " + msg); }
    }
];
// استخدام البيانات
console.log(users[0].name); // sara
console.log(users[0].company); // GLB
// استدعاء الدالة say لو موجودة
(_b = (_a = users[0]).say) === null || _b === void 0 ? void 0 : _b.call(_a, "ali"); // Hello ali
(_d = (_c = users[1]).say) === null || _d === void 0 ? void 0 : _d.call(_c, "ali"); // مش هيطبع حاجة لأنه مش معرف say
(_f = (_e = users[2]).say) === null || _f === void 0 ? void 0 : _f.call(_e, "ali"); // Welcome ali
