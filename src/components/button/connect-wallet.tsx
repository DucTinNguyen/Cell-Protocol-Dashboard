'use client'
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import ModalConnectWallet from "./modal-connect";
import { shortAddress } from "@/utils/address";

const BtnConnectWallet = ({ className }: { className?: string }) => {


    const [isOpen, setIsOpen] = useState(false);
    const {publicKey, disconnect} = useWallet()
    
    const handleOnclick = () => {
        if (publicKey) {
            disconnect();
        } else {
            open()
        }
    }

    function open() {
        setIsOpen(true)
    }


    return (
      <>    
            <button
                onClick={handleOnclick}
                className={`${className} rounded-lg text-[#003304] text-sm md:text-lg font-semibold h-[48px] py-2 border-[3px] border-[#D3FF33] bg-white shadow-[0px_0px_40px_5px_rgba(140,227,57,0.40)]`}
            >
                {publicKey? shortAddress(publicKey.toString()): 'Connect Wallet'}
            </button>
            <ModalConnectWallet isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
    
  );
};

export default BtnConnectWallet;
