function getRawPhoneNumber(phone: string) {
  return phone
    .replace(" ", "")
    .replace("+", "")
    .replace("-", "")
    .replace("(", "")
    .replace(")", "");
}

export const FormatHelper = {
  getRawPhoneNumber,
};
