type Props = { children: React.ReactNode };

export default function PageWrapper({ children }: Props) {
    return <div className="space-y-8 p-3">{children}</div>;
}
