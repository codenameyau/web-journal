interface CookieOptions {
  domain?: string;
  path?: string;
  maxAge?: number;
}

const defaultOptions = {
  domain: `${window.location.hostname}`,
  path: "/",
  maxAge: 1000 * 60 * 60 * 24 * 14, // 14 days
};

export const setCookie = (name: string, value: string, options?: CookieOptions): string => {
  const maxAge = options?.maxAge || defaultOptions.maxAge;
  const domain = options?.domain || defaultOptions.domain;
  const path = options?.path || defaultOptions.path;

  // Use insecure cookie for localhost since https is not set up yet.
  const useInsecureCookie = window.location.hostname.includes("localhost");

  document.cookie = useInsecureCookie
    ? `${name}=${value}; max-age=${maxAge}; domain=${domain}; path=${path}`
    : `${name}=${value}; max-age=${maxAge}; secure=true; domain=${domain}; path=${path}`;

  return value;
};

export const escapeCookieName = (str: string): string => {
  return str.replace(/([.*+?^${}()|[\]/\\])/g, "\\$1");
};

export const matchCookieRegex = (name: string): RegExp => {
  return RegExp(`(?:^|;\\s*)${escapeCookieName(name)}=([^;]*)`);
};

export const getCookie = (name: string): string | undefined => {
  const match = document.cookie.match(matchCookieRegex(name));
  return match ? match[1] : undefined;
};

export const deleteCookie = (name: string, options?: CookieOptions): void => {
  const path = options?.path || defaultOptions.path;
  const domain = options?.domain || defaultOptions.domain;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=${domain}; path=${path}`;
};
