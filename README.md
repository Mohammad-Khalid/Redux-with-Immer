A demo react app that uses Immer and Redux together.

In this demo app we are using [Immer curried producer](https://immerjs.github.io/immer/curried-produce) as reducer where the first argument is a recipe function and second is default value(initial state that generally passes to the reducer)

## Run App

In the project directory, you can run following commands:

```bash
npm i
npm start
```

## Useful Resource

Followings are the resource from which I dabbled about ImmerJS

- [immerjs.github.io](https://immerjs.github.io/immer/) is an official website
- [Youtube link for immer](https://www.youtube.com/watch?v=kgCjXjJkZ-Y&list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3&index=13) explain basic usage of Immer with react redux
- [Medium Post - Simplify Redux reducers with Immer](https://adostes.medium.com/simplify-redux-reducers-with-immer-9a3638229d45)
- [Github issue discussion for passing second parameter to curried producer as reducer default state](https://github.com/immerjs/immer/issues/111)
