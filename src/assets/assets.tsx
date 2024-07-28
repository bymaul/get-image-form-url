import amikomLight from "./amikom-light.png";
import amikomDark from "./amikom-dark.png";
import ImageNotFound from "./404.png";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  stroke?: string;
  className?: string;
};

const assets = {
  amikomLight,
  amikomDark,
  ImageNotFound,
};

const Suit: React.FC<SVGIconProps> = ({ fill = "none", stroke = "none", ...props }) => (
  <svg width="38" height="32" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14.4201 14.5061L17.7114 5.59172C17.7579 5.4696 17.7637 5.34167 17.7347 5.21374C17.6009 4.63806 17.3044 3.74837 16.6298 2.84123C15.9437 1.92246 15.1586 1.38166 14.6353 1.0851C14.5015 1.0095 14.3503 0.986246 14.1992 1.02114C13.4548 1.18977 12.4896 1.34096 11.3731 1.32933C10.3322 1.3177 9.43668 1.17814 8.72725 1.01532C8.59351 0.986246 8.45395 0.997875 8.33183 1.05602C7.76196 1.32351 6.84901 1.86431 6.05817 2.8703C5.37781 3.73674 5.06381 4.60317 4.91262 5.17304C4.87773 5.30678 4.88354 5.44634 4.93588 5.57427C6.1105 8.6097 7.27932 11.6451 8.45395 14.6805L9.62857 10.6159C9.65183 10.5345 9.61113 10.453 9.53553 10.4182C9.28549 10.3135 8.92496 10.1158 8.58769 9.74944C8.25042 9.38309 8.08179 8.9993 7.99456 8.75507C7.97712 8.70855 7.92478 8.69692 7.88989 8.726L7.36073 9.13305C7.22698 9.2319 7.03509 9.1912 6.95949 9.04582C6.89553 8.92952 6.9246 8.77833 7.03509 8.69692L11.1928 5.58009C11.2742 5.52194 11.3847 5.51612 11.4661 5.57427L15.7576 8.64459C15.8681 8.726 15.9088 8.87137 15.8448 8.99349C15.7634 9.15631 15.5541 9.20283 15.4145 9.08653L14.5655 8.39454C14.5248 8.36547 14.4666 8.38291 14.455 8.42943C14.3794 8.73181 14.2108 9.21446 13.8096 9.67384C13.5362 9.99367 13.2397 10.203 13.0187 10.3367C12.9489 10.3775 12.914 10.4647 12.9431 10.5403C13.4374 11.8661 13.9259 13.1861 14.4201 14.5061Z" stroke={fill} strokeWidth="0.5" strokeMiterlimit="10" />
    <path d="M22.5784 12.256L21.5085 10.2789C21.4271 10.1277 21.4562 9.94745 21.5841 9.83115L22.2935 9.17987C22.4563 9.0345 22.4505 8.77864 22.2877 8.63327C22.0318 7.97617 21.3747 6.55732 19.8687 5.44084C18.9615 4.7663 18.066 4.44647 17.4496 4.28947C17.5892 4.63255 17.6764 4.94075 17.7346 5.19079C17.7636 5.31872 17.7578 5.44665 17.7113 5.56877L14.42 14.4831C13.9257 13.1631 13.4373 11.8373 12.943 10.5173C12.9139 10.4417 12.9488 10.3545 13.0186 10.3138C13.2454 10.1801 13.5361 9.97071 13.8094 9.65089C14.2049 9.18569 14.3735 8.70305 14.4549 8.40648C14.4665 8.35996 14.5247 8.3367 14.5654 8.37159L15.4144 9.07521C15.5539 9.19151 15.7633 9.14498 15.8447 8.98217C15.9028 8.86005 15.8679 8.71468 15.7575 8.63327L11.466 5.56295C11.3846 5.5048 11.2741 5.5048 11.1927 5.56877L7.02335 8.6856C6.91286 8.76701 6.88379 8.91239 6.94775 9.0345C7.02916 9.17987 7.22106 9.22058 7.34899 9.12172L7.87815 8.71468C7.91304 8.6856 7.96537 8.70305 7.98282 8.74375C8.06423 8.98798 8.23286 9.37177 8.57595 9.73811C8.91322 10.1045 9.27956 10.3022 9.52379 10.4068C9.59939 10.4417 9.64009 10.5231 9.61683 10.6045L8.4422 14.6692C7.26758 11.6338 6.09876 8.59838 4.92413 5.56295C4.8718 5.43502 4.86598 5.29546 4.90087 5.16172C4.97065 4.89423 5.08114 4.55696 5.24396 4.1848C5.1451 4.1848 4.9881 4.15572 4.69735 4.28947C4.017 4.61511 3.06334 5.17335 2.11549 6.08049C1.09206 7.06322 0.481482 8.06921 0.126767 8.76701C0.103507 8.79027 0.0395424 8.86005 0.0220974 8.97635C0.0104674 9.05194 0.0220972 9.13335 0.0628021 9.20895L0.719896 10.4068C0.778046 10.5057 0.778046 10.6278 0.731526 10.7383L0.0337272 12.2734C-0.0302377 12.413 -0.00116292 12.57 0.103507 12.6805L10.8961 23.886C11.0415 24.0372 11.2741 24.0372 11.4195 23.8918L22.5028 12.6979C22.6366 12.5758 22.6599 12.3956 22.5784 12.256Z" fill={fill} />
    <path d="M11.9679 5.00004C12.3827 4.89776 13.1498 4.64774 13.8885 4.02836C14.4909 3.52263 14.8318 2.97145 15.0079 2.61914" stroke={stroke} strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" />
    <path d="M10.5529 4.92606C10.1608 4.85219 9.42776 4.65899 8.70042 4.10781C8.10946 3.6589 7.76283 3.15885 7.57532 2.83496" stroke={stroke} strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" />
  </svg>
);

const Toga: React.FC<SVGIconProps> = ({ fill = "none", stroke = "none", ...props }) => (
  <svg width="34" height="24" viewBox="0 0 28 16" className='items-center' fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6.48499 9.08954V10.0387V10.4136V13.4546C6.48499 14.8633 9.48075 15.9999 13.1773 15.9999C16.8738 15.9999 19.8696 14.8573 19.8696 13.4546V10.4075V10.0327V9.0835L13.8138 11.5139C13.4576 11.659 13.0605 11.659 12.7043 11.52L6.48499 9.08954Z" fill={fill} />
    <path d="M26.0247 5.15407L13.3642 0.0453437C13.2065 -0.0151146 13.0313 -0.0151146 12.8795 0.0453437L0.207332 5.25685C-0.0729735 5.37172 -0.0671339 5.78888 0.213172 5.8977L12.9788 10.7525C13.1306 10.8069 13.2941 10.8069 13.4459 10.7525L26.0247 5.79493C26.305 5.68006 26.3108 5.26894 26.0247 5.15407ZM5.36963 6.7804C5.31708 6.93154 5.15356 7.01014 5.00757 6.95572L2.22787 5.8977C2.08188 5.84329 2.00596 5.67401 2.05852 5.52286C2.11108 5.37172 2.27459 5.29312 2.42058 5.34753L5.20028 6.40555C5.34627 6.45997 5.42219 6.62925 5.36963 6.7804ZM22.4041 6.48415L13.7905 9.86981C13.6211 9.93632 13.4343 9.84563 13.37 9.6703L13.3408 9.59775C13.2766 9.42242 13.3642 9.22896 13.5335 9.16245L22.1471 5.77679C22.3165 5.71028 22.5033 5.80097 22.5676 5.9763L22.5968 6.04885C22.661 6.21813 22.5734 6.41765 22.4041 6.48415Z" fill={fill} />
    <path d="M26.2348 5.4624H25.4932V9.45265H26.2348V5.4624Z" fill={fill} />
    <path d="M25.867 11.3811C26.4185 11.3811 26.8656 10.8939 26.8656 10.2928C26.8656 9.69182 26.4185 9.20459 25.867 9.20459C25.3155 9.20459 24.8684 9.69182 24.8684 10.2928C24.8684 10.8939 25.3155 11.3811 25.867 11.3811Z" fill={fill} />
    <path d="M27.0407 11.9013C26.994 11.7381 26.9181 11.5688 26.8071 11.4056C26.3633 10.7466 25.6801 10.6317 25.5633 10.6196C25.5224 10.9098 25.4348 11.2847 25.2655 11.6958C25.0669 12.1674 24.8275 12.5241 24.6348 12.7659C24.6464 12.7961 24.9559 13.5337 25.6859 13.6365C25.8085 13.6546 25.9253 13.6546 26.048 13.6305C26.813 13.5095 27.2743 12.6752 27.0407 11.9013ZM26.0246 13.4128C25.9487 13.4188 25.8669 13.4188 25.791 13.4068C25.2012 13.3221 24.956 12.7357 24.9443 12.7115C25.1019 12.518 25.2947 12.2339 25.4523 11.859C25.5925 11.5265 25.6567 11.2303 25.6918 11.0005C25.7852 11.0126 26.3341 11.1033 26.6903 11.6293C26.7663 11.7442 26.8247 11.859 26.8597 11.9678C27.0933 12.6268 26.6903 13.3463 26.0246 13.4128Z" fill={fill} />
    <path d="M26.0304 11.1211H25.6742V12.6386H26.0304V11.1211Z" fill={fill} />
    <path d="M26.2932 10.8672H25.937V12.3847H26.2932V10.8672Z" fill={fill} />
    <path d="M25.9019 11.0063H25.5457V12.5239H25.9019V11.0063Z" fill={fill} />
  </svg>
);

const Sun: React.FC<SVGIconProps> = ({ fill = "none", stroke = "none", className, ...props }) => (
  <svg width="28" height="28" className={className} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 23.2031C19.5305 23.2031 23.2031 19.5305 23.2031 15C23.2031 10.4695 19.5305 6.79688 15 6.79688C10.4695 6.79688 6.79688 10.4695 6.79688 15C6.79688 19.5305 10.4695 23.2031 15 23.2031Z" fill={fill} />
    <path d="M15.0117 4.62891C14.2266 4.62891 13.5938 3.99609 13.5938 3.21094V1.41797C13.5938 0.632812 14.2266 0 15.0117 0C15.7969 0 16.4297 0.632812 16.4297 1.41797V3.21094C16.4297 3.98438 15.7969 4.62891 15.0117 4.62891Z" fill={fill} />
    <path d="M22.207 7.52322C21.7031 6.92557 21.7734 6.03494 22.3711 5.53104L23.7422 4.37088C24.3398 3.86697 25.2305 3.93729 25.7344 4.53494C26.2383 5.1326 26.168 6.02322 25.5703 6.52713L24.1992 7.68729C23.6016 8.19119 22.7109 8.12088 22.207 7.52322Z" fill={fill} />
    <path d="M4.24219 4.57059C3.73828 5.16824 3.80859 6.05887 4.40625 6.56277L5.77734 7.72293C6.375 8.22684 7.26562 8.15652 7.76953 7.55887C8.27344 6.96121 8.20312 6.07059 7.60547 5.56668L6.23437 4.40652C5.64844 3.90262 4.74609 3.97293 4.24219 4.57059Z" fill={fill} />
    <path d="M22.1602 22.5354C21.6562 23.1331 21.7266 24.0237 22.3242 24.5276L23.6953 25.6878C24.293 26.1917 25.1836 26.1214 25.6875 25.5237C26.1914 24.9261 26.1211 24.0354 25.5234 23.5315L24.1523 22.3714C23.5547 21.8675 22.6641 21.9378 22.1602 22.5354Z" fill={fill} />
    <path d="M30 15C30 15.7852 29.3672 16.418 28.582 16.418H26.7891C26.0039 16.418 25.3711 15.7852 25.3711 15C25.3711 14.2148 26.0039 13.582 26.7891 13.582H28.582C29.3672 13.582 30 14.2148 30 15Z" fill={fill} />
    <path d="M4.62891 15C4.62891 15.7852 3.99609 16.418 3.21094 16.418H1.41797C0.632811 16.418 0 15.7852 0 15C0 14.2148 0.632811 13.582 1.41797 13.582H3.21094C3.99609 13.582 4.62891 14.2148 4.62891 15Z" fill={fill} />
    <path d="M4.28906 25.4763C3.78515 24.8787 3.85547 23.9881 4.45312 23.4842L5.82422 22.324C6.42187 21.8201 7.3125 21.8904 7.81641 22.4881C8.32031 23.0857 8.25 23.9763 7.65234 24.4803L6.28125 25.6404C5.68359 26.1443 4.79297 26.074 4.28906 25.4763Z" fill={fill} />
    <path d="M15.0117 30C14.2266 30 13.5938 29.3672 13.5938 28.582V26.7891C13.5938 26.0039 14.2266 25.3711 15.0117 25.3711C15.7969 25.3711 16.4297 26.0039 16.4297 26.7891V28.582C16.418 29.3672 15.7852 30 15.0117 30Z" fill={fill} />
  </svg>
);

const Moon: React.FC<SVGIconProps> = ({ fill = "none", stroke = "none", className, ...props }) => (
  <svg width="23" height="24" className={className} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22.9228 15.9725C20.9628 21.6697 15.0682 25.0731 9.15885 23.6937C2.80741 22.2094 -1.15672 15.7775 0.3022 9.31567C1.58428 3.6484 6.62417 -0.159767 12.1209 0.00515337C12.563 0.0501317 12.9461 0.364978 13.064 0.799768C13.1819 1.26454 12.9903 1.75931 12.5777 2.01418C9.9841 3.25858 8.20098 5.86733 8.20098 8.88088C8.20098 13.1088 11.7083 16.5272 16.0261 16.5272C18.1187 16.5272 20.0197 15.7326 21.4196 14.4282C21.5081 14.3532 21.9059 13.9934 22.2891 14.0984C22.7754 14.2183 23.1733 14.9979 22.9228 15.9725Z" fill={fill} />
  </svg>
);

const Search: React.FC<SVGIconProps> = ({ fill = "none", stroke = "none", ...props }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16.6231 14.6054L14.5389 16.8662L17.6003 19.6886L19.6846 17.4279L16.6231 14.6054Z" fill={fill} />
    <path d="M9.76965 0C4.37766 0 0 4.37766 0 9.76965C0 15.1616 4.37766 19.5393 9.76965 19.5393C15.1616 19.5393 19.5393 15.1616 19.5393 9.76965C19.5286 4.37766 15.1616 0 9.76965 0ZM9.76965 16.9554C5.79773 16.9554 2.58389 13.7416 2.58389 9.76965C2.58389 5.79773 5.79773 2.58389 9.76965 2.58389C13.7416 2.58389 16.9554 5.79773 16.9554 9.76965C16.9554 13.7416 13.7416 16.9554 9.76965 16.9554Z" fill={fill} />
    <path d="M27.0881 27.0027C25.8175 28.3054 23.7354 28.3374 22.4328 27.0668L17.7562 22.5183C16.4536 21.2477 16.4215 19.1657 17.6921 17.863C18.9627 16.5604 21.0448 16.5284 22.3474 17.799L27.024 22.3475C28.316 23.6181 28.348 25.7001 27.0881 27.0027Z" fill={fill} />
  </svg>
);

export { amikomLight, amikomDark, ImageNotFound, Suit, Toga, Sun, Moon, Search };
export default { assets };
