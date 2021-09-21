import { setCookie, getCookie, escapeCookieName, matchCookieRegex } from "./cookies";

describe("cookie util", () => {
  Object.defineProperty(window.document, "cookie", {
    writable: true,
  });

  describe("getCookie", () => {
    it("should return cookie", () => {
      setCookie("ocrolusCookie", "hello");
      expect(getCookie("ocrolusCookie")).toEqual("hello");
    });
  });

  describe("setCookie", () => {
    it("should set cookie", () => {
      setCookie("ocrolusCookie", "hello");
      expect(document.cookie).toEqual("ocrolusCookie=hello; max-age=86400; secure=true; domain=undefined; path=/");
    });

    it("should set cookie with options", () => {
      setCookie("ocrolusCookie", "hello", {
        maxAge: 12345,
        domain: "dashboard.ocrolus.com",
      });
      expect(document.cookie).toEqual(
        "ocrolusCookie=hello; max-age=12345; secure=true; domain=dashboard.ocrolus.com; path=/",
      );
    });
  });

  describe("escapeCookieName", () => {
    it("should escape cookie", () => {
      const cookie = "_gcl_au.lol";
      expect(escapeCookieName(cookie)).toEqual("_gcl_au\\.lol");
    });
  });

  describe("matchCookieRegex", () => {
    const cookies =
      "_fbp=fb.1.1582924966539.1323550776;_gcl_au=1.1.1717511549.1582924967;_ga=GA1.2.294445111.1582924967";
    const splitCookies = cookies.split(";");

    test.each(splitCookies)("should handle cookie: %s", (cookie) => {
      const [name, value] = cookie.split("=");
      expect(cookie.match(matchCookieRegex(name))?.[1]).toEqual(value);
    });
  });
});
