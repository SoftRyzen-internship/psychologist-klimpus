const baseUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TG_BOT_TOKEN}/`;

export const sendMessage = async (message: string): Promise<void> => {
  const url = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_TG_CHAT_ID}&text=${message}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to send message');
  }
};
