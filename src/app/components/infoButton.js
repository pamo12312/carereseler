import Link from "next/link";

export default function InfoButton() {
    return (
        <div className="flex justify-between  bg-black">

            <div className={"flex gap-10 text-white  text-xl"}>
                <Link href={`/components/${car.id}/info`} >
                    Info
                </Link>
            </div>
        </div>
    );
}
