export const chatTime = (today) => {
  const hours = today.getHours();
  const minutes = today.getMinutes();

  return `${hours}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = (today) => {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return `${year}-${month}-${date}`;
};
