export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const convertTimestamp = (time: string) => {
  const converted = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    year: "numeric",
    month: "short",
  }).format(new Date(time));
  return converted;
};
