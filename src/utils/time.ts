import dayjs from 'dayjs';

export const calculateDuration = (start: Date, end: Date | null) => {
  if (!end) return '0:00';

  const duration = dayjs(end).diff(dayjs(start), 'minutes');
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}:${minutes.toString().padStart(2, '0')}`;
};

export const calculateDurationHourMinutes = (start: Date, end: Date | null) => {
  if (!end) return '0:00';

  const totalSeconds = dayjs(end).diff(dayjs(start), 'seconds');
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
