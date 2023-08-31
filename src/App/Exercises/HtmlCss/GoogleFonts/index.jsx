import { useState } from 'react';

import './styles.css';

export function GoogleFonts() {
  const [dynamicClass, setDynamicClass] = useState('f-roboto');

  return (
    <>
      <p className={`${dynamicClass}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor sed
        culpa corporis voluptatum in consequatur assumenda libero sit atque
        perferendis incidunt veniam doloremque dolorem a natus, at ex
        repudiandae magni officiis illum voluptate rem modi numquam? Est
        eligendi, nam fugit quia debitis soluta suscipit aperiam id explicabo,
        recusandae, dolorem porro laborum modi quo molestiae commodi reiciendis
        similique. Repellat voluptatem voluptatum quas. Eos, quod veritatis
        soluta quisquam possimus tenetur ab reiciendis dolorum. Deserunt cumque
        vero expedita minus maxime impedit placeat!
      </p>

      <button onClick={() => setDynamicClass('f-montserrat')}>
        Montserrat
      </button>
      <button onClick={() => setDynamicClass('f-lato')}>Lato</button>
      <button onClick={() => setDynamicClass('f-poppins')}>Poppins</button>
      <button onClick={() => setDynamicClass('f-roboto')}>Roboto</button>
    </>
  );
}
