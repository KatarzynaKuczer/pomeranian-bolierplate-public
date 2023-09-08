import image from '../../../Images/snow-wolf.png';

import './styles.css';

export function FloatsAndPositioningExercise() {
  return (
    <div className="content__wrapper">
      <div className="first__box">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="second__box">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
        deleniti earum necessitatibus perspiciatis recusandae voluptate cum
        obcaecati, eum laboriosam doloribus incidunt corrupti accusantium
        maiores saepe neque excepturi autem a eligendi ipsa? Aliquid reiciendis
        voluptatibus placeat explicabo ea ratione, neque aperiam mollitia, hic
        perspiciatis iure earum facere? Repellendus dignissimos velit est.
        <div className="first__special-box">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
      <div className="third__box">
        <div className="third__box-container">
          <div className="third__box-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nesciunt quo fuga perferendis, maxime vero explicabo eos. Eius
              illum suscipit, ut libero velit minus accusantium exercitationem.
              Perferendis nostrum placeat sint.
            </p>
          </div>
          <div className="third__box-img">
            <img src={image} alt="Mały biały wilk na śniegu" />
          </div>
        </div>
      </div>
      <div className="fourth__box">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
        incidunt libero, quidem amet optio accusantium ipsam, dolores beatae
        laudantium voluptas esse dolor minima ullam voluptate sequi explicabo
        dicta ipsa provident fugiat voluptatum? Suscipit ab, quos omnis
        architecto quae molestias, corporis totam ea quis pariatur hic accusamus
        odit repellendus eum praesentium.
      </div>
      <div className="second__special-box">
        <span>zapisz na później</span>
      </div>
      <div className="fifth__box">
        <button>zapisz na później</button>
      </div>
      <div className="sixth__box">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          saepe explicabo iure quis inventore ab quas consequuntur, illo labore
          iusto velit necessitatibus alias accusantium ipsum facere minima ipsa
          placeat dolorum at omnis accusamus consequatur id harum molestias!
          Iure amet consectetur reprehenderit nihil vero illum quod, porro animi
          expedita inventore aliquid sequi iste dolorum ea tempore modi ad
          commodi suscipit ratione magni sapiente repellat accusamus? Iste
          deserunt esse quasi, necessitatibus rerum voluptatum modi! Eligendi
          iste ipsum culpa reprehenderit harum eos quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          saepe explicabo iure quis inventore ab quas consequuntur, illo labore
          iusto velit necessitatibus alias accusantium ipsum facere minima ipsa
          placeat dolorum at omnis accusamus consequatur id harum molestias!
          Iure amet consectetur reprehenderit nihil vero illum quod, porro animi
          expedita inventore aliquid sequi iste dolorum ea tempore modi ad
          commodi suscipit ratione magni sapiente repellat accusamus? Iste
          deserunt esse quasi, necessitatibus rerum voluptatum modi! Eligendi
          iste ipsum culpa reprehenderit harum eos quam.
        </p>
      </div>
      <div className="seventh__box">
        <div className="seventh__box-container">
          <div className="first-square"></div>
          <div className="second-square"></div>
          <div className="third-square"></div>
        </div>
      </div>
    </div>
  );
}
