export function setNewOffsetCard(selectedCard, mouseMoveDirection) {
  if (!selectedCard?.current) return;

  const offsetX = selectedCard.current.offsetLeft - mouseMoveDirection.x;
  const offsetY = selectedCard.current.offsetTop - mouseMoveDirection.y;

  return {
    x: offsetX < 0 ? 0 : offsetX,
    y: offsetY < 0 ? 0 : offsetY,
  };
}

export function autoHeight(textareaRef) {
  if (!textareaRef.current) return;

  textareaRef.current.style.height = "auto";
  textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
}

export const bodyParser = (value) => {
  try {
    return JSON.parse(value);
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return value;
  }
};
