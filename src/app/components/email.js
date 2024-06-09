import Image from "next/image";

export default function Email() {
    return (
        <div className={"flex items-center text-white"}>
            <img src="./gmail.png" className={"w-14 h-14 mr-2"}/>
            <div className="  ">
                <span className={"mr-5 "}> Email</span>
                info@pamocars.cz
            </div>
        </div>
    );
}
