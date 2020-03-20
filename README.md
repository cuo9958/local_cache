# 双缓存 nodejs 本地缓存

> 利用双缓存的优势接管本地缓存。并发情况下避免同时刷新数据的尴尬。

## 使用方式

### 初始化

参数`maxAge`,缓存的存活时间，单位是毫秒。

参数`update`,本地缓存失效之后的更新方法。

```javascript
function update() {
    console.log("更新一次");
    return Date.now();
}
const cache = new LocalCache({
    maxAge: 1000,
    update
});
```

### 获取值

获取使用的是 Promise 方式，需要处理调用方式。

```javascript
cache.get("test").then(res => {
    console.log(res);
});
```

### 设置值

设置值，参数固定是string，值没有限制。可以提前设置值，避免首次启动的卡顿。

```javascript
cache.set("test", 123);
```
