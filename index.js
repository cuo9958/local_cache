const LRUCache = require("./lib/lru_cache");

class Cache {
    constructor(options) {
        this.opts = options;
        this._cache = new LRUCache({
            maxAge: options.maxAge,
            updateAgeOnGet: true
        });
        this._cacheBak = new LRUCache({
            maxAge: options.maxAge * 10,
            updateAgeOnGet: true
        });
        this.links = new Set();
    }

    async get(key) {
        if (this._cache.has(key)) return this._cache.get(key);
        if (this.links.has(key) && this._cacheBak.has(key)) return this._cacheBak.get(key);
        if (this.opts.update) {
            this.links.add(key);
            const data = await this.opts.update(key);
            this._cache.set(key, data);
            this._cacheBak.set(key, data);
            this.links.delete(key);
            return data;
        }
        return null;
    }

    set(key, data) {
        this._cache.set(key, data);
        this._cacheBak.set(key, data);
    }

    has(key) {
        return this._cache.has(key);
    }

    del(key) {
        this._cache.del(key)
    }
    reset() {
        this._cache.reset();
    }
    clear() {
        this._cache.reset();
        this._cacheBak.reset();
    }
}

module.exports = Cache;
