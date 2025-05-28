import Image from "next/image";
import Overview from "./components/overview";
import Today from "./components/today";
import Tomorrow from "./components/tomorrow";

export default function Page() {
    return (
        <>
            <div className="sticky top-0 z-50 flex w-full items-center gap-3 border-b-1 border-b-gray-200 bg-white py-3 font-bold">
                <h2>Upcoming</h2>
                <div className="flex items-center">
                    <h2 className="rounded-sm border-1 border-gray-200 px-2 py-1">
                        12
                    </h2>
                    <Image
                        src="/calendar.svg"
                        alt="Calendar"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
            <Overview />
            <Today />
            <Tomorrow />
        </>
    );
}
