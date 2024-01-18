export const TursoLogo = ({
  width = 100,
  height = 35,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 1303 326"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M466.914 121.417V298.41H412.464V121.417H374.643V69.9045H504.408V121.417H466.914Z" fill="white" />
    <path d="M521.683 207.272V69.9045H576.132V207.272C576.132 233.028 588.195 250.859 614.931 250.859C640.691 250.859 653.08 232.697 653.08 206.941V69.9045H707.526V206.942C707.526 262.087 676.228 302.703 614.28 302.703C550.7 302.703 521.683 264.397 521.683 207.272Z" fill="white" />
    <path d="M854.24 194.063L905.754 298.409H847.392L803.054 204.629H788.379V298.409H734.255V69.9045H811.855C859.13 69.9045 882.935 94.671 882.935 137.927C882.935 163.354 872.498 182.836 854.24 194.063ZM788.379 117.454V159.721H807.294C819.682 159.721 826.853 151.136 826.853 138.257C826.853 125.709 819.354 117.454 807.294 117.454H788.379Z" fill="white" />
    <path d="M979.447 152.127L1007.81 163.354C1037.15 175.571 1054.44 195.384 1054.44 229.396C1054.44 275.625 1022.15 302.702 976.838 302.702C912.278 302.702 900.546 260.105 902.498 226.754H954.012C953.362 241.283 958.902 255.483 976.838 255.483C989.227 255.483 998.356 248.548 998.356 235.34C998.356 222.462 989.227 216.188 974.557 210.574C963.141 205.951 951.732 201.658 939.343 195.385C916.517 183.497 904.457 161.043 904.457 133.305C904.457 93.3496 933.145 65.6119 977.16 65.6119C1030.31 65.6119 1049.55 96.3214 1047.26 136.938H997.055C997.377 122.739 990.206 112.832 977.489 112.832C965.1 112.832 958.902 120.426 958.902 130.003C958.902 139.579 964.121 146.183 979.447 152.127Z" fill="white" />
    <path d="M1183.22 65.6119C1256.91 65.6119 1302.89 116.794 1302.89 183.497C1302.89 250.199 1257.23 302.702 1184.85 302.702C1111.17 302.702 1066.18 251.52 1066.18 184.487C1066.18 118.115 1113.78 65.6119 1183.22 65.6119ZM1184.53 251.19C1224.31 251.19 1245.82 221.471 1245.82 184.157C1245.82 146.844 1223 117.125 1184.2 117.125C1144.43 117.125 1123.23 146.844 1123.23 184.157C1123.23 221.801 1147.03 251.19 1184.53 251.19Z" fill="white" />
    <path d="M306.974 10.9017L299.346 5.19527L284.27 21.3339L272.183 3.87493L265.23 7.06744L274.797 31.4735L270.367 36.216L236.028 0L228.245 3.85641L258.782 69.4898L230.169 79.5494H229.487L213.975 61.1026L198.451 79.5652H108.521L92.9966 61.1026L77.4406 79.6031H76.9604L48.1897 69.4885L78.7288 3.85641L70.9454 0L36.6051 36.2151L32.1752 31.4726L41.7435 7.06655L34.7906 3.87401L22.7039 21.333L7.62807 5.19527L0 10.9017L23.4697 50.0686L11.3912 62.8063L15.6141 95.0447L43.5877 105.729L43.5322 119.668H17.043V125.684L27.2966 140.311L43.5322 146.188V240.805L85.03 302.565L94.5406 325.72L109.486 303.924L124.977 325.72L138.539 303.924L153.486 325.72L168.432 303.924L181.995 325.72L197.485 303.924L212.43 325.72L221.941 302.565L263.439 240.805V146.188L279.674 140.311L289.928 125.684V119.668H263.439L263.479 105.693L291.357 95.0454L295.58 62.8072L283.501 50.0695L306.974 10.9017ZM185.788 264.93H99.6503L110.417 243.011L121.185 264.93L131.951 250.24L142.718 264.93L153.486 250.239L164.253 264.93L175.021 250.24L185.788 264.93L196.554 243.011L207.322 264.93H185.788ZM238.521 164.632L193.731 179.355L191.801 220.899L153.438 229.4L115.076 220.899L113.146 179.355L68.3558 164.632V142.455L126.259 158.862L125.553 214.873H181.322L180.617 158.862L238.52 142.455L238.521 164.632Z" fill="#4FF8D2" />
  </svg>
);

export const LoaderIcon = ({
  width = 35,
  height = 35,
  styles = "",
}: {
  width?: number;
  height?: number;
  styles?: string;
}) => (
  <svg
    width={width}
    height={height}
    className={styles}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path></svg>
);

export const BuildingIcon = ({
  width = 35,
  height = 35,
  styles = "",
}: {
  width?: number;
  height?: number;
  styles?: string;
}) => (
  <svg
    width={width}
    height={height}
    className={styles}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 19.0002V5.70058C3 5.28007 3.26307 4.90449 3.65826 4.76079L13.3291 1.24411C13.5886 1.14974 13.8755 1.28361 13.9699 1.54313C13.9898 1.5979 14 1.65573 14 1.714V6.66682L20.3162 8.77223C20.7246 8.90834 21 9.29048 21 9.72091V19.0002H23V21.0002H1V19.0002H3ZM5 19.0002H12V3.85555L5 6.40101V19.0002ZM19 19.0002V10.4417L14 8.77501V19.0002H19Z"></path></svg>
);