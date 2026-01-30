// Map of Roman numerals to their decimal values
const romanToDecimalMap: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// Valid subtractive pairs
const validSubtractivePairs: { [key: string]: string[] } = {
  I: ["V", "X"],
  X: ["L", "C"],
  C: ["D", "M"],
};

// Add a new rule for maximum numeral repetitions
const maxRepetitions: { [key: string]: number } = {
  I: 3,
  X: 3,
  C: 3,
  M: 3,
  V: 1,
  L: 1,
  D: 1,
};

/**
 * Validate Roman numeral input string.
 * Returns null if valid, or a descriptive error string if invalid.
 */
export function validateRoman(roman: string): string | null {
  if (!roman || roman.length === 0) return "Syöttökenttä ei voi olla tyhjä.";

  roman = roman.toUpperCase();

  // 1. Check valid characters only
//   console.log("mikä on syöttö", roman.split("").filter((ch) => !(ch in romanToDecimalMap)));
  
  const invalidChars = roman.split("").filter((ch) => !(ch in romanToDecimalMap));
  if (invalidChars.length > 0) {
    return `Virheellisiä merkkejä syötteessä: ${invalidChars.join(", ")}.`;
  }

  if (roman.startsWith("MMMM")) {
    return "Roomalaiset numerot yli 3999 eivät ole tuettuja.";
  }

  // 2. Check repetitions rules
  for (let i = 0; i < roman.length; i++) {
    const current = roman[i];
    const maxRepeat = maxRepetitions[current] || 0;

    // Check for too many consecutive repetitions
    let repeatCount = 1;
    while (i + 1 < roman.length && roman[i] === roman[i + 1]) {
      repeatCount++;
      i++;
    }
    if (repeatCount > maxRepeat) {
      return `Liian monta toistoa '${current}'. Maksimi on ${maxRepeat} toistoa sanalle '${current}'.`;
    }
  }

// 3. Check subtractive pairs and numeral order
for (let i = 0; i < roman.length - 1; i++) {
    const current = roman[i];
    const next = roman[i + 1];
    const currentValue = romanToDecimalMap[current];
    const nextValue = romanToDecimalMap[next];
  
    if (currentValue < nextValue) {
      // Validate subtractive pair
      if (
        !(current in validSubtractivePairs) ||
        !validSubtractivePairs[current].includes(next)
      ) {
        return `Virheellinen vähennyspari: '${current}${next}'.`;
      }
  
      // ❗ NEW RULE: subtractive symbol must not repeat before
      if (i > 0 && roman[i - 1] === current) {
        return `Virheellinen muoto: '${current}' ei voi toistua ennen vähennysparia '${current}${next}'.`;
      }
  
      // ❗ NEW RULE: previous numeral must not be smaller or equal
      if (
        i > 0 &&
        romanToDecimalMap[roman[i - 1]] < currentValue
      ) {
        return `Virheellinen numerojärjestys ennen vähennysparia '${current}${next}'.`;
      }
  
      // Prevent repeated subtractive pairs like IXIX
      if (i + 2 < roman.length && roman[i + 2] === current) {
        return `Toistettu vähennyslaskupari: '${current}${next}'.`;
      }
    }
  }
  

  // 4. Check for invalid numeral order
  for (let i = 0; i < roman.length - 1; i++) {
    const currentValue = romanToDecimalMap[roman[i]];
    const nextValue = romanToDecimalMap[roman[i + 1]];

    if (currentValue < nextValue) {
      // Ensure subtractive pairs are not followed by larger numerals
      if (i + 2 < roman.length && romanToDecimalMap[roman[i + 2]] > nextValue) {
        return `Virheellinen numerojärjestys vähennyslaskuparin jälkeen '${roman[i]}${roman[i + 1]}'.`;
      }
    }
  }

  return null;
}

/**
 * Convert a valid Roman numeral string to decimal number.
 * Throws an error if the input is invalid.
 */
export function romanToDecimal(roman: string): number {
  const validationError = validateRoman(roman);
  if (validationError) {
    throw new Error(`Virheellinen roomalainen numero: ${validationError}`);
  }

  let total = 0;
  let prevValue = 0;
  roman = roman.toUpperCase();

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanToDecimalMap[roman[i]];
    if (currentValue < prevValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
    prevValue = currentValue;
  }
  return total;
}


  
// Test cases
// const tests = [
//     "XXC", "IIV", "CCD", "IL", "IVIV",
//     "IIII", "VV", "MCMC", "XC", "CDL", "CCCLIX"
//   ];
  
//   tests.forEach(t => {
//     const err = validateRoman(t);
//     console.log(t, err ? `❌ ${err}` : "✅ valid");
//   });
  