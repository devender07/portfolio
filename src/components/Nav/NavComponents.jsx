import tw from "twin.macro"

export const Nav = tw.nav`
    bg-white
    w-full
    h-[50px]
    flex
    justify-between
    items-center
    px-10
    md:px-20
    fixed
    top-0 
    z-10
`;

export const Logo = tw.div`
    h-full
    flex 
    items-center
`;

export const Links = tw.div`
    hidden 
    w-1/3 
    h-full
    md:block 
    min-w-[500px] 
`;

export const List = tw.ul`
    h-full flex justify-around items-center text-lg font-semibold
`;
export const Button = tw.div`
    md:hidden   
`;

export const SideBarContainer = tw.div`
    fixed top-[50px] bottom-0 right-0 bg-white w-3/4 flex flex-col
`;
export const SideBarLinksContainer = tw.div`
    h-full flex flex-col items-center justify-between py-10
`;
export const SideBarLinks = tw.ul`
h-auto flex flex-col justify-center items-start gap-10 text-lg font-semibold
`;
export const SideBarSocial = tw.div`
flex flex-col justify-between items-center py-5
`;
export const SideBarSocialLinks = tw.div`
flex gap-10
`;
export const SideBarFooter = tw.div`
    w-full 
    bg-green-500 
    flex 
    items-center 
    justify-center
`;



