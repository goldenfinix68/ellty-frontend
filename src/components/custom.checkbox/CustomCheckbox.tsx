import "./CustomCheckbox.css";

interface Props {
  title: string;
  checked: boolean;
  setChecked: (name: string, checked: boolean) => void;
}

export function CustomCheckbox({ title, checked, setChecked }: Props) {
  return (
    <div className="custom-checkbox-container">
      <label htmlFor={title}>{title}</label>
      <input
        type="checkbox"
        className="custom-checkbox"
        name={title}
        checked={checked}
        onChange={(e) => setChecked(e.target.name, e.target.checked)}
      />
    </div>
  );
}
