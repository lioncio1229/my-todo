import Image from "next/image";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <div className="relative hidden h-lvh flex-1/2 shrink-0 grow flex-col justify-center gap-4 lg:flex">
                <div className="absolute top-0 z-[-100] h-full w-full bg-linear-45 from-transparent to-fuchsia-300 opacity-20"></div>
                <div className="to-primary-main/25 absolute top-0 z-[-100] h-full w-full bg-linear-to-t from-white"></div>
                <div className="flex w-full flex-col items-center justify-center gap-1 px-4 xl:flex-row">
                    <Image
                        src="/man-with-coffee.svg"
                        alt="Man with coffee"
                        width={150}
                        height={150}
                    />
                    <div>
                        <h1 className="text-primary-main font-bold">MyTodo</h1>
                        <p>
                            Become productive by creating todo and events using{" "}
                            <span className="text-primary-main font-medium">
                                MyTodo
                            </span>
                        </p>
                    </div>
                </div>
                <div className="pr-4">
                    <Image
                        src="/dashboard.png"
                        alt="Dashboard"
                        width={1496}
                        height={896}
                        className="shadow-primary-main/10 h-auto w-[800px] rounded-lg shadow-[0_-4px_10px]"
                    />
                </div>
            </div>
            <div className="h-lvh flex-1/2 shrink-0 grow">{children}</div>
        </div>
    );
}
