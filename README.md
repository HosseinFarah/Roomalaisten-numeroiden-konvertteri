# Roman Numeral Converter

This is a React + TypeScript application built with Vite. The application allows users to convert Roman numerals to their decimal (integer) equivalents. It includes validation for Roman numeral rules and provides user-friendly error messages.

## Features

- **Roman Numeral Validation**: Ensures the input adheres to Roman numeral rules.
- **Conversion to Decimal**: Converts valid Roman numerals to their decimal equivalents.
- **Error Handling**: Displays descriptive error messages for invalid inputs.
- **User Interface**:
  - Input field for Roman numerals.
  - Button to trigger the conversion.
  - Real-time feedback with success or error messages.
- **Styling**: Uses Bootstrap for responsive design and React Toastify for notifications.
- **Localization**: Messages and labels are in Finnish.

## Technologies Used

- **React**: Frontend framework.
- **TypeScript**: For type safety.
- **Vite**: Build tool for fast development.
- **Bootstrap**: For styling and layout.
- **React Toastify**: For toast notifications.

## How to Run

1. Clone the repository:
   ```bash
   git clone git@github.com:HosseinFarah/Roomalaisten-numeroiden-konvertteri.git
   cd my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

## File Structure

- **src/App.tsx**: Main application component.
- **src/romanConverter.ts**: Contains the logic for Roman numeral validation and conversion.
- **src/assets/**: Contains static assets like images.
- **src/App.css**: Custom styles for the application.

## Validation Rules

1. Only valid Roman numeral characters are allowed: `I, V, X, L, C, D, M`.
2. Maximum repetitions:
   - `I, X, C, M`: Up to 3 times.
   - `V, L, D`: Only once.
3. Valid subtractive pairs:
   - `I` before `V` or `X`.
   - `X` before `L` or `C`.
   - `C` before `D` or `M`.
4. Roman numerals above 3999 are not supported.

## Example Inputs

- Valid: `X`, `IX`, `MCMXCIV`, `CCCLIX`.
- Invalid: `IIII`, `VV`, `IL`, `XXC`.

## Author

Developed by Hossein Farahkordmahaleh.
