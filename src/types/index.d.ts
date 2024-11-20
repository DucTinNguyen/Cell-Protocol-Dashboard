export interface ISlider {
    thumbnail: string | StaticImageData;
    logo: string | StaticImageData;
    type: string;
    title: string;
    desc: string;
    category: string[];
}

export interface IProduct {
    id: number;
    thumbnail: string | StaticImageData;
    logo: string | StaticImageData;
    type: string;
    title: string;
    desc: string;
    category: string[];
    gallery: StaticImageData []
}

export interface Job {
    title: string;
    date: string;
    description: string;
    location: string;
    type: string;
    workMode: string;
    company: string;
    createdBy: string;
    applyLink: string;
}

export enum SwiperType { 
    PROJECT = 1,
    JOB = 2,
}