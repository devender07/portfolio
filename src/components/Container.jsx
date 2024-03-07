import tw from 'twin.macro';

export const Container = tw.div`
    h-auto w-full justify-center items-center
`;
export const HeroContainer = tw.div`
    h-auto w-full flex justify-center lg:justify-around lg:gap-0 gap-5  items-center
`;

export const ImageContainer = tw.div`
    h-full w-[250px] md:h-[275px] flex justify-center items-center overflow-hidden
`;
export const Photo =tw.div`
    h-[250px] w-[175px]
`;
export const Info = tw.div`
    flex flex-col justify-center 
`;

export const Heading =tw.h1`
    w-[150px] lg:w-[300px] rounded p-2 border-b-4 border-green-600 text-3xl lg:text-5xl font-bold text-center my-10
`;

export const Card = tw.div`
    w-full h-auto min-h-[600px] md:w-2/3 xl:w-1/4 rounded border border-green-500 p-2 flex flex-col justify-between 
`;

export const ProjectImage = tw.div`
    h-[250px] rounded
`;

export const Footer = tw.div`
    w-full h-auto absolute bottom-0  text-white 
`;