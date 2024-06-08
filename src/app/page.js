import Image from "next/image";
import Header from "@/app/components/header";

export default function Home() {
  return (
      <div>
<Header></Header>
        <h1 className="text-3xl flex justify-center font-bold underline">
          Hello world!
        </h1>
      </div>
  );
}
