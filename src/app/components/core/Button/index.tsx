interface ButtonProps {
  text?: string;
  urlButton?: string;
}

export function Button({ text, urlButton }: ButtonProps) {
  return (
    <a
      className="flex items-center justify-center rounded-md bg-red-500 p-2 text-center text-white hover:bg-red-600 sm:max-w-[150px] md:max-w-[200px]"
      href={urlButton}
    >
      {text}
    </a>
  );
}
