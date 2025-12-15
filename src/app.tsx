import actionsData from "../actions.json";

import { Button, type ButtonProps } from "./Button.tsx";

export function App() {
  const actions: ButtonProps[] = actionsData;

  return (
    <div class="w-90">
      <div className="grid grid-cols-3 gap-4">
        {actions.map((action) => (
          <Button action={action} />
        ))}
      </div>
    </div>
  );
}
