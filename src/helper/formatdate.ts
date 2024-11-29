export class DateHelper {
  static formatDate(date: string | null | undefined): string {
    if (!date) return '';

    try {
      const dateObject = new Date(date);

      const day = dateObject.getDate().toString().padStart(2, '0');
      const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
      const year = dateObject.getFullYear();

      return `${day}/${month}/${year}`;
    } catch {
      return '';
    }
  }

  static formatDateTime(date: string | null | undefined): string {
    if (!date) return '';

    try {
      const dateObject = new Date(date);

      const day = dateObject.getDate().toString().padStart(2, '0');
      const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
      const year = dateObject.getFullYear();

      const hours = dateObject.getHours().toString().padStart(2, '0');
      const minutes = dateObject.getMinutes().toString().padStart(2, '0');

      return `${day}/${month}/${year} ${hours}:${minutes}`;
    } catch {
      return '';
    }
  }
}
