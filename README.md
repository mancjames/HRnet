# Project #14 - Argent Bank API

This project was designed to recreate a jquery application into React. The original repo can be found [here](https://github.com/OpenClassrooms-Student-Center/P12_Front-end)

I also had to convert one of the current jQuery plugins into a React plugin published on npm. The original jQuery plugin I chose to recreate was the [jquery-modal](https://github.com/kylefox/jquery-modal). For the purposes of this project, I was only required to replicate the UI functionality of the plugin (so for the modal, being able to add your own messages and the modal closing when you click outside of it)

A link to my plugin modal-package-hrnet can be found [here](https://www.npmjs.com/package/modal-package-hrnet)

For the remaining plugins, I used existing React libraries to provide me the same functionality as shown in the prerequisites section below
### Technologies

• [React](https://reactjs.org)


### Prerequisites

• yarn

• [react-table-components](https://www.npmjs.com/package/react-data-table-component)

• [react-table-components-extension](https://www.npmjs.com/package/react-data-table-component-extensions)

• [react-datepicker](https://www.npmjs.com/package/react-datepicker)

• [react-router-dom](https://www.npmjs.com/package/react-router-dom)

• [react-select](https://react-select.com/home)

• [styled-components](https://styled-components.com/)

• [modal-package-hrnet](https://www.npmjs.com/package/modal-package-hrnet)


### 1 - Installation

Clone the repository oin your chosen location using the following command:

```git clone https://github.com/mancjames/HRnet.git```

In your terminal, change directories to your chosen location and use the following to install the required dependencies:

```yarn install```

Once done, you can launch the front-end application on port http://localhost:3000 by running the following command:

```yarn start```

Please note that the application used React Context for it's state management. Therefore, anything you save will be reset if you refresh/leave the browser.