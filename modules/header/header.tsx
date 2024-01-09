import Link from "next/link";
import { header, logoContCss } from "./style";
import ImageComp from "@components/image-comp";

export default function Header() {
  return (
    <header className="header" css={header}>
      <ImageComp src="/assets/images/logo.webp" alt="CleanTank Logo" containerCss={logoContCss} />
      <div className="header-links">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Process</Link>
        <Link href="/">Customers</Link>
      </div>
    </header>
  );
}
