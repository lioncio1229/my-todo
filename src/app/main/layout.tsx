import Sidebar from "@/components/layout/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-lvh w-full">
            <div className="shrink-0 basis-xs p-2">
                <Sidebar />
            </div>
            <div className="grow overflow-auto">{children}</div>
        </div>
    );
}
