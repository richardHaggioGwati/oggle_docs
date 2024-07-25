import type { NextPage } from "next";
import Image from "next/image";

const Signing: NextPage = () => {
    return (
        <div
            className={`w-[58.55rem] rounded-[164.94px] bg-whitesmoke h-[47.738rem] overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[12.375rem] px-[6.637rem] pb-[8.837rem] box-border gap-[2.562rem] text-left text-[2.625rem] text-white font-roboto`}
        >
            <div
                className="w-[45.275rem] shadow-[0px_38.5px_71.48px_rgba(0,_0,_0,_0.07)] rounded-2xl bg-royalblue flex flex-row items-start justify-start p-[1.968rem] box-border gap-[1.968rem]">
                <Image
                    className="w-[3.15rem] relative h-[3.15rem]"
                    width={50}
                    height={50}
                    alt=""
                    src="/facebook_logo.svg"
                />
                <div className="flex-1 relative font-medium">
                    Continue with Facebook
                </div>
            </div>
            <div
                className="w-[45.275rem] shadow-[0px_38.5px_71.48px_rgba(0,_0,_0,_0.07)] rounded-2xl bg-white flex flex-row items-start justify-start p-[1.968rem] box-border gap-[1.968rem] text-gray">
                <Image
                    className="w-[3.15rem] relative h-[3.15rem]"
                    alt=""
                    src="/google_logo.svg"
                    width={50}
                    height={50}
                />
                <div className="w-[25.194rem] relative font-medium inline-block h-[3.019rem] shrink-0">
                    Continue with Google
                </div>
            </div>
            <div
                className="w-[45.275rem] shadow-[0px_38.5px_71.48px_rgba(0,_0,_0,_0.07)] rounded-2xl bg-black h-[7.088rem] flex flex-row items-start justify-start p-[1.968rem] box-border gap-[1.968rem]">
                <Image
                    className="w-[3.15rem] relative h-[3.15rem] overflow-hidden shrink-0"
                    alt=""
                    width={50}
                    height={50}
                    src="/github_logo.svg"
                />
                <div className="relative font-medium">Continue with Github</div>
            </div>
        </div>
    );
};

export default Signing;
