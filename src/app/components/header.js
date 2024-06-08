import Image from "next/image";
import Logo from "@/app/components/logo";
import Contact from "@/app/components/contact";
export default function Header() {
    return (
        <div className="flex justify-between">
<Logo></Logo>
            <Contact></Contact>



        </div>
    );
}
