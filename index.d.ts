/**
 * 双缓存实现类
 */
declare class LocalCache {
    constructor(options: LocalCache.Options);

    /**
     * 双缓存查询
     * @param key key
     */
    get(key: string): Promise<any>;

    /**
     * 设置数据到所有缓存
     * @param key key
     * @param data 数据
     */
    set(key: string, data: any): void;
    /**
     * 是否存在key
     * @param key key
     */
    has(key: string);
    /**
     * 删除key
     * @param key key
     */
    del(key: string);
    /**
     * 清除第一层缓存
     */
    reset(): void;
    /**
     * 清除所有缓存
     */
    clear(): void;
}

declare namespace LocalCache {
    /**
     * 参数
     */
    interface Options {
        /**
         * 最大生命周期，毫秒
         */
        maxAge: number;

        update(key: string): any;
    }
}

export = LocalCache;
