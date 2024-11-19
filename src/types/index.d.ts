export interface ISlider {
    thumbnail: string | StaticImageData;
    logo: string;
    type: string;
    title: string;
    desc: string;
    category: string[];
}

export interface IProduct {
    thumbnail: string | StaticImageData;
    logo: string | StaticImageData;
    type: string;
    title: string;
    desc: string;
    category: string[];
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