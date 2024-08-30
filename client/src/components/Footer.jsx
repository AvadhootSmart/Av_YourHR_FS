import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

export default function Footer() {
    return (
        <>
            <div className="h-[10vh] w-full bg-[#fcbf49] px-20 flex items-center justify-between">
                <div className="flex gap-4">
                    <h1> © 2024 YourHR. All rights reserved</h1>
                    <p className="underline">Privacy Policy</p>
                    <p className="underline">Terms of service</p>
                    <p className="underline">Cookie settings</p>
                </div>
                <div className="flex gap-4 text-2xl">
                    <SlSocialInstagram />
                    <SlSocialLinkedin />
                </div>
            </div>
        </>
    );
}
