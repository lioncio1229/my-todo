import PageWrapper from "@/components/layout/page-wrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <PageWrapper>{children}</PageWrapper>;
}
