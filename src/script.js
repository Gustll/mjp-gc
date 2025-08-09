import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation JSON files
import en from "./locales/en.json";
import si from "./locales/si.json";

// Initialize i18next with language detection and fallback language set to 'sl'
i18next
  .use(LanguageDetector) // Detect language from browser settings or user preferences
  .init(
    {
      fallbackLng: "si", // Default to Slovenian if no language is detected
      resources: {
        en: {
          translation: en,
        },
        si: {
          translation: si,
        },
      },
      interpolation: {
        escapeValue: false, // Not needed for HTML
      },
    },
    () => {
      // After i18next initialization, translate the page
      translatePage();
      // Ensure language selector is updated with the stored language on page load
      updateLanguageSelector(i18next.language);
    }
  );

// Function to replace the placeholders with translations
function translatePage() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = i18next.t(key); // Replace with translation
  });
}

// Event listener for language switch
document.getElementById("language-select").addEventListener("change", (e) => {
  const lang = e.target.value; // Get selected language from dropdown
  i18next.changeLanguage(lang, () => {
    translatePage(); // Update page content after language change
    // Store the selected language in localStorage
    localStorage.setItem("language", lang);
  });
});

// Update the language selector based on the stored language
function updateLanguageSelector(language) {
  const languageSelect = document.getElementById("language-select");
  languageSelect.value = language; // Set the value of the dropdown to the current language

  // Sync language with localStorage if available
  const storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    i18next.changeLanguage(storedLanguage, () => {
      translatePage(); // Update content based on stored language
    });
  }
}

// Check if there's a saved language in localStorage
const savedLanguage = localStorage.getItem("language");
if (savedLanguage) {
  i18next.changeLanguage(savedLanguage, () => {
    translatePage(); // Update the page language based on the stored language
    updateLanguageSelector(savedLanguage); // Update the language selector
  });
}
