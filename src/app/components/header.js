import Logo from "@/app/components/logo";
import Contact from "@/app/components/contact";
import Phone from "@/app/components/phone";
import Email from "@/app/components/email";

export default function Header() {
    return (
        <div className="flex justify-between  bg-black">
            <Logo />
        <div className={"flex gap-10 flex-wrap"}>
            <Contact />
            <Phone />
        <Email/>
        </div>
        </div>
    );
}
