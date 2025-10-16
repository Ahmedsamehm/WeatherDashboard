import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const DropdownMenuDialog = ({ unit, setUnit }: { unit: "C" | "F"; setUnit: (unit: "C" | "F") => void }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-2">{unit}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Choose Unit</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setUnit("C")}>Celsius (°C)</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setUnit("F")}>Fahrenheit (°F)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuDialog;
