export interface ILogo {
  color?: string;
  size?: number;
}
export interface IBigCard {
  isReverse?: boolean;
  titleBold: string;
  titleNormal: string;
  subtitle?: string;
  imageSrc: string;
}

export interface ISmallCard {
  isReverse: boolean;
  title: string;
  imgSrc: string;
  type: string;
  subtitle: string;
}
