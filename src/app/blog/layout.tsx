import Header from "@/ui/components/header";

export default function BlogListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Header />
    <div className="w-[80%] max-w-[1000px] mx-auto mt-10">
      {children}
    </div>
    </>
  );
}
