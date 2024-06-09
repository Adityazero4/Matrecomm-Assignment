# SmartDash Admin Suite

## Overview

Welcome to the **SmartDash Admin Suite** project! This admin panel is built using React and Material-UI, featuring a responsive design, theming options, and various modules for effective management.

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
- **Internationalization**: Supports multiple languages using the `i18next` library for seamless user experience across different regions.

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
```

## Deployment

The SmartDash Admin Suite is deployed on Netlify. View the live deployment [here](https://aditya-admin-panel.netlify.app/).

---

This documentation provides a comprehensive guide to the SmartDash Admin Suite, including internationalization using the `i18next` library for a multi-language user experience, and steps to add new translations.
