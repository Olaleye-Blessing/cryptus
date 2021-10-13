import organized from "./../assests/svg/organized.svg";
import available from "./../assests/svg/available.svg";
import secured from "./../assests/svg/secured.svg";

interface Features {
    img: string;
    header: string;
    text: string;
}

export const homeFeatures: Features[] = [
    {
        img: organized,
        header: "System 24 hours",
        text: "You can monitor live charts any time, any day.",
    },
    {
        img: available,
        header: "Organized data",
        text: "Provide invoice quickly and practically.",
    },
    {
        img: secured,
        header: "The Best Security",
        text: "Your account is safely secured with our non breakable system",
    },
];
