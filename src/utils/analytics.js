// Analytics Helper
export function trackevent (name, params = {}) {
    if ( typeof window !== "undifined" && typeof window.gTag !== "function" ) {
        window.gtag("event", name, params);
    }
}

