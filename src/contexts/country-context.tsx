"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface CountryContextType {
    country: string | null;
    loading: boolean;
    error: string | null;
}

const CountryContext = createContext<CountryContextType>({
    country: null,
    loading: true,
    error: null,
});

export const CountryProvider = ({ children }: { children: ReactNode }) => {
    const [country, setCountry] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const res = await fetch("https://ipapi.co/json/");
                const data = await res.json();
                setCountry(data.country_code || "IN");
            } catch (err) {
                setError("Failed to fetch country");
                setCountry("IN");
            } finally {
                setLoading(false);
            }
        };
        fetchCountry();
    }, []);

    return (
        <CountryContext.Provider value={{ country, loading, error }}>
            {children}
        </CountryContext.Provider>
    );
};

export const useCountry = () => useContext(CountryContext);
