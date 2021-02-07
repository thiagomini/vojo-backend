export class MapHandler {
    static toObject = (map): object => {
       const object = {};
       if (!map) return object;

       map.forEach((value, key) => { object[key] = value });
       return object;
    }
}