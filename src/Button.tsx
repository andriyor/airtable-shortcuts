export type ButtonProps = {
  title: string;
  baseTable: string;
  color?: string;
  payload?: Record<string, string>;
};

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
  "Content-Type": "application/json",
};

export const Button = ({ action }: { action: ButtonProps }) => {
  const handleClick = () => {
    fetch(`https://api.airtable.com/v0/${action.baseTable}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ fields: { date: new Date(), ...action.payload } }),
    });
  };

  return (
    <button
      className="flex justify-center rounded-md p-7"
      style={{ backgroundColor: action.color }}
      onClick={handleClick}
    >
      {action.title}
    </button>
  );
};
