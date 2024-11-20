import { IProduct } from "@/types";
import item1 from '@/images/image.png'
import item2 from '@/images/image (1).png'
import item3 from '@/images/image (2).png'
import item4 from '@/images/image (3).png'
import item5 from '@/images/image (4).png'
import item6 from '@/images/image (5).png'
import ic1 from '@/images/projects/image.png'
import ic2 from '@/images/projects/image (1).png'
import ic3 from '@/images/projects/image (2).png'
import ic4 from '@/images/projects/image (3).png'
import ic5 from '@/images/projects/image (4).png'
import ic6 from '@/images/projects/image (5).png'

export const products: IProduct[] = [
    {
        id: 1,
        thumbnail: item1,
        logo: ic1,
        type: "Online",
        title: "GeneFlow",
        desc: "Revolutionizing Healthcare with Blockchain-Backed Genetic Data",
        category: ["Blockchain", "Genomics", "Data Privacy"]
    },
    {
        id: 2,
        thumbnail: item2,
        logo: ic2,
        type: "Online",
        title: "OpenSpace",
        desc: "Building a Transparent Food Supply with Blockchain for Agriculture",
        category: ["Blockchain", "Data", "Agriculture"]
    },
    {
        id: 3,
        thumbnail: item3,
        logo: ic3,
        type: "Worldwide",
        title: "NeuroLedger",
        desc: "Using Blockchain to Secure and Share Neuroscience Data Globally",
        category: ["Neuroscience", "Data Sharing", "NFT"]
    },
    {
        id: 4,
        thumbnail: item4,
        logo: ic4,
        type: "Worldwide",
        title: "HelixDAO",
        desc: "Decentralized healthcare platform",
        category: ["Health", "Blockchain", "DeFi"]
    },
    {
        id: 5,
        thumbnail: item5,
        logo: ic5,
        type: "Decentralized",
        title: "Preprints",
        desc: "BioVerse",
        category: ["Publication", "Research", "Decentralized"]
    },
    {
        id: 6,
        thumbnail: item6,
        logo: ic6,
        type: "Ras Al-Khaimah",
        title: "CellBlock",
        desc: "An AI Health App that Saves Lives",
        category: ["AI", "Healthcare", "Technology"]
    }
];

export function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}