const DEFAULT_MESSAGE =
  "Oi! Vim pelo site da OBS e quero automatizar meu negócio.";

function getNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
}

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  const number = getNumber();
  const text = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${text}`;
}

export function getContactEmail(): string {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
}
