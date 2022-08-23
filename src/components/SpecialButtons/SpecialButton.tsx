type Props = {
  children: string;
};

const SpecialButton = ({ children }: Props) => {
  const onClick = () => alert("Clicked on React button!");

  return <button onClick={onClick}>{children}</button>;
};

export default SpecialButton;
