type Props = { children: React.ReactNode };

export default function PageWrapper({ children }: Props) {
    return <div className="space-y-8 px-3 py-0">{children}</div>;
}
