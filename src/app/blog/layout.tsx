import Footer from "@/ui/components/footer";
import Header from "@/ui/components/header";

export default function BlogListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-[100vh] flex flex-col justify-between">
      <div>
        <Header />
        <div className="w-[80%] max-w-[1000px] mx-auto mt-10 mb-16">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
}
