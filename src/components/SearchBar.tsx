
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SearchBar = () => {
  return <div className="relative w-full max-w-2xl bg-white/95 rounded-full overflow-hidden flex">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-estate-400 w-5 h-5" />
      <Input 
        className="pl-12 pr-4 py-6 border-none focus:ring-0" 
        placeholder="Search for electrical services..." 
      />
      <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full px-6">
        Search
      </Button>
    </div>;
};

export default SearchBar;
