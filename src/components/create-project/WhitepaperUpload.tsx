'use client'
import React, { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { Upload } from 'lucide-react';
import { formatFileSize } from '@/utils/project';

interface WhitepaperUploadProps {
    onFileUpload?: (file: File) => void;
    maxSizeInMB?: number;
}

const WhitepaperUpload: React.FC<WhitepaperUploadProps> = ({
    onFileUpload,
    maxSizeInMB = 4
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
            // Check if file is PDF
            if (uploadedFile.type !== 'application/pdf') {
                alert('Please upload a PDF file');
                return;
            }
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
            inputRef.current.value = '';
        }
    };

    return (
        <div className="">
            <h2 className="text-base text-white mb-4">Whitepaper PDF file</h2>

            <div
                className={`relative border-2 border-dashed rounded-lg p-8 cursor-pointer
          ${dragActive ? 'border-green-500 bg-green-50/5' : 'border-gray-600'}
          transition-colors duration-200`
                }
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
                    accept=".pdf"
                    onChange={handleChange}
                    aria-label="PDF file input"
                />

                <div>
                    {!file && <figure className='flex justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M10.4761 31.6667C6.53122 31.6667 3.33325 28.5063 3.33325 24.6078C3.33325 20.7094 6.53122 17.549 10.4761 17.549C10.9496 17.549 11.4124 17.5946 11.8602 17.6814M23.9682 13.3787C24.9611 13.0319 26.0296 12.8431 27.1428 12.8431C28.2339 12.8431 29.2822 13.0245 30.2584 13.3583M11.8602 17.6814C11.4784 16.663 11.2698 15.5615 11.2698 14.4118C11.2698 9.21379 15.5337 5 20.7936 5C25.6931 5 29.7284 8.65618 30.2584 13.3583M11.8602 17.6814C12.8009 17.864 13.6754 18.229 14.4444 18.7377M30.2584 13.3583C33.9882 14.6337 36.6666 18.1352 36.6666 22.2549C36.6666 26.7666 33.4543 30.5368 29.1666 31.4537" stroke="#8CE339" stroke-width="2" stroke-linecap="round" />
                            <path d="M20.0001 26.6665V36.6665M20.0001 26.6665L23.3334 29.9998M20.0001 26.6665L16.6667 29.9998" stroke="#8CE339" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </figure>}

                    {file ? (
                        <div>
                            <div className='rounded-[10px] bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.04)] backdrop-blur-lg flex items-center gap-2'>
                                <figure className='w-10 min-w-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M12.8275 3.37788L12.4094 3.84243V3.84244L12.8275 3.37788ZM16.1265 6.34696L15.7084 6.81152L16.1265 6.34696ZM18.0451 8.46158L17.4741 8.71586V8.71586L18.0451 8.46158ZM2.64306 17.3569L3.085 16.9149H3.085L2.64306 17.3569ZM17.3571 17.3569L16.9152 16.9149L17.3571 17.3569ZM11.6667 17.7082H8.33341V18.9582H11.6667V17.7082ZM2.29175 11.6665V8.33317H1.04175V11.6665H2.29175ZM17.7084 11.3023V11.6665H18.9584V11.3023H17.7084ZM12.4094 3.84244L15.7084 6.81152L16.5446 5.8824L13.2456 2.91332L12.4094 3.84244ZM18.9584 11.3023C18.9584 9.89529 18.971 9.00444 18.616 8.20731L17.4741 8.71586C17.6958 9.21355 17.7084 9.78487 17.7084 11.3023H18.9584ZM15.7084 6.81152C16.8363 7.82659 17.2525 8.21816 17.4741 8.71586L18.616 8.20731C18.261 7.41018 17.5904 6.82361 16.5446 5.8824L15.7084 6.81152ZM8.35824 2.2915C9.6764 2.2915 10.1738 2.30115 10.6172 2.47128L11.065 1.30426C10.3551 1.03185 9.58175 1.0415 8.35824 1.0415V2.2915ZM13.2456 2.91332C12.3406 2.09882 11.7748 1.57662 11.065 1.30426L10.6172 2.47128C11.0606 2.64145 11.4347 2.96514 12.4094 3.84243L13.2456 2.91332ZM8.33341 17.7082C6.7444 17.7082 5.61551 17.7068 4.75912 17.5917C3.92071 17.479 3.43768 17.2676 3.085 16.9149L2.20112 17.7988C2.82475 18.4224 3.61554 18.6992 4.59256 18.8306C5.5516 18.9595 6.77973 18.9582 8.33341 18.9582V17.7082ZM1.04175 11.6665C1.04175 13.2202 1.04042 14.4483 1.16936 15.4074C1.30072 16.3844 1.57748 17.1752 2.20112 17.7988L3.085 16.9149C2.73233 16.5622 2.52093 16.0792 2.40821 15.2408C2.29308 14.3844 2.29175 13.2555 2.29175 11.6665H1.04175ZM11.6667 18.9582C13.2204 18.9582 14.4486 18.9595 15.4076 18.8306C16.3846 18.6992 17.1754 18.4224 17.799 17.7988L16.9152 16.9149C16.5625 17.2676 16.0794 17.479 15.241 17.5917C14.3847 17.7068 13.2558 17.7082 11.6667 17.7082V18.9582ZM17.7084 11.6665C17.7084 13.2555 17.7071 14.3844 17.5919 15.2408C17.4792 16.0792 17.2678 16.5622 16.9152 16.9149L17.799 17.7988C18.4227 17.1752 18.6994 16.3844 18.8308 15.4074C18.9597 14.4483 18.9584 13.2202 18.9584 11.6665H17.7084ZM2.29175 8.33317C2.29175 6.74415 2.29308 5.61526 2.40821 4.75888C2.52093 3.92047 2.73233 3.43743 3.085 3.08476L2.20112 2.20087C1.57748 2.82451 1.30072 3.6153 1.16936 4.59232C1.04042 5.55136 1.04175 6.77949 1.04175 8.33317H2.29175ZM8.35824 1.0415C6.79623 1.0415 5.56209 1.04019 4.59914 1.16907C3.61868 1.30029 2.82524 1.57675 2.20112 2.20087L3.085 3.08476C3.43719 2.73257 3.92172 2.52088 4.76496 2.40802C5.6257 2.29282 6.76101 2.2915 8.35824 2.2915V1.0415Z" fill="#F7FDFD" />
                                        <path d="M10.8333 2.0835V4.16683C10.8333 6.13101 10.8333 7.11311 11.4434 7.7233C12.0536 8.3335 13.0357 8.3335 14.9999 8.3335H18.3333" stroke="#F7FDFD" stroke-width="1.25" />
                                    </svg>
                                </figure>
                                <div className='flex items-center justify-between grow'>
                                    <p className='flex flex-col items-start'>
                                        <span>{file.name.slice(0,20) + '...' + file.name.slice(file.name.length - 3, file.name.length)}</span>
                                        <span className='text-[#798675]'>{formatFileSize(file.size)}</span>
                                    </p>
                                    <figure onClick={handleRemoveFile}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M2.5 4.99984H4.16667M4.16667 4.99984H17.5M4.16667 4.99984V16.6665C4.16667 17.1085 4.34226 17.5325 4.65482 17.845C4.96738 18.1576 5.39131 18.3332 5.83333 18.3332H14.1667C14.6087 18.3332 15.0326 18.1576 15.3452 17.845C15.6577 17.5325 15.8333 17.1085 15.8333 16.6665V4.99984H4.16667ZM6.66667 4.99984V3.33317C6.66667 2.89114 6.84226 2.46722 7.15482 2.15466C7.46738 1.8421 7.89131 1.6665 8.33333 1.6665H11.6667C12.1087 1.6665 12.5326 1.8421 12.8452 2.15466C13.1577 2.46722 13.3333 2.89114 13.3333 3.33317V4.99984" stroke="#F7FDFD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p className="text-white mb-2 text-sm text-center">Click to Upload or Drag and Drop file</p>
                            <p className="text-[#798675] text-sm text-center">Max size of {maxSizeInMB}MB</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WhitepaperUpload;