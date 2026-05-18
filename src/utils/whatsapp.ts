type WhatsAppOptions = {
  number: string;
  message: string;
};

export function buildWhatsAppUrl({ number, message }: WhatsAppOptions) {
  const cleanNumber = number.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);

  if (!cleanNumber) {
    return "#contacto";
  }

  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}
