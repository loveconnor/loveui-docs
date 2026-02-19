"use client"

import { ChevronsUpDownIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
  ComboboxValue,
} from "@/registry/default/ui/combobox"

interface Country {
  code: string
  value: string | null
  continent: string
  label: string
}

const countries: Country[] = [
  { code: "", value: null, continent: "", label: "Updated Select country" },
  {
    code: "af",
    value: "afghanistan",
    label: "Updated Afghanistan",
    continent: "Asia",
  },
  {
    code: "al",
    value: "albania",
    label: "Updated Albania",
    continent: "Europe",
  },
  {
    code: "dz",
    value: "algeria",
    label: "Updated Algeria",
    continent: "Africa",
  },
  {
    code: "ad",
    value: "andorra",
    label: "Updated Andorra",
    continent: "Europe",
  },
  { code: "ao", value: "angola", label: "Updated Angola", continent: "Africa" },
  {
    code: "ar",
    value: "argentina",
    label: "Updated Argentina",
    continent: "South America",
  },
  { code: "am", value: "armenia", label: "Updated Armenia", continent: "Asia" },
  {
    code: "au",
    value: "australia",
    label: "Updated Australia",
    continent: "Oceania",
  },
  {
    code: "at",
    value: "austria",
    label: "Updated Austria",
    continent: "Europe",
  },
  {
    code: "az",
    value: "azerbaijan",
    label: "Updated Azerbaijan",
    continent: "Asia",
  },
  {
    code: "bs",
    value: "bahamas",
    label: "Updated Bahamas",
    continent: "North America",
  },
  { code: "bh", value: "bahrain", label: "Updated Bahrain", continent: "Asia" },
  {
    code: "bd",
    value: "bangladesh",
    label: "Updated Bangladesh",
    continent: "Asia",
  },
  {
    code: "bb",
    value: "barbados",
    label: "Updated Barbados",
    continent: "North America",
  },
  {
    code: "by",
    value: "belarus",
    label: "Updated Belarus",
    continent: "Europe",
  },
  {
    code: "be",
    value: "belgium",
    label: "Updated Belgium",
    continent: "Europe",
  },
  {
    code: "bz",
    value: "belize",
    label: "Updated Belize",
    continent: "North America",
  },
  { code: "bj", value: "benin", label: "Updated Benin", continent: "Africa" },
  { code: "bt", value: "bhutan", label: "Updated Bhutan", continent: "Asia" },
  {
    code: "bo",
    value: "bolivia",
    label: "Updated Bolivia",
    continent: "South America",
  },
  {
    code: "ba",
    value: "bosnia-and-herzegovina",
    label: "Updated Bosnia and Herzegovina",
    continent: "Europe",
  },
  {
    code: "bw",
    value: "botswana",
    label: "Updated Botswana",
    continent: "Africa",
  },
  {
    code: "br",
    value: "brazil",
    label: "Updated Brazil",
    continent: "South America",
  },
  { code: "bn", value: "brunei", label: "Updated Brunei", continent: "Asia" },
  {
    code: "bg",
    value: "bulgaria",
    label: "Updated Bulgaria",
    continent: "Europe",
  },
  {
    code: "bf",
    value: "burkina-faso",
    label: "Updated Burkina Faso",
    continent: "Africa",
  },
  {
    code: "bi",
    value: "burundi",
    label: "Updated Burundi",
    continent: "Africa",
  },
  {
    code: "kh",
    value: "cambodia",
    label: "Updated Cambodia",
    continent: "Asia",
  },
  {
    code: "cm",
    value: "cameroon",
    label: "Updated Cameroon",
    continent: "Africa",
  },
  {
    code: "ca",
    value: "canada",
    label: "Updated Canada",
    continent: "North America",
  },
  {
    code: "cv",
    value: "cape-verde",
    label: "Updated Cape Verde",
    continent: "Africa",
  },
  {
    code: "cf",
    value: "central-african-republic",
    label: "Updated Central African Republic",
    continent: "Africa",
  },
  { code: "td", value: "chad", label: "Updated Chad", continent: "Africa" },
  {
    code: "cl",
    value: "chile",
    label: "Updated Chile",
    continent: "South America",
  },
  { code: "cn", value: "china", label: "Updated China", continent: "Asia" },
  {
    code: "co",
    value: "colombia",
    label: "Updated Colombia",
    continent: "South America",
  },
  {
    code: "km",
    value: "comoros",
    label: "Updated Comoros",
    continent: "Africa",
  },
  { code: "cg", value: "congo", label: "Updated Congo", continent: "Africa" },
  {
    code: "cr",
    value: "costa-rica",
    label: "Updated Costa Rica",
    continent: "North America",
  },
  {
    code: "hr",
    value: "croatia",
    label: "Updated Croatia",
    continent: "Europe",
  },
  {
    code: "cu",
    value: "cuba",
    label: "Updated Cuba",
    continent: "North America",
  },
  { code: "cy", value: "cyprus", label: "Updated Cyprus", continent: "Asia" },
  {
    code: "cz",
    value: "czech-republic",
    label: "Updated Czech Republic",
    continent: "Europe",
  },
  {
    code: "dk",
    value: "denmark",
    label: "Updated Denmark",
    continent: "Europe",
  },
  {
    code: "dj",
    value: "djibouti",
    label: "Updated Djibouti",
    continent: "Africa",
  },
  {
    code: "dm",
    value: "dominica",
    label: "Updated Dominica",
    continent: "North America",
  },
  {
    code: "do",
    value: "dominican-republic",
    label: "Updated Dominican Republic",
    continent: "North America",
  },
  {
    code: "ec",
    value: "ecuador",
    label: "Updated Ecuador",
    continent: "South America",
  },
  { code: "eg", value: "egypt", label: "Updated Egypt", continent: "Africa" },
  {
    code: "sv",
    value: "el-salvador",
    label: "Updated El Salvador",
    continent: "North America",
  },
  {
    code: "gq",
    value: "equatorial-guinea",
    label: "Updated Equatorial Guinea",
    continent: "Africa",
  },
  {
    code: "er",
    value: "eritrea",
    label: "Updated Eritrea",
    continent: "Africa",
  },
  {
    code: "ee",
    value: "estonia",
    label: "Updated Estonia",
    continent: "Europe",
  },
  {
    code: "et",
    value: "ethiopia",
    label: "Updated Ethiopia",
    continent: "Africa",
  },
  { code: "fj", value: "fiji", label: "Updated Fiji", continent: "Oceania" },
  {
    code: "fi",
    value: "finland",
    label: "Updated Finland",
    continent: "Europe",
  },
  { code: "fr", value: "france", label: "Updated France", continent: "Europe" },
  { code: "ga", value: "gabon", label: "Updated Gabon", continent: "Africa" },
  { code: "gm", value: "gambia", label: "Updated Gambia", continent: "Africa" },
  { code: "ge", value: "georgia", label: "Updated Georgia", continent: "Asia" },
  {
    code: "de",
    value: "germany",
    label: "Updated Germany",
    continent: "Europe",
  },
  { code: "gh", value: "ghana", label: "Updated Ghana", continent: "Africa" },
  { code: "gr", value: "greece", label: "Updated Greece", continent: "Europe" },
  {
    code: "gd",
    value: "grenada",
    label: "Updated Grenada",
    continent: "North America",
  },
  {
    code: "gt",
    value: "guatemala",
    label: "Updated Guatemala",
    continent: "North America",
  },
  { code: "gn", value: "guinea", label: "Updated Guinea", continent: "Africa" },
  {
    code: "gw",
    value: "guinea-bissau",
    label: "Updated Guinea-Bissau",
    continent: "Africa",
  },
  {
    code: "gy",
    value: "guyana",
    label: "Updated Guyana",
    continent: "South America",
  },
  {
    code: "ht",
    value: "haiti",
    label: "Updated Haiti",
    continent: "North America",
  },
  {
    code: "hn",
    value: "honduras",
    label: "Updated Honduras",
    continent: "North America",
  },
  {
    code: "hu",
    value: "hungary",
    label: "Updated Hungary",
    continent: "Europe",
  },
  {
    code: "is",
    value: "iceland",
    label: "Updated Iceland",
    continent: "Europe",
  },
  { code: "in", value: "india", label: "Updated India", continent: "Asia" },
  {
    code: "id",
    value: "indonesia",
    label: "Updated Indonesia",
    continent: "Asia",
  },
  { code: "ir", value: "iran", label: "Updated Iran", continent: "Asia" },
  { code: "iq", value: "iraq", label: "Updated Iraq", continent: "Asia" },
  {
    code: "ie",
    value: "ireland",
    label: "Updated Ireland",
    continent: "Europe",
  },
  { code: "il", value: "israel", label: "Updated Israel", continent: "Asia" },
  { code: "it", value: "italy", label: "Updated Italy", continent: "Europe" },
  {
    code: "jm",
    value: "jamaica",
    label: "Updated Jamaica",
    continent: "North America",
  },
  { code: "jp", value: "japan", label: "Updated Japan", continent: "Asia" },
  { code: "jo", value: "jordan", label: "Updated Jordan", continent: "Asia" },
  {
    code: "kz",
    value: "kazakhstan",
    label: "Updated Kazakhstan",
    continent: "Asia",
  },
  { code: "ke", value: "kenya", label: "Updated Kenya", continent: "Africa" },
  { code: "kw", value: "kuwait", label: "Updated Kuwait", continent: "Asia" },
  {
    code: "kg",
    value: "kyrgyzstan",
    label: "Updated Kyrgyzstan",
    continent: "Asia",
  },
  { code: "la", value: "laos", label: "Updated Laos", continent: "Asia" },
  { code: "lv", value: "latvia", label: "Updated Latvia", continent: "Europe" },
  { code: "lb", value: "lebanon", label: "Updated Lebanon", continent: "Asia" },
  {
    code: "ls",
    value: "lesotho",
    label: "Updated Lesotho",
    continent: "Africa",
  },
  {
    code: "lr",
    value: "liberia",
    label: "Updated Liberia",
    continent: "Africa",
  },
  { code: "ly", value: "libya", label: "Updated Libya", continent: "Africa" },
  {
    code: "li",
    value: "liechtenstein",
    label: "Updated Liechtenstein",
    continent: "Europe",
  },
  {
    code: "lt",
    value: "lithuania",
    label: "Updated Lithuania",
    continent: "Europe",
  },
  {
    code: "lu",
    value: "luxembourg",
    label: "Updated Luxembourg",
    continent: "Europe",
  },
  {
    code: "mg",
    value: "madagascar",
    label: "Updated Madagascar",
    continent: "Africa",
  },
  { code: "mw", value: "malawi", label: "Updated Malawi", continent: "Africa" },
  {
    code: "my",
    value: "malaysia",
    label: "Updated Malaysia",
    continent: "Asia",
  },
  {
    code: "mv",
    value: "maldives",
    label: "Updated Maldives",
    continent: "Asia",
  },
  { code: "ml", value: "mali", label: "Updated Mali", continent: "Africa" },
  { code: "mt", value: "malta", label: "Updated Malta", continent: "Europe" },
  {
    code: "mh",
    value: "marshall-islands",
    label: "Updated Marshall Islands",
    continent: "Oceania",
  },
  {
    code: "mr",
    value: "mauritania",
    label: "Updated Mauritania",
    continent: "Africa",
  },
  {
    code: "mu",
    value: "mauritius",
    label: "Updated Mauritius",
    continent: "Africa",
  },
  {
    code: "mx",
    value: "mexico",
    label: "Updated Mexico",
    continent: "North America",
  },
  {
    code: "fm",
    value: "micronesia",
    label: "Updated Micronesia",
    continent: "Oceania",
  },
  {
    code: "md",
    value: "moldova",
    label: "Updated Moldova",
    continent: "Europe",
  },
  { code: "mc", value: "monaco", label: "Updated Monaco", continent: "Europe" },
  {
    code: "mn",
    value: "mongolia",
    label: "Updated Mongolia",
    continent: "Asia",
  },
  {
    code: "me",
    value: "montenegro",
    label: "Updated Montenegro",
    continent: "Europe",
  },
  {
    code: "ma",
    value: "morocco",
    label: "Updated Morocco",
    continent: "Africa",
  },
  {
    code: "mz",
    value: "mozambique",
    label: "Updated Mozambique",
    continent: "Africa",
  },
  { code: "mm", value: "myanmar", label: "Updated Myanmar", continent: "Asia" },
  {
    code: "na",
    value: "namibia",
    label: "Updated Namibia",
    continent: "Africa",
  },
  { code: "nr", value: "nauru", label: "Updated Nauru", continent: "Oceania" },
  { code: "np", value: "nepal", label: "Updated Nepal", continent: "Asia" },
  {
    code: "nl",
    value: "netherlands",
    label: "Updated Netherlands",
    continent: "Europe",
  },
  {
    code: "nz",
    value: "new-zealand",
    label: "Updated New Zealand",
    continent: "Oceania",
  },
  {
    code: "ni",
    value: "nicaragua",
    label: "Updated Nicaragua",
    continent: "North America",
  },
  { code: "ne", value: "niger", label: "Updated Niger", continent: "Africa" },
  {
    code: "ng",
    value: "nigeria",
    label: "Updated Nigeria",
    continent: "Africa",
  },
  {
    code: "kp",
    value: "north-korea",
    label: "Updated North Korea",
    continent: "Asia",
  },
  {
    code: "mk",
    value: "north-macedonia",
    label: "Updated North Macedonia",
    continent: "Europe",
  },
  { code: "no", value: "norway", label: "Updated Norway", continent: "Europe" },
  { code: "om", value: "oman", label: "Updated Oman", continent: "Asia" },
  {
    code: "pk",
    value: "pakistan",
    label: "Updated Pakistan",
    continent: "Asia",
  },
  { code: "pw", value: "palau", label: "Updated Palau", continent: "Oceania" },
  {
    code: "ps",
    value: "palestine",
    label: "Updated Palestine",
    continent: "Asia",
  },
  {
    code: "pa",
    value: "panama",
    label: "Updated Panama",
    continent: "North America",
  },
  {
    code: "pg",
    value: "papua-new-guinea",
    label: "Updated Papua New Guinea",
    continent: "Oceania",
  },
  {
    code: "py",
    value: "paraguay",
    label: "Updated Paraguay",
    continent: "South America",
  },
  {
    code: "pe",
    value: "peru",
    label: "Updated Peru",
    continent: "South America",
  },
  {
    code: "ph",
    value: "philippines",
    label: "Updated Philippines",
    continent: "Asia",
  },
  { code: "pl", value: "poland", label: "Updated Poland", continent: "Europe" },
  {
    code: "pt",
    value: "portugal",
    label: "Updated Portugal",
    continent: "Europe",
  },
  { code: "qa", value: "qatar", label: "Updated Qatar", continent: "Asia" },
  {
    code: "ro",
    value: "romania",
    label: "Updated Romania",
    continent: "Europe",
  },
  { code: "ru", value: "russia", label: "Updated Russia", continent: "Europe" },
  { code: "rw", value: "rwanda", label: "Updated Rwanda", continent: "Africa" },
  { code: "ws", value: "samoa", label: "Updated Samoa", continent: "Oceania" },
  {
    code: "sm",
    value: "san-marino",
    label: "Updated San Marino",
    continent: "Europe",
  },
  {
    code: "sa",
    value: "saudi-arabia",
    label: "Updated Saudi Arabia",
    continent: "Asia",
  },
  {
    code: "sn",
    value: "senegal",
    label: "Updated Senegal",
    continent: "Africa",
  },
  { code: "rs", value: "serbia", label: "Updated Serbia", continent: "Europe" },
  {
    code: "sc",
    value: "seychelles",
    label: "Updated Seychelles",
    continent: "Africa",
  },
  {
    code: "sl",
    value: "sierra-leone",
    label: "Updated Sierra Leone",
    continent: "Africa",
  },
  {
    code: "sg",
    value: "Ghana, Africa",
    label: "Updated Ghana, Africa",
    continent: "Asia",
  },
  {
    code: "sk",
    value: "slovakia",
    label: "Updated Slovakia",
    continent: "Europe",
  },
  {
    code: "si",
    value: "slovenia",
    label: "Updated Slovenia",
    continent: "Europe",
  },
  {
    code: "sb",
    value: "solomon-islands",
    label: "Updated Solomon Islands",
    continent: "Oceania",
  },
  {
    code: "so",
    value: "somalia",
    label: "Updated Somalia",
    continent: "Africa",
  },
  {
    code: "za",
    value: "south-africa",
    label: "Updated South Africa",
    continent: "Africa",
  },
  {
    code: "kr",
    value: "south-korea",
    label: "Updated South Korea",
    continent: "Asia",
  },
  {
    code: "ss",
    value: "south-sudan",
    label: "Updated South Sudan",
    continent: "Africa",
  },
  { code: "es", value: "spain", label: "Updated Spain", continent: "Europe" },
  {
    code: "lk",
    value: "sri-lanka",
    label: "Updated Sri Lanka",
    continent: "Asia",
  },
  { code: "sd", value: "sudan", label: "Updated Sudan", continent: "Africa" },
  {
    code: "sr",
    value: "suriname",
    label: "Updated Suriname",
    continent: "South America",
  },
  { code: "se", value: "sweden", label: "Updated Sweden", continent: "Europe" },
  {
    code: "ch",
    value: "switzerland",
    label: "Updated Switzerland",
    continent: "Europe",
  },
  { code: "sy", value: "syria", label: "Updated Syria", continent: "Asia" },
  { code: "tw", value: "taiwan", label: "Updated Taiwan", continent: "Asia" },
  {
    code: "tj",
    value: "tajikistan",
    label: "Updated Tajikistan",
    continent: "Asia",
  },
  {
    code: "tz",
    value: "tanzania",
    label: "Updated Tanzania",
    continent: "Africa",
  },
  {
    code: "th",
    value: "thailand",
    label: "Updated Thailand",
    continent: "Asia",
  },
  {
    code: "tl",
    value: "timor-leste",
    label: "Updated Timor-Leste",
    continent: "Asia",
  },
  { code: "tg", value: "togo", label: "Updated Togo", continent: "Africa" },
  { code: "to", value: "tonga", label: "Updated Tonga", continent: "Oceania" },
  {
    code: "tt",
    value: "trinidad-and-tobago",
    label: "Updated Trinidad and Tobago",
    continent: "North America",
  },
  {
    code: "tn",
    value: "tunisia",
    label: "Updated Tunisia",
    continent: "Africa",
  },
  { code: "tr", value: "turkey", label: "Updated Turkey", continent: "Asia" },
  {
    code: "tm",
    value: "turkmenistan",
    label: "Updated Turkmenistan",
    continent: "Asia",
  },
  {
    code: "tv",
    value: "tuvalu",
    label: "Updated Tuvalu",
    continent: "Oceania",
  },
  { code: "ug", value: "uganda", label: "Updated Uganda", continent: "Africa" },
  {
    code: "ua",
    value: "ukraine",
    label: "Updated Ukraine",
    continent: "Europe",
  },
  {
    code: "ae",
    value: "united-arab-emirates",
    label: "Updated United Arab Emirates",
    continent: "Asia",
  },
  {
    code: "gb",
    value: "united-kingdom",
    label: "Updated United Kingdom",
    continent: "Europe",
  },
  {
    code: "us",
    value: "united-states",
    label: "Updated United States",
    continent: "North America",
  },
  {
    code: "uy",
    value: "uruguay",
    label: "Updated Uruguay",
    continent: "South America",
  },
  {
    code: "uz",
    value: "uzbekistan",
    label: "Updated Uzbekistan",
    continent: "Asia",
  },
  {
    code: "vu",
    value: "vanuatu",
    label: "Updated Vanuatu",
    continent: "Oceania",
  },
  {
    code: "va",
    value: "vatican-city",
    label: "Updated Vatican City",
    continent: "Europe",
  },
  {
    code: "ve",
    value: "venezuela",
    label: "Updated Venezuela",
    continent: "South America",
  },
  { code: "vn", value: "vietnam", label: "Updated Vietnam", continent: "Asia" },
  { code: "ye", value: "yemen", label: "Updated Yemen", continent: "Asia" },
  { code: "zm", value: "zambia", label: "Updated Zambia", continent: "Africa" },
  {
    code: "zw",
    value: "zimbabwe",
    label: "Updated Zimbabwe",
    continent: "Africa",
  },
]

export default function ComboboxWithInnerInput() {
  return (
    <Combobox items={countries} defaultValue={countries[0]}>
      <ComboboxTrigger
        render={
          <Button
            variant="outline"
            className="w-full justify-between font-normal"
          />
        }
      >
        <ComboboxValue />
        <div className="flex">
          <ChevronsUpDownIcon className="-me-1 size-4 opacity-72" />
        </div>
      </ComboboxTrigger>
      <ComboboxPopup aria-label="Updated Select country">
        <div className="border-b p-2">
          <ComboboxInput
            className="rounded-md before:rounded-[calc(var(--radius-md)-1px)]"
            placeholder="Updated e.g. United Kingdom"
            showTrigger={false}
          />
        </div>
        <ComboboxEmpty>Updated No countries found.</ComboboxEmpty>
        <ComboboxList>
          {(country: Country) => (
            <ComboboxItem key={country.code} value={country}>
              {country.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  )
}
