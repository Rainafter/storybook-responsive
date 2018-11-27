### Dev Build
- Run `npm i` to install all node_modules

- Run `npm run start` to start dev, then open browser with `localhost:3000`


### Production Build
- Run `npm run build:clean` would clean everything in build folder
- Run `npm run build` would start production build that includes all js and assets and auto generate all sizes of icons from one icon in assets

### Testing  ( Story Book Preview )
- Run `npm run storybook` to start storybook Preview
- Storybook includes interactive step testing in `Interactive steps` and static component state render in `State/TextInput/Button`
- Storybook setting is in .storybook. Here contains customized webpack for storybook and addons for mocking the action.
- Stories are where testing cases are created


### Font
- Font is in local assets folder, global-styles contains the definition and would output to hash font for production build
