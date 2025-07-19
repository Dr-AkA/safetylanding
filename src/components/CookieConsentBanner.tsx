'use client'
import React from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

type Props = {
  translations: {
    paragraph: string;
    button:string;
    button2:string;
    privacy:string;

  };
};

export const CookieConsentBanner = ({ translations }: Props) => {
{
    const baseButtonStyle = {
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "-0.015em",
    border: "none",
    cursor: "pointer"
    };
    const handleAccept = () => {
const userLocale = navigator.language || "en"; 
const languageCode = userLocale.split('-')[0]; 

document.cookie = `locale=${languageCode}; path=/; max-age=${60 * 60 * 24 * 365}`;

    };
    return (
        <CookieConsent
        location="bottom"
        buttonText={translations.button}
        declineButtonText={translations.button2}
        enableDeclineButton
        cookieName="Safety2 Cookie Consent"
         style={{
        background: "black",
        color: "white",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "1rem"
      }}
      buttonStyle={{
        ...baseButtonStyle,
        backgroundColor: "#006400", 
        color: "white"
      }}
      declineButtonStyle={{
        ...baseButtonStyle,
        backgroundColor: "#8B0000", 
        color: "white"
      }}
        expires={365}
        onAccept={handleAccept}
        >
          {translations.paragraph} <Link href={'/privacy'}>{translations.privacy}</Link>
        </CookieConsent>
    )
}
};


export default CookieConsentBanner;