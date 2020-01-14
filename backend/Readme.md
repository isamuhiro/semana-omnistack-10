# Enviroment

To run the application, simply run `yarn` at the root of your project. Of course, ensure yarn is installed. See https://yarnpkg.com/lang/en/docs/install for more instructions.

If you want to start from the beginning, run the follow command:

```bash
yarn init -y

yarn add express
```

Parameters Types
==================

- Query params: `request.query` (Filters, Ordenation, Pagination)

- Route params: `request.params` (Identify a resource. Eg: `{id: 1}` at /resource/:id)

- Body: `request.body` (mostly used on POST/PUT methods)

