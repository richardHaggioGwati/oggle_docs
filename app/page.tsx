import type { NextPage } from "next";
import Signing from "@/components/signing";
import Image from "next/image";

const Page: NextPage = () => {
  return (
      <div className="w-full relative bg-background h-[60rem] overflow-hidden flex flex-row items-start justify-start
      py-[6.125rem] px-[6.693rem] box-border gap-[0.875rem] text-left text-[7.5rem] text-bla">
        <div className="w-[40.5rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[3">
            <Image
                className="self-stretch relative max-w-full overflow-hidden h-[5.5rem] sh"
                loading="lazy"
                width={50}
                height={50}
                alt=""
                src="/oggle_logo.svg"
            />
          <div className="self-stretch relative h-[32.75rem] overflow-hidden shrink-0">
            <b className="absolute top-[8.188rem] left-[0rem] leading-[107.28%] inline-block w-[45rem] h-[30.438rem]">{`Your creativity, our canvas. `}</b>
            <div
                className="absolute top-[0rem] left-[0rem] w-[30.631rem] overflow-hidden flex flex-col items-end justify-center text-[2.756rem]">
              <div className="relative font-extrabold">
                <span>{`Welcome to `}</span>
                <span className="text-mediumseagreen">O</span>
                <span className="text-dodgerblue">g</span>
                <span className="text-orange">g</span>
                <span className="text-dodgerblue">l</span>
                <span className="text-tomato">e</span>
                <span> Docs!</span>
              </div>
            </div>
          </div>
        </div>
        <Signing/>
      </div>
  );
};

export default Page;