import './styles.css';
import kot from '../../../Images/kot.jpg';

export function ImageFiles() {
  return (
    <div>
      <img src={kot} alt="obraz kota" />
      {/* <img
        src="https://premium4animals.pl/upload/premium4/blog//Kot-bengalski-brazowy.jpg"
        alt="Obraz kota"
      /> */}
    </div>
  );
}
