import Sidebar from "@/components/layout/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-lvh w-full p-2">
            <div
                id="sidebar-wrapper"
                className="max-w-xs shrink-0 grow overflow-auto"
            >
                <Sidebar />
            </div>
            {children}
        </div>
    );
}
