import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  setSearchQuery: (query: string) => void;
}

const Header = ({ setSearchQuery }: HeaderProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchQuery(inputValue.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // Optional: Clear search if input is empty
    if (e.target.value.trim() === "") {
      setSearchQuery("");
    }
  };

  return (
    <header>
      <div className="flex justify-between items-center mx-auto flex-wrap gap-4">
        <div>
          <h1 className="text-lg">Hi, User</h1>
          <p className="text-2xl font-semibold">Good Morning</p>
        </div>

        <div className="flex gap-3 items-center">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex gap-3">
              <div>
                <Input name="search" type="text" placeholder="Search city or country..." value={inputValue} onChange={handleInputChange} className="pr-10 min-w-[200px] md:min-w-[300px] relative" />
                <button type="submit" className="absolute right-25 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  <Search className="size-4" />
                </button>
              </div>
              <Button type="submit">Search</Button>
            </div>
          </form>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
