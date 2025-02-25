async function sendToTelegram(message) {
  const config = {
    token: "7605026131:AAEgUshWyiiHLv9LYv81dO9dn-WWh49Nd3w",
    chatId: "1826888747",
  };

  const url = `https://api.telegram.org/bot${config.token}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: config.chatId,
      text: message,
    }),
  });

  return response.ok;
}
