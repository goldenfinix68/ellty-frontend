import "./CustomButton.css";

interface Props {
  title: string;
  onClick?: () => void;
}

export function CustomButton({ title, onClick = () => {} }: Props) {
  return (
    <button className="custom-button-container" onClick={onClick}>
      {title}
    </button>
  );
}
