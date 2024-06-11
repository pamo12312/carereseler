import Logo from "@/app/components/logo";
import Contact from "@/app/components/contact";
import Phone from "@/app/components/phone";
import Email from "@/app/components/email";

export default function Reasonbuy() {
    return (
        <div className={"flex justify-center gap-10 mt-5 w-full flex-wrap text-black"}>
            <div className={"flex gap-5 text-2xl flex-col w-1/4"}>
                <div>Jasný původ</div>
                <div>Nabízíme vozidla převážně z operativních leasingů a od autorizovaných dealerů.</div>

            </div>

            <div className={"flex gap-5 text-2xl flex-col w-1/4"}>
                <div>DPH ŘÁDNĚ ODVÁDÍME</div>
                <div>U nás nehrozí zabavení vozidla finančním úřadem, kvůli neuhrazenému DPH.</div>

            </div>
        </div>
    );
}
