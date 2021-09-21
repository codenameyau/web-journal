const isLocalhost = window.location.hostname.includes("localhost");

interface CookieOptions {
  domain?: string;
  path?: string;
  maxAge?: number;
}

const defaultOptions = {
  domain: `${window.location.host}`,
  path: "/",
  maxAge: 60 * 60 * 24 * 1, // 1 days
};

export const setCookie = (name: string, value: string, options?: CookieOptions): string => {
  const maxAge = options?.maxAge || defaultOptions.maxAge;
  const domain = options?.domain || defaultOptions.domain;
  const path = options?.path || defaultOptions.path;

  document.cookie = isLocalhost
    ? `${name}=${value}; max-age=${maxAge}; path=${path}`
    : `${name}=${value}; max-age=${maxAge}; secure=true; domain=${domain}; path=${path}`;

  return value;
};

export const escapeCookieName = (str: string): string => {
  return str.replace(/([.*+?^${}()|[\]/\\])/g, "\\$1");
};

export const matchCookieRegex = (name: string): RegExp => {
  return RegExp(`(?:^|;\\s*)${escapeCookieName(name)}=([^;]*)`);
};

export const getCookie = (name: string): string => {
  const match = document.cookie.match(matchCookieRegex(name));
  return match ? match[1] : "";
};

export const deleteCookie = (name: string, options?: CookieOptions): void => {
  const path = options?.path || defaultOptions.path;
  const domain = options?.domain || defaultOptions.domain;

  document.cookie = isLocalhost
    ? `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=${path}`
    : `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=${domain}; path=${path}`;
};
