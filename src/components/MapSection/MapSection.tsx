import SocialsList from "../utils-components/SocialsList/SocialsList";
import TwoColoredBlock from "../utils-components/TwoColoredBlock/TwoColoredBlock";
import "./MapSection.scss";

function MapSection() {
  return (
    <TwoColoredBlock>
      <div className="contacts" id="contacts">
        <h2 className="contacts__title">Контакты</h2>
        <dl className="contacts__list">
          <dt className="contacts__dt">Адрес</dt>
          <dd className="contacts__dd">
            Нижний Новгород, ул.&nbsp;Свирская,&nbsp;20
          </dd>
          <dt className="contacts__dt">Телефон</dt>
          <dd className="contacts__dd">+7 (906) 556-37-82</dd>
          <dt className="contacts__dt">E-mail</dt>
          <dd className="contacts__dd"><a className="contacts__mail-link" href="mailto:info@maroon.ru">infolovelylooks@bk.ru</a></dd>
        </dl>
        <SocialsList />
      </div>
      <div className="map-area">
        <iframe
          className="map-area__map"
          src="https://yandex.ru/map-widget/v1/?ll=43.852070%2C56.350263&z=16.6"
          // Тут с пометкой src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=43.849652%2C56.350837&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njk4NzE2NxJM0KDQvtGB0YHQuNGPLCDQndC40LbQvdC40Lkg0J3QvtCy0LPQvtGA0L7QtCwg0KHQstC40YDRgdC60LDRjyDRg9C70LjRhtCwLCAyMCIKDQtmL0IVQmdhQg%2C%2C&source=mapframe&utm_source=mapframe&z=17.06"
          frameBorder="0"
        ></iframe>
      </div>
    </TwoColoredBlock>
  );
}

export default MapSection;
