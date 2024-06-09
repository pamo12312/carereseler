import Image from "next/image";

export default function Contact() {
    return (
        <div className={"flex items-center text-white"}>
            <img src="./map.png" className={"w-14 h-14 mr-2"}/>
            <div className="  ">
                <div> Roztylská 2321/19, Chodov</div>
                14800 Praha 11
            </div>
        </div>
    );
}
