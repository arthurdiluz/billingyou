type Currency = "USD" | "BRL" | undefined;

/**
 * Formats a number in a currency
 * @param value Raw number
 * @param currency Currency the number will be formatted
 * @returns Number formatted in a curreny
 */

function NumberToCurrency(value: number, currency: Currency = "USD"): string {
  const language: string = currency === "USD" ? "en-US" : "pt-BR";
  return Intl.NumberFormat(language, {
    style: "currency",
    currency,
  }).format(value);
}

/**
 * Converts currency value in a raw value
 * @param usd Currency value
 * @returns Raw number
 */

function usdToNumber(usd: string): Number {
  return Number(usd.replace(/\,/, "").replace("$", ""));
}

/**
 * Converts currency value in a raw value
 * @param brl Currency value
 * @returns Raw number
 */
function brlToNumber(brl: string): Number {
  return Number(brl.replace(/\./, "").replace(/\,/, ".").replace("R$", ""));
}

export const CurrencyHelper = {
  NumberToCurrency,
  usdToNumber,
  brlToNumber,
};
