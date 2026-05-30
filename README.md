# JS Biglietto Treno Form

JavaScript exercise from my web development course.

The assignment asks for a form-based program that calculates the price of a train ticket based on the number of kilometers to travel and the passenger's age.

## Solution

- Open `index.html` in a browser to use the app.
- Form logic is handled in `assets/js/main.js`.
- Calculation helpers are in `assets/js/utils.js`.

## Goal

The app asks the user for:

- the number of kilometers to travel;
- the passenger's age.

It then calculates the final ticket price using these rules:

- base price: `0.21 €` per km;
- `20%` discount for minors;
- `40%` discount for passengers aged 65 or older;
- final price formatted with a maximum of two decimal digits.

## Milestones

1. Build the calculation with two inputs, one button, and console output.
2. Render the recap and final price directly in the page.
3. Add a polished visual style once the logic is working.

## Test Cases

| Km  | Age | Expected price |
| --- | --- | -------------- |
| 100 | 10  | `16,80 €`      |
| 100 | 30  | `21,00 €`      |
| 100 | 70  | `12,60 €`      |

## Technical Notes

- Form values are read with `FormData` and converted with `Number`.
- `novalidate` is used so validation messages can be rendered in the page.
- Validation returns a specific error message or an empty string when the data is valid.
- Ticket rules are stored as constants: price per km, discount percentages, and age thresholds.
- Calculation, discount selection, validation, and price formatting are split into small functions.
- `toLocaleString('it-IT')` formats the final price as an Italian Euro currency value.
- The ticket output uses a placeholder state before the first valid calculation.
- SVG is used only for the ticket shape; the ticket content remains regular HTML.
- CSS custom properties, nesting, and semantic class names are used to keep the styling organized.
