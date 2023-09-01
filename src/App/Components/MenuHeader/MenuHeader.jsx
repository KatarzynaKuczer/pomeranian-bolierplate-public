import './styles.css';
import { RoundImage } from '../RoundImage';
import { SettingIcon } from '../Icons/SettingIcon';
import arrowToggle from '../../Images/toggle-arrow.svg';

export const MenuHeader = () => {
  return (
    <div className="header-menu">
      <SettingIcon />
      <RoundImage
        url="https://media.licdn.com/dms/image/D4D03AQGmpz3QYUd46g/profile-displayphoto-shrink_200_200/0/1688659151125?e=1698883200&v=beta&t=r-JchaH7Ukw8WNJ9rZqPMnYl2R07tHdxCyELAADNeSA"
        size="49px"
      />
      <div className="header-user-info">
        <b className="header-user-name">Kasia</b>
        <span className="header-user-position">kursantka</span>
      </div>
      <img src={arrowToggle} alt="toggle-arrow" style={{ height: '20px' }} />
    </div>
  );
};
