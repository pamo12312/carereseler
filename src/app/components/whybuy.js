import Logo from "@/app/components/logo";
import Contact from "@/app/components/contact";
import Phone from "@/app/components/phone";
import Email from "@/app/components/email";
import Reasonbuy from "@/app/components/reasonbuy";

export default function Whybuy() {
    return (
        <div className="flex justify-center  p-3 font-bold  bg-white text-4xl pb-10  flex-col">
            <div className={"flex justify-center text-black"}>
Proč si u nás koupit auto?</div>
<Reasonbuy/>

        </div>
    );
}
