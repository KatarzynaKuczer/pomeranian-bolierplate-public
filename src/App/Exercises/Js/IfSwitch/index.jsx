import './styles.css';

export const IfSwitch = () => {
  //---------------------------------------------------------
  //
  // IF - instrukcje warunkowe
  //
  //---------------------------------------------------------

  // if (true) {
  //   console.log('Ten kod wywoła się zawsze, bo true!');
  // }

  // if (false) {
  //   console.log('Ten kod się nie wywoła, bo false!');
  // }

  //
  // IF
  //

  const isRainy = true;
  const isSunny = false;

  if (isRainy) {
    console.log('Weź parasol!');
  } else if (isSunny) {
    console.log('Weź okulary przeciwsłoneczne!');
  } else {
    console.log('Pogoda nie działa..');
  }

  //
  // SHORTEN IF
  //

  if (isRainy) console.log('Weź parasol!');
  if (isSunny) console.log('Weź okulary przeciwsłoneczne!');
  if (!isRainy && !isSunny) console.log('Pogoda nie działa');

  //
  // TERNARY OPERATOR
  //

  const age = 18;

  const isAdultMessage =
    age >= 18 ? 'Możesz kupić piwo' : 'Nie możesz kupić piwa';
  console.log(isAdultMessage);

  // rozszerzenie z kolejnym ternary

  const moneyAmout = 0;

  const isAdultMessageExtended =
    age >= 18
      ? moneyAmout > 0
        ? 'Możesz kupić piwo'
        : 'Nie możesz kupić piwa - brak pieniędzy'
      : 'Nie możesz kupić piwa';
  console.log(isAdultMessageExtended);

  //
  // SWITCH
  //

  const dayOfWeak = 'Środa';

  switch (dayOfWeak) {
    case 'Monday':
      console.log('Poniedziałek');
      break;
    case 'Tuesday':
      console.log('Wtorek');
      break;
    default:
      console.log('Nie znam tego dnia tygodnia!');
  }

  //
  // EARLY RETURN - po pierwszym true kończy działanie
  //

  const getWeatherMessage = (isRainy, isSunny) => {
    if (isRainy) {
      return 'Weź parasol';
    }

    if (isSunny) {
      return 'Weź okulary przeciwsłoneczne';
    }

    return 'Pogoda nie działa..';
  };

  console.log(getWeatherMessage(isRainy, isSunny));

  return <div>If switch</div>;
};
