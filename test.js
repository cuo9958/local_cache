const LocalCache = require("./index");

function update() {
    console.log("更新一次");
    return Date.now();
}

const cache = new LocalCache({
    maxAge: 1000,
    update
});

cache.set("test", 123);

cache.get("test").then(res => {
    console.log(res);
});

setTimeout(() => {
    cache.get("test").then(res => {
        console.log(res);
    });
}, 3000);
