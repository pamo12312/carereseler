import Image from "next/image";

export default function Phone() {
    return (
        <div className={"flex items-center text-white"}>
            <img src="./phone.png" className={"w-14 h-14 mr-2"}/>
            <div className="  ">
                <div> Prodejce</div>
         +420 123 456 789
            </div>
        </div>
    );
}
