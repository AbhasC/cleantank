import Link from "next/link";
import ImageComp from "@components/image-comp";
import {
  footerContactCss,
  footerCss,
  footerImageCss,
  footerInfoCss,
  footerLogoCss,
  footerMainCss,
  footerSubCss
} from "@modules/footer/style";
export default function Footer() {
  return (
    <footer css={footerCss}>
      <ImageComp src="/assets/images/footer.webp" alt="cleanTank Logo" containerCss={footerImageCss} />
      <div className="main" css={footerMainCss}>
        <div className="info" css={footerInfoCss}>
          <ImageComp src="/assets/images/footerLogo.webp" alt="cleanTank Logo" containerCss={footerLogoCss} />
          <p>
            Our mission at CleanTank Services is simple: to provide high-quality services for our valued clients. Our
            team goes above and beyond to cater to each project's specific needs. Through open communication and
            exceptional service, we hope you'll find what you're looking for with our Business
          </p>
        </div>
        <div className="contact" css={footerContactCss}>
          <h2>get in touch</h2>
          <div className="touch">
            <Link href="tel:9453517514" target="_blank" rel="noopener noreferrer">
              9453517514
            </Link>
            <Link href="tel:8699339947" target="_blank" rel="noopener noreferrer">
              8699339947
            </Link>
            <Link href="mailto:admin@cleantankservices.com" target="_blank" rel="noopener noreferrer">
              admin@cleantankservices.com
            </Link>
            <Link
              href="http://maps.google.com/?q= B-3/17, Jamuna Apartments ,Chd-Kurali Hgwy, NH-5, Khanpur, Kharar, SAS Nagar 140 301 Punjab"
              target="_blank"
              rel="noopener noreferrer"
            >
              B-3/17, Jamuna Apartments ,Chd-Kurali Hgwy, NH-5, Khanpur, Kharar, SAS Nagar 140 301 Punjab
            </Link>
          </div>
        </div>
      </div>
      <div className="sub" css={footerSubCss}>
        <div className="rights">
          <Link href="https://www.hymnsofweb.com/" className="copyright">
            Developed With 💖 in india By Hymns Of Web
          </Link>
        </div>
      </div>
    </footer>
  );
}
