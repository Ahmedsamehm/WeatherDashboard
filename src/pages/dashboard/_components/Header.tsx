import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center mx-auto ">
        <div>
          <h1 className="">Hi, Kajal</h1>
          <p className="text-2xl">Good Morning</p>
        </div>
        <div className="flex gap-3">
          <Input type="text" placeholder="Search" />
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
