type Props = {
  text: string;
  setText: (text: string) => void;
  fontSize: number;
};

export default function WebPad({ text, setText, fontSize }: Props) {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{
        flex: 1,
        fontSize: `${fontSize}px`,
        padding: "12px",
        border: "none",
        outline: "none",
        resize: "none",
        background: "transparent",
        color: "inherit",
      }}
    />
  );
}