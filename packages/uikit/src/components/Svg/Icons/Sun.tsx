import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <Svg viewBox="0 0 24 24" {...props}>
    //   <path d="M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" fill="black"/>
    //   <path d="M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" fill="black"/>
    //   <path d="M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" fill="black"/>
    //   <path d="M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" fill="black"/>
    //   <path d="M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" fill="black"/>
    //   <path d="M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" fill="black"/>
    //   <path
    //     d="M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
    //     fill="black"
    //   />
    //   <path d="M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" fill="black"/>
    //   <path d="M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" fill="black"/>
    // </Svg>
    
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFF8D4"/>
    <path d="M9.99995 12.5C11.2702 12.5 12.3 11.4702 12.3 10.2C12.3 8.92974 11.2702 7.89999 9.99995 7.89999C8.7297 7.89999 7.69995 8.92974 7.69995 10.2C7.69995 11.4702 8.7297 12.5 9.99995 12.5Z" fill="black"/>
    <path d="M9.99985 6.79999C9.79985 6.79999 9.59985 6.59999 9.59985 6.39999V5.29999C9.59985 5.09999 9.79985 4.89999 9.99985 4.89999C10.1999 4.89999 10.3999 5.09999 10.3999 5.29999V6.39999C10.3999 6.69999 10.1999 6.79999 9.99985 6.79999Z" fill="black"/>
    <path d="M9.99985 15.1C9.79985 15.1 9.59985 14.9 9.59985 14.7V13.6C9.59985 13.4 9.79985 13.2 9.99985 13.2C10.1999 13.2 10.3999 13.4 10.3999 13.6V14.7C10.3999 14.9 10.1999 15.1 9.99985 15.1Z" fill="black"/>
    <path d="M14.7 10.4H13.6C13.4 10.4 13.2 10.2 13.2 10C13.2 9.80001 13.4 9.60001 13.6 9.60001H14.7C14.9 9.60001 15.1 9.80001 15.1 10C15.1 10.2 14.9 10.4 14.7 10.4Z" fill="black"/>
    <path d="M6.3999 10.4H5.2999C5.0999 10.4 4.8999 10.2 4.8999 10C4.8999 9.80001 5.0999 9.60001 5.2999 9.60001H6.3999C6.5999 9.60001 6.7999 9.80001 6.7999 10C6.7999 10.2 6.6999 10.4 6.3999 10.4Z" fill="black"/>
    <path d="M13.2998 13.7C13.1998 13.7 13.0998 13.7 12.9998 13.6L12.1998 12.8C11.9998 12.6 11.9998 12.4 12.1998 12.2C12.3998 12 12.5998 12 12.7998 12.2L13.5998 13C13.7998 13.2 13.7998 13.4 13.5998 13.6C13.4998 13.7 13.3998 13.7 13.2998 13.7Z" fill="black"/>
    <path d="M7.5 7.9C7.4 7.9 7.3 7.9 7.2 7.8L6.4 7C6.2 6.8 6.2 6.6 6.4 6.4C6.6 6.2 6.8 6.2 7 6.4L7.8 7.2C8 7.4 8 7.6 7.8 7.8C7.7 7.9 7.6 7.9 7.5 7.9Z" fill="black"/>
    <path d="M6.7 13.7C6.6 13.7 6.5 13.7 6.4 13.6C6.2 13.4 6.2 13.2 6.4 13L7.2 12.2C7.4 12 7.6 12 7.8 12.2C8 12.4 8 12.6 7.8 12.8L7 13.6C6.9 13.7 6.8 13.7 6.7 13.7Z" fill="black"/>
    <path d="M12.4998 7.9C12.3998 7.9 12.2998 7.9 12.1998 7.8C11.9998 7.6 11.9998 7.4 12.1998 7.2L12.9998 6.4C13.1998 6.2 13.3998 6.2 13.5998 6.4C13.7998 6.6 13.7998 6.8 13.5998 7L12.7998 7.8C12.7998 7.9 12.5998 7.9 12.4998 7.9Z" fill="black"/>
    </svg>
    
    
    
  );
};

export default Icon;
