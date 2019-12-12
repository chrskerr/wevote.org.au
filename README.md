# referendums.org.au
## [Outline](https://docs.google.com/presentation/d/1G1rNbbV3SiS3jxFKFflZchSNUA3JXo93JpEiTELCd1s/edit?usp=sharing)

## Basic graphql schema
```
    type Query {
        getProp(prop: String): Prop,
        getProps: [Prop],
        getToken(prop: String!, licence: Int!, surname: String): Token,
        giveToken(token: String!, vote: Boolean!): Confirmation
    },
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
