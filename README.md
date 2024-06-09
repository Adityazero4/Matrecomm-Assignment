# SmartDash Admin Suite

## Overview

Welcome to the **SmartDash Admin Suite** project! This admin panel is built using React and Material-UI, featuring a responsive design, theming options, and various modules for effective management. Additionally, the project now includes internationalization (i18n) support, allowing users to switch between multiple languages seamlessly.

## Features

- **Responsive Design**: The dashboard adapts to different screen sizes for a seamless user experience.
- **Theming**: Choose between light and dark themes using the `@mui/material` library.
- **Navigation**: Sidebar navigation for quick access to dashboard, team, contacts, invoices, forms, calendar, FAQ, and charts.
- **Dashboard**: Centralized view for key metrics and system overview.
- **Team Management**: Manage team members efficiently.
- **Contacts**: Organize and view contact information.
- **Invoices**: Track financial transactions with a dedicated section.
- **Form Handling**: Interact with and submit forms for data processing.
- **Calendar Integration**: Utilizes FullCalendar library for event and schedule management.
- **Data Visualization**: Visualize data with bar charts, line charts, pie charts, and geographical maps using the `@nivo` library.
- **Internationalization (i18n)**: Supports multiple languages using the `i18next` library for a seamless user experience across different regions.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm start
   ```

4. **View the Dashboard:**
   Open your browser and go to `http://localhost:3000`.

## Theming

- Toggle between light and dark themes to suit your preferences.

## Routing

- Navigation between sections is handled by `react-router-dom` for smooth transitions.

## Chart Libraries

- Data visualization is powered by the `@nivo` library, offering diverse chart components.

## Internationalization

To support multiple languages in the SmartDash Admin Suite, the `i18next` library was utilized along with `i18next-browser-languagedetector` and `i18next-http-backend`.

### Installation

First, the necessary packages were installed:

```bash
npm install i18next i18next-browser-languagedetector i18next-http-backend react-i18next
```

### Configuration

An `i18n.js` file was created outside of the `src` folder with the following configuration to ensure the entire app supports internationalization:

```javascript
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

### Translation Files

In the `public` folder, a directory named `locales` was created containing translation files for different languages (e.g., English, Hindi, Spanish, German, French). Each file holds translations for respective languages.

### Adding New Translations

To add a new translation:

1. **Create a New Translation File**: In the `public/locales` directory, create a new directory for the language (e.g., `it` for Italian). Inside this directory, create a `translation.json` file.

2. **Add Translations**: Populate the `translation.json` file with key-value pairs for the translations.

   ```json
   {
     "welcome_message": "Benvenuto nel SmartDash Admin Suite",
     "dashboard": "Pannello di Controllo",
     // Add other translations here
   }
   ```

3. **Update i18next Configuration**: The `i18next` configuration in `i18n.js` does not need changes for adding new languages if they are in the `locales` directory, as it dynamically loads translations.

### Using Translations

In each component or page where translation is needed, the `useTranslation` hook from `react-i18next` was used:

```javascript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome_message')}</h1>
    </div>
  );
};
```

### Switching Between Languages

A dropdown menu has been added to the navbar to switch between languages. Here’s how to implement it:

1. **Add Language Options to Navbar**: In the navbar component, include a dropdown menu with language options.

   ```javascript
   import React from "react";
   import MenuItem from "@mui/material/MenuItem";
   import Menu from "@mui/material/Menu";
   import { IconButton } from "@mui/material";
   import LanguageIcon from "@mui/icons-material/Language";
   import { useTranslation } from "react-i18next";

   const LanguageDropdown = () => {
     const options = ["English", "Spanish", "French", "German", "Hindi"];

     const { t, i18n } = useTranslation();

     const [anchorEl, setAnchorEl] = React.useState(null);
     const [selectedIndex, setSelectedIndex] = React.useState(0);
     const open = Boolean(anchorEl);

     const handleClickListItem = (event) => {
       setAnchorEl(event.currentTarget);
     };

     const handleMenuItemClick = (event, index) => {
       i18n.changeLanguage(options[index].slice(0, 2).toLowerCase());
       setSelectedIndex(index);
       setAnchorEl(null);
     };

     const handleClose = () => {
       setAnchorEl(null);
     };

     return (
       <div>
         <IconButton
           id="lock-button"
           aria-controls="lock-menu"
           aria-haspopup="true"
           color="inherit"
           sx={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             gap: 1,
             fontSize: "1rem",
           }}
           onClick={handleClickListItem}
         >
           <LanguageIcon />
           {t(`languages.${options[selectedIndex].toLowerCase()}`)}
         </IconButton>
         <Menu
           id="lock-menu"
           anchorEl={anchorEl}
           open={open}
           onClose={handleClose}
           MenuListProps={{
             "aria-labelledby": "lock-button",
             role: "listbox",
           }}
         >
           {options.map((option, index) => (
             <MenuItem
               key={option}
               selected={index === selectedIndex}
               onClick={(event) => handleMenuItemClick(event, index)}
             >
               {t(`languages.${option.toLowerCase()}`)}
             </MenuItem>
           ))}
         </Menu>
       </div>
     );
   };

   export default LanguageDropdown;
   ```

2. **Styling and Placement**: Adjust the styling and placement of the dropdown in the navbar to fit your design.

### Example Directory Structure

```
public/
  locales/
    en/
      translation.json
    hi/
      translation.json
    es/
      translation.json
    de/
      translation.json
    fr/
      translation.json
    it/
      translation.json  // Newly added translation for Italian
src/
  components/
  pages/
  ...
  i18n.js
  LanguageDropdown.js  // Navbar with language switcher
```

## Deployment

The SmartDash Admin Suite is deployed on Vercel. View the live deployment [here](https://matrecomm-assignment.vercel.app/).

## Verification

The internationalization support was verified through the following steps:

1. **Language Dropdown**: Verified that the language dropdown in the navbar switches the language of the interface correctly.

 -**English**
  <img width="1268" alt="image" src="https://github.com/Adityazero4/Matrecomm-Assignment/assets/98283712/1ac15d42-369a-4736-8631- 06b966a1e694">

 -**Language Selector Dropdown**
  <img width="1280" alt="image" src="https://github.com/Adityazero4/Matrecomm-Assignment/assets/98283712/6143b84d-a5c1-41ac-8514- f4db7e769821">

 -**Hindi**
  <img width="1280" alt="image" src="https://github.com/Adityazero4/Matrecomm-Assignment/assets/98283712/dc99c3a5-b018-4851-b6ac-945d799f4663">

 -**Spanish**
  <img width="1279" alt="image" src="https://github.com/Adityazero4/Matrecomm-Assignment/assets/98283712/be68bf29-3a27-41e2-b22c-07e91549249c">

 -**French**
  <img width="1280" alt="image" src="https://github.com/Adityazero4/Matrecomm-Assignment/assets/98283712/590e888b-00dd-478d-9246-9be4dece6671">

 -**German**
  <img width="1280" alt="image" src="https://github.com/Adityazero4/Matrecomm-Assignment/assets/98283712/4e9792d0-5861-4970-9ab2-42d9ac01d8d3">

2. **Translation Files**: Confirmed that translations for English, Hindi, Spanish, German, French, and Italian are loaded correctly.

 -**Translation Files loading Successfully**
 <img width="1280" alt="image" src="https://github.com/Adityazero4/Matrecomm-Assignment/assets/98283712/523c3665-c21b-423a-b6de-715685a956fd">

3. **Component Translation**: Ensured that components using the `useTranslation` hook display the correct text based on the selected language.

4. **Fallback Language**: Tested the fallback language functionality by setting an unsupported language and verifying that English is displayed.

## Summary

Task: Implement Internationalization (i18n) Support for the Frontend

The task involved integrating internationalization (i18n) support into the SmartDash Admin Suite using the `i18next` library. The implementation included configuring `i18next`, adding translation files, using the `useTranslation` hook in components, and adding a language switcher dropdown in the navbar. The solution was verified to ensure that the app's interface could seamlessly switch between multiple languages, providing a localized user experience. The project is now fully equipped to handle international users, enhancing its usability and accessibility.
