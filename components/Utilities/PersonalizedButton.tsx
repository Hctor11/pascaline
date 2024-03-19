interface buttonProps {
  content: string;
  eventCallback: React.MouseEventHandler<HTMLButtonElement>;
}

const PersonalizedButton = ({ content, eventCallback }: buttonProps) => {
  return (
    <>
      <button
        className="p-2 px-4 bg-zinc-700 text-white hover:bg-black rounded-md my-2"
        onClick={eventCallback}
      >
        {content}
      </button>
    </>
  );
};

export default PersonalizedButton;
