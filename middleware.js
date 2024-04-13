import { NextResponse } from "next/server";

const { match } = require("@formatjs/intl-localematcher");
const Negotiator = require("negotiator");

let locals = ["en", "bn"];
let defaultLocal = "en";

function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };

  let languages = new Negotiator({ headers }).language();

  return match(languages, locals, defaultLocal);
}

export default function middleware(request) {
  const pathName = request.nextUrl.pathname;
  const pathNameIsMissingLocate = locals.every(
    (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
  );

  if (pathNameIsMissingLocate) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathName}`, request.url)
    );
  }
}
