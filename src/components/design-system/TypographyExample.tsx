interface TypographyExampleProps {
    label: string;
    children: React.ReactNode;
}

export default function TypographyExample({
    label,
    children,
}: TypographyExampleProps) {
    return (
        <div className="rounded-2xl border border-navy/10 bg-white p-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-gold">
                {label}
            </p>

            {children}
        </div>
    );
}