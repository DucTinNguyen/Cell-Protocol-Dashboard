"use client";
import React, { useState, useRef, DragEvent, ChangeEvent } from "react";
import { Upload } from "lucide-react";
import { formatFileSize } from "@/utils/project";
import Image from "next/image";
import icRemove from '@/images/remove-media.svg'
interface ImageUploadProps {
    onFileUpload?: (file: File) => void;
    maxSizeInMB?: number;
    type?: "logo" | "cover" | "media";
    label: string;
    subtitle?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onFileUpload,
    maxSizeInMB = 4,
    type = "logo",
    label,
    subtitle,
}) => {
    const [dragActive, setDragActive] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const uploadedFile = e.dataTransfer.files[0];
        handleFileValidation(uploadedFile);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFileValidation(e.target.files[0]);
        }
    };

    const handleFileValidation = (uploadedFile: File): void => {
        if (uploadedFile) {
            // Check file size (4MB = 4 * 1024 * 1024 bytes)
            if (uploadedFile.size > maxSizeInMB * 1024 * 1024) {
                alert(`File size must be less than ${maxSizeInMB}MB`);
                return;
            }
            setFile(uploadedFile);
            onFileUpload?.(uploadedFile);
        }
    };

    const handleClick = (): void => {
        inputRef.current?.click();
    };

    const handleRemoveFile = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        setFile(null);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    return (
        <div className="">
            <p className="flex items-center gap-x-2 mb-4">
                <span className="text-base text-white">{label}</span>
                <span className="text-[#798675] text-base">{subtitle}</span>
            </p>

            <div
                className={`relative border-2 border-dashed rounded-lg p-8 cursor-pointer
          ${dragActive ? "border-green-500 bg-green-50/5" : "border-gray-600"}
          transition-colors duration-200`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={handleClick}
                role="button"
                tabIndex={0}
                aria-label="Upload PDF file"
            >
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleChange}
                    aria-label="PDF file input"
                />

                <div>
                    {!file && (
                        <figure className="flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <path
                                    d="M10.4761 31.6667C6.53122 31.6667 3.33325 28.5063 3.33325 24.6078C3.33325 20.7094 6.53122 17.549 10.4761 17.549C10.9496 17.549 11.4124 17.5946 11.8602 17.6814M23.9682 13.3787C24.9611 13.0319 26.0296 12.8431 27.1428 12.8431C28.2339 12.8431 29.2822 13.0245 30.2584 13.3583M11.8602 17.6814C11.4784 16.663 11.2698 15.5615 11.2698 14.4118C11.2698 9.21379 15.5337 5 20.7936 5C25.6931 5 29.7284 8.65618 30.2584 13.3583M11.8602 17.6814C12.8009 17.864 13.6754 18.229 14.4444 18.7377M30.2584 13.3583C33.9882 14.6337 36.6666 18.1352 36.6666 22.2549C36.6666 26.7666 33.4543 30.5368 29.1666 31.4537"
                                    stroke="#8CE339"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M20.0001 26.6665V36.6665M20.0001 26.6665L23.3334 29.9998M20.0001 26.6665L16.6667 29.9998"
                                    stroke="#8CE339"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </figure>
                    )}

                    {file ? (
                        <>
                            {type === 'logo' && <ImageLogoUploaded file={file} handleRemoveFile={handleRemoveFile} />}
                            {type === 'cover' && <CoverLogoUploaded file={file} handleRemoveFile={handleRemoveFile} />} 
                            {type === 'media' && <MediaLogoUploaded file={file} handleRemoveFile={handleRemoveFile} />}
                        </>
                    ) : (
                        <div>
                            <p className="text-white mb-2 text-sm text-center">
                                {type === "logo" && "Click to Upload or Drag and Drop Logo"}
                                {type === "cover" && "Click to Upload or Drag and Drop Cover Image"}
                                {type === "media" && "Click to Upload or Drag and Drop Media Images"}
                            </p>
                            <p className="text-[#798675] text-sm text-center">
                                {type === "logo" &&
                                    `Recommended dimensions: 1200x1200  |  Max size of ${maxSizeInMB}MB`}
                                {type === "cover" &&
                                    `Recommended dimensions: 1500x400   Max size of ${maxSizeInMB}MB`}
                                {type === "media" &&
                                    `Recommended dimensions: 1200x1200  Max size of ${maxSizeInMB}MB`}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;

const ImageLogoUploaded = ({ file, handleRemoveFile }: { file: File, handleRemoveFile: (e: React.MouseEvent<HTMLButtonElement>)=> void }) => {

    const previewUrl = URL.createObjectURL(file);

    return (
        <section className="flex flex-col lg:flex-row items-center gap-4 justify-center">
            <figure className="w-20 h-20 lg:w-[120px] lg:h-[120px] rounded-xl border border-[#3C3C3C] p-2">
                <Image src={previewUrl} alt="preview" width={0} height={0} sizes="100vw" className="w-full h-full"/>
            </figure>
            <div>
                <p className="text-[#F7FDFD] text-base font-semibold">Upload an image to represent the project</p>
                <ul className="flex flex-col list-disc pl-4 ">
                    <li className="text-[#798675] text-sm font-normal">Recommended dimensions: 1200x1200</li>
                    <li className="text-[#798675] text-sm font-normal">Max size of 2MB</li>
                </ul>
                <button onClick={handleRemoveFile} className="border border-[#8CE339] rounded-lg py-2 px-3 text-[#8CE339] text-sm font-semibold mt-2">Remove</button>
            </div>
        </section>
    )
}

const CoverLogoUploaded = ({ file, handleRemoveFile }: { file: File, handleRemoveFile: (e: React.MouseEvent<HTMLButtonElement>) => void }) => {

    const previewUrl = URL.createObjectURL(file);

    return (
        <section className="flex flex-col items-start  gap-4 justify-center w-full md:w-[382px] mx-auto">
            <figure className="w-full h-[100px] mx-auto rounded-xl border border-[#3C3C3C] p-2">
                <Image src={previewUrl} alt="preview" width={0} height={0} sizes="100vw" className="w-full h-full" />
            </figure>
            <div>
                <p className="text-[#F7FDFD] text-base font-semibold text-left">Upload a cover image</p>
                <ul className="flex flex-col list-disc pl-4 ">
                    <li className="text-[#798675] text-sm font-normal">Recommended dimensions: 1200x1200</li>
                    <li className="text-[#798675] text-sm font-normal">Max size of 2MB</li>
                </ul>
                <button onClick={handleRemoveFile} className="border border-[#8CE339] rounded-lg py-2 px-3 text-[#8CE339] text-sm font-semibold mt-2">Remove</button>
            </div>
        </section>
    )
}

const MediaLogoUploaded = ({ file, handleRemoveFile }: { file: File, handleRemoveFile: (e: React.MouseEvent<HTMLButtonElement>) => void }) => {

    const previewUrl = URL.createObjectURL(file);

    return (
        <section className="flex gap-4 justify-center w-full md:w-[382px] mx-auto">
            <figure className="w-[120px] h-[120px] relative mx-auto rounded-xl border border-[#3C3C3C] p-2">
                <Image src={previewUrl} alt="preview" width={0} height={0} sizes="100vw" className="w-full h-full" />
                <figure onClick={handleRemoveFile} className="absolute w-5 h-5 top-[-8px] right-[-8px]">
                    <Image src={icRemove} alt="remove" className="w-full h-full" />
                </figure>
            </figure>
        </section>
    )
}

