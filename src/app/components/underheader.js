import Image from "next/image";

export default function Underheader() {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('./vwgolf.jpg')"}}>
            <div className="flex justify-center  items-center gap-10 h-full">
                <div className={"text-red-500"}>O nás</div>
                <div className={"text-red-500"}>Nabídka</div>
                <div className={"text-red-500"}>Kontakt</div>
            </div>
        </div>
    );
}
