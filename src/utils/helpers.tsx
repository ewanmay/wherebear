export function createDateString(date: Date) {
  let dateHours: string = date.getHours().toString();
  let dateMinutes: string = date.getMinutes().toString();
  let timeOfDay: string = 'AM';
  if (date.getHours() > 12) {
    dateHours = (date.getHours() - 12).toString();
    timeOfDay = 'PM';
  }
  if (dateMinutes.length === 1) {
    dateMinutes = '0' + dateMinutes;
  }
  return dateHours + ':' + dateMinutes + timeOfDay;
}
