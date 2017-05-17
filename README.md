# Super basic ReactNative boilerplate

This project is a super basic starter kit using Expo, Redux, redux-thunk and react-navigation.

## Pre-commit hooks - ESLint
You are going to notice that you won't be able to commit without fixing every eslint error.
With pre-commit this configures eslint as a hook that runs before each commit.

If you don't want to get this pre-commit hook you can remove `pre-commit` from your
`devDependencies`, the configuration from the root of the package.json object and don't
forget that the scripts `eslint` and `add-all` will be no longer necessary either.

Also, feel free to change `.eslintrc` with your own code style.

## What's inside?
If you run the app you're going to see 2 buttons, one of them adds one to the counter above it
(showing that redux is actually working) and the other one gets you to a second page
(showing how to use react navigation)

## Screenshots
![screen shot 2017-05-17 at 4 19 47 pm](https://cloud.githubusercontent.com/assets/16837996/26175123/00dd32ee-3b28-11e7-95cb-b4b9286c34cf.png)
![screen shot 2017-05-17 at 4 20 26 pm](https://cloud.githubusercontent.com/assets/16837996/26175122/00dcaf90-3b28-11e7-82a0-a52ab6063d5b.png)
