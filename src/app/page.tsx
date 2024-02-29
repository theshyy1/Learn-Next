import Link from "next/link";

export default function Home() {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Products</Link>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      <h1>Home Page</h1>
    </section>
  );
}
