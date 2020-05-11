### V1.3.0

###### 2019-11-07

#### New
- Added Material-UI Container component to each view to replace custom styling
- Added IE11 support, can be removed from `src/index.js` to reduce bundle size
- Added component pages
- Updated code style to match with Airbnb style
- Added RTL support
- Added dependencies
  - `eslint-config-airbnb`
  - `eslint-config-prettier`
  - `eslint-plugin-import`
  - `eslint-plugin-jsx-a11y`
  - `eslint-plugin-react-hooks`
- Updated depdendecy versions
  - `@date-io/core` ^1.3.6 -> ^1.3.11
  - `@date-io/moment` ^1.3.6 -> ^1.3.11
  - `@fullcalendar/core` ^4.2.0 -> ^4.3.1
  - `@fullcalendar/daygrid` ^4.2.0 -> ^4.3.0
  - `@fullcalendar/interaction` ^4.2.0 -> ^4.3.0
  - `@fullcalendar/list` ^4.2.0 -> ^4.3.0
  - `@fullcalendar/react` ^4.2.0 -> ^4.3.0
  - `@fullcalendar/timegrid` ^4.2.0 -> ^4.3.0
  - `@fullcalendar/timeline` ^4.2.0 -> ^4.3.0
  - `@material-ui/core` ^4.2.0 -> ^4.6.0
  - `@material-ui/icons` ^4.2.1 -> ^4.5.1
  - `@material-ui/lab` ^4.0.0-alpha.19 -> ^4.0.0-alpha.31
  - `@material-ui/pickers` ^3.1.2 -> ^3.2.7
  - `@material-ui/styles` ^4.2.0 -> ^4.6.0
  - `chartjs` ^2.7.3 -> ^2.9.2
  - `draft-js` ^0.11.0 -> ^0.11.2
  - `history` ^4.7.2 -> ^4.10.1
  - `js-cookie` ^2.2.0 -> ^2.2.1
  - `node-sass` ^4.11.0 -> ^4.13.0
  - `prop-types` ^15.7.1 -> ^15.7.2
  - `react` ^16.8.6 -> ^16.11.0
  - `react-beautiful-dnd` ^11.0.4 -> ^11.0.5
  - `react-big-calendar` ^0.22.0 -> ^0.22.1
  - `react-chartjs-2` ^2.7.4 -> ^2.8.0
  - `react-dom` ^16.8.6 -> ^16.11.0
  - `react-dropzone` ^10.1.5 -> ^10.1.10
  - `react-markdown` ^4.0.8 -> ^4.2.2
  - `react-paginate` ^6.3.0 -> ^6.3.2
  - `react-redux` ^7.1.0 -> ^7.1.3
  - `react-router` ^5.0.1 -> ^5.1.2
  - `react-router-config` ^5.0.1 -> ^5.1.1
  - `react-router-dom` ^5.0.1 -> ^5.1.2
  - `react-scripts` ^3.0.1 -> ^3.2.0
  - `uuid` ^3.3.2 -> ^3.3.3
  - `eslint` ^5.16.0 -> ^6.6.0
  - `eslint-plugin-prettier` ^3.0.1 -> ^3.1.1
  - `eslint-plugin-react` ^7.12.4 -> ^7.16.0
  - `prettier` ^1.17.1 -> ^1.19.1

### Fix

- Fixed a bug for Edge & Safari where users couldn't scroll properly

#### Breaking changes

- As we mentioned, we updated code style so you'll note some changes
- Updated the layouts to fix scroll issues
- Removed deep folder nesting to keep a clearer structure
- Replaced custom `useReact` hook with `useLocation`, `useHistory` and `useParams` from `react-router`
- With `react-scripts@^3.2.0` we are now able to use `'.'` as `baseUrl` and we updated the imports to avoid confusion

---

### V1.2.0

###### 2019-08-07

#### New

- Replaced the Routing System from `1.1.0` version with an easier solution to avoid complexity
- Created 3 individual layouts for `Error`, `Auth` and `Dashboard` pages
- Added `axios` and `axios-mock-adapter` modules to simulate server calls for fetch requests
- Renamed few components
- Updated `Calendar` page code
- Updated `Chat` page code
- Updated `Error` page code
- Moved all lib mixins to `mixins` folder
- Moved `helpers` files to `utils` folder
- Removed `data.js` files
- Removed unused helpers
- Removed unused utils

#### Fix

- Fixed navigation expand issue

---

### V1.1.1

###### 2019-08-01

#### Fix

- Temporary remove PerfectScrollBar to fix Navbar and content scroll issues

---

### V1.1.0

###### 2019-07-31

#### New

- Implemented Code Splitting to lazy load views
- Implemented Layout System based on Route settings
- Implemented Routing System
- Implemented Route Authorization Guard based on authenticated user role and route settings
- Updated Presentation Page
- Created Changelog Page
- Created Development Documentation Pages
- Added PrismJS library and created CodeBlock component
- Added Redux library and configured some components using it as state manager
- Added design Figma source file
- Updated dependencies

#### Fix

- Fixed scroll bugs
- The layouts were similary so we kept one Layout only that can be configured dynamically

#### Breaking changes

- Replaced `underscore` with `lodash`
- Changed the Layout logic
- Renamed few components
- Updated folder structure, grouped all views in the same folder

---

### V1.0.0

###### 2019-07-20

Initial release
