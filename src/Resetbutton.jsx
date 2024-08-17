import { ResetIcon } from "@radix-ui/react-icons";

export default function Resetbutton({ setCount }) {
  const handleClick = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={handleClick} className='reset-btn'>
        <ResetIcon className='reset-btn-icon' />
      </button>
    </div>
  );
}
