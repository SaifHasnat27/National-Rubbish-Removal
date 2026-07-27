// "06:00" -> "6:00 AM"
export const to12Hour = (time: string) => {
  const [h, m] = time.split(':').map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
};

export const BUSINESS = {
  name: "National Rubbish Removal",
  phone: "0418 665 429",
  phoneRaw: "+61418665429",
  whatsapp: "0418 665 429",
  whatsappRaw: "+61418665429",
  whatsappLink: "https://wa.me/61418665429",
  email: "info@nationalrubbishremoval.com.au",
  url: "https://www.nationalrubbishremoval.com.au",
  address: "",
  directionsUrl: "",
  openingHours: {
    rows: [
      { day: "Monday - Friday", opens: "06:00", closes: "21:00" },
      { day: "Saturday",        opens: "07:00", closes: "21:00" },
      { day: "Sunday",          opens: "08:00", closes: "21:00" },
    ],
    emergency: "",
  },
  googlePlaceId: "",
  googleBusinessProfile: "",
  googleReviewLink: "",
  googleReviewsAll: "",
  googleScriptUrl: "https://script.google.com/macros/s/AKfycby8JvAaP204NeE44FiQzOlyKlWssbYDMnv3mLs9k9X2LBH529Ngse5nKYiyuIBmebCB0g/exec",
  serviceArea: "Sydney Metro Area",
  mobileBreakpoint: 1023,
};
