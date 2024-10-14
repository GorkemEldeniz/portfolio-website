import { Icon } from "./ui/icon";

function Logo(){
  return (
    <div className="flex gap-2 sm:gap-3 items-center">
      <Icon icon="logo" className="size-10"/>
      <h1 className="font-bold text-custom-xl">Personal</h1>
    </div>
  );
}

export default Logo;

