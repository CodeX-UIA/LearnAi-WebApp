import Image from 'next/image';

import { LogoWrapper } from './styles';
import logo from '../../../public/assets/icons/logo-black.svg';

function Logo() {
  return (
    <LogoWrapper href="/">
      <Image src={logo} alt="" width="100%" height={30} />
    </LogoWrapper>
  );
}

export default Logo;
