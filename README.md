# Missing Components with react-hot-loader

repro:

1. install dependencies
```yarn```

2. run project in two different modes and see the difference:

    - **yarn start**: runs webpack in development mode and react-hot-loader enabled
    - **yarn startNoBug**: runs webpack in production mode and react-hot-loader is not active

as long as react-hot-loader is active the PivotItems are not visible on the page.
