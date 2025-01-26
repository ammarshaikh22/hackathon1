import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PaymentFooter from "@/components/PaymentFooter";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
            <PaymentFooter />
        </main>
    );
}
