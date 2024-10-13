const TextArea = ({ bodyTextareaRef, onInputHandler, body, textColor }) => {
  return (
    <textarea
      ref={bodyTextareaRef}
      onInput={() => {
        onInputHandler();
      }}
      style={{color: textColor}}
      defaultValue={body}
    ></textarea>
  );
};

export default TextArea;
