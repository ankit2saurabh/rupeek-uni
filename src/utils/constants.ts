const referenceURL = "https://www.uni.cards";

const images = {
  bannerImages: referenceURL + "/images/nx-wave/nx_wave_hero.png",
  parentCashback: referenceURL + "/images/one_percent_cashback.png",
  rewards: referenceURL + "/images/five_x_rewards.png",
  globe: referenceURL + "/images/forex_globe.png",
  app: {
    screen_1: referenceURL + "/images/nx-wave/app_screen_1.webp",
    screen_2: referenceURL + "/images/nx-wave/app_screen_2.webp",
  },
  whatsapp: referenceURL + "/images/nx-wave/whatsapp_bubble.webp",
  rupeeBubble: referenceURL + "/images/nx-wave/rupee_bubble.webp",
  antivirusBubble: referenceURL + "/images/nx-wave/antivirus_bubble.webp",
  pciDss: referenceURL + "/images/pcidss_cert.svg",
  sbmBank: referenceURL + "/images/SBM.svg",
  rightArrow: referenceURL + "/images/right_arrow.svg",
  arrowDown: referenceURL + "/images/down_arrow.svg",
  circles: referenceURL + "/images/circles.png",
};

const MOBILE_NUMBER_REGEX = /^[6-9][0-9]{9}$/;

const BIG_CARD_DATA = [
  {
    id: "idx-1",
    titleBold: "1% assured cashback on your spends. ",
    titleNormal: " The more you spend, the more you earn.",
    subtitle: `Not applicable on fuel purchase, rent & wallet transfers, ATM
          withdrawals & international transactions.`,
    imageSrc: images.parentCashback,
    isReverse: false,
  },
  {
    id: "idx-2",
    titleBold: "5x more value than your cashback, ",
    titleNormal: "only at the Uni Store.",
    imageSrc: images.rewards,
    isReverse: true,
  },
  {
    id: "idx-3",
    titleBold: "Zero Forex Markup. \n",
    titleNormal: "Go international, without any fees.",
    imageSrc: images.globe,
    isReverse: false,
  },
];

const DARK_CARD_DATA = [
  {
    id: "idx-1",
    title: "We’ve all heard of instant groceries, now say hello to ",
    colouredText: "instant credit.",
    imgSrc: images.app.screen_1,
    subtitle: "0% hassle, 100% paperless. Get your Uni Card instantly.",
  },
  {
    id: "idx-2",
    title: "With Uni, ",
    colouredText: "you’re always in control.",
    imgSrc: images.app.screen_2,
    subtitle:
      "Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.",
  },
];

const CARDS_DATA = [
  {
    id: "card-1",
    title: "Help, just a WhatsApp away. Anytime, Anyday.",
    imgSrc: images.whatsapp,
    type: "TEXT",
    subtitle:
      "During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.",
    isReverse: false,
  },
  {
    id: "card-2",
    title: "No hidden charges, no last minute surprises.",
    imgSrc: images.rupeeBubble,
    type: "TEXT",
    subtitle:
      "100% money back guarantee if a charge is applied without your knowledge.",
    isReverse: true,
  },
  {
    id: "card-3",
    title: "Super secure. Because we care about your money.",
    imgSrc: images.antivirusBubble,
    type: "IMAGE",
    subtitle: images.pciDss,
    isReverse: false,
  },
];

const SOCIAL_MEDIA = [
  { id: "idx-1", title: "Instagram", link: "" },
  { id: "idx-2", title: "LinkedIn", link: "" },
  { id: "idx-3", title: "Twitter", link: "" },
  { id: "idx-4", title: "Facebook", link: "" },
  { id: "idx-5", title: "Careers", link: "" },
];
export {
  images,
  MOBILE_NUMBER_REGEX,
  BIG_CARD_DATA,
  DARK_CARD_DATA,
  CARDS_DATA,
  SOCIAL_MEDIA,
};
