import dayjs from "dayjs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12 max-md:flex-col">
      <p>
        Copyright © {dayjs().year()} Pedro Vitor Dev | Todos os direitos são
        reservados
      </p>

      <div className="flex gap-x-9">
        <Link href="/terms-of-use">Termos e Condições</Link>
        <Link href="/privacy-policy">Politicas de Privacidade</Link>
      </div>
    </footer>
  );
};

export default Footer;
