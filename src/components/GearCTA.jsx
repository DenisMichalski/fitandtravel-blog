import React from "react";
import { Link } from "react-router-dom";
import { trackEvent } from "../utils/analytics";

export default function GearCTA({ page = "" }) {
    return (
        <aside
            className="
        mt-10 rounded-2xl p-6
        bg-white border border-slate-200
        dark:bg-slate-800 dark:border-slate-700
        "
        >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Empfehlungen & Gear
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                Ich habe eine eigene Gear-Seite mit meinen Fitness- und Travel-Essentials
                gebaut – direkt verlinkt und messbar, was wirklich geklickt wird.
            </p>

            <Link
                to="/gear"
                onClick={() =>
                    trackEvent("cta_click", {
                        location: "blogpost_cta",
                        page,
                        target: "gear_page",
                    })
                }
                className="
            inline-flex items-center gap-2 mt-4
            px-5 py-5 rounded-xl font-semibold
            bg-gradient-to-r from-pink-500 to-yellow-400 text-white
            hover:from-pink-600 hover:to-yellow-500 transition
            "
            >
                Meine Empfehlungen ansehen →
            </Link>
        </aside>
    );
}