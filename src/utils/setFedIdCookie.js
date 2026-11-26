(function () {
    const name = "Fed_ID_NLI";
    const exists = document.cookie
        .split("; ")
        .some((c) => c.startsWith(name + "="));
    if (exists) return;

    const value = "4239560650";
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie =
        `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax` +
        (location.protocol === "https:" ? "; Secure" : "");
})(); //The () at the end immediately calls (executes) the function.