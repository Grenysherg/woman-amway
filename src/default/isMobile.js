const MAX_MOBILE_WIDTH = 1024;

export function isMobile() {
    return window.innerWidth < MAX_MOBILE_WIDTH;
}