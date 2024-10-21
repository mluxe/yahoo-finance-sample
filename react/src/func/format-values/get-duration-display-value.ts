export function getDurationDisplayValue(duration: number): string {
  if (duration < 0) {
    return '00:00:00';
  }

  if (duration < 5*1000){
    return 'now';
  }

  if (duration < 60*1000) {
    return `${duration} seconds`;
  }

  const days = Math.floor(duration / 86400000);
  const hours = Math.floor(duration / 3600000);
  const minutes = Math.floor((duration % 3600000) / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);

  const pad = (num: number) => String(num).padStart(2, '0');

  if (days > 0) {
    return `${days}d ${pad(hours % 24)}:${pad(minutes)}:${pad(seconds)}`;
  }

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
