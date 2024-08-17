import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-black py-4 px-10 text-white">
      <Link href="/" className="text-2xl font-bold ">Hiroto Blog</Link>
    </header>
  )
}

export default Header;