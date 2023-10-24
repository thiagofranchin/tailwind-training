interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <button className="w-[200px] rounded-md bg-red-500 p-2 text-white hover:bg-red-600">
      {text}
    </button>
  );
}
