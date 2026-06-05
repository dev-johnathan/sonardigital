const timeZone = 'America/Sao_Paulo';

const longDateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone,
});

const longDateTimeFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZone,
});

const shortDateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone,
});

export function formatDate(value) {
  return longDateFormatter.format(new Date(value));
}

export function formatDateTime(value) {
  return longDateTimeFormatter.format(new Date(value));
}

export function formatCompactDate(value) {
  return shortDateFormatter.format(new Date(value));
}
