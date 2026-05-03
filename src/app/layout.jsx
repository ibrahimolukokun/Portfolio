import { Inter } from 'next/font/google'

const primary_font = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
})

import "./globals.css";

import "@styles/css/plugins/font-awesome.min.css";
import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import '@styles/scss/style.scss';

import { register } from "swiper/element/bundle";
register();

import AppData from "@data/app.json";

export const metadata = {
  title: {
    default: "Ibrahim Olukokun — Product Designer | Design Engineer",
    template: "%s | Ibrahim Olukokun",
  },
  description: "Product Designer | Design Engineer. I design SaaS platforms, dashboards, and digital systems for growing companies — then help build them.",
}

const Layouts = ({
  children
}) => {
  return (
    <html lang="en" className={`${primary_font.variable}`}>
      <body>
        <div id="smooth-wrapper" className="mil-page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
};
export default Layouts;
